"use client";

import { useState } from "react";
import useSWR from "swr";
import { format } from "date-fns";
import Calendar from "react-calendar";
import { Gallery4, Gallery4Item } from "@/components/ui/gallery4";
import { PaginatedCards, NewsItem } from "@/components/blocks/PaginatedCards";

// Use Cloudflare Workers API in production, local API in development
const API_BASE = process.env.NODE_ENV === 'production' 
  ? 'https://cf-news-api.your-subdomain.workers.dev' 
  : 'http://localhost:4000';

const fetcher = (url: string) => fetch(`${API_BASE}${url}`).then((r) => r.json());

export default function Dashboard() {
  // selected date for fetching
  const [selectedDate, setSelectedDate] = useState(new Date());
  const isoDate = format(selectedDate, "yyyy-MM-dd");

  // fetch news for that date
  const { data: newsByCategory, error } = useSWR<Record<string, any[]>>(
    `/api/news?date=${isoDate}`,
    fetcher,
    { revalidateOnFocus: false }
  );
  
  if (error) return <div>Error loading news</div>;
  if (!newsByCategory) return <div>Loading…</div>;

  return (
    <div className="container mx-auto py-8">
      {/* calendar picker */}
      <Calendar
        onChange={(date) => setSelectedDate(date as Date)}
        value={selectedDate}
        tileClassName={({ date }) =>
          // highlight days you have data for
          newsByCategory[format(date, "yyyy-MM-dd")] ? "bg-primary/20" : ""
        }
      />

      {Object.entries(newsByCategory).map(([category, articles]) => {
        // prepare items for carousel + cards
        const carouselItems: Gallery4Item[] = articles.slice(0, 5).map((a) => ({
          id: a.url,
          title: a.title,
          description: a.description,
          href: a.url,
          image: a.image,
        }));
        const cardItems: NewsItem[] = articles.map((a) => ({
          id: a.url,
          title: a.title,
          description: a.description,
          href: a.url,
          image: a.image,
        }));

        return (
          <section key={category} className="my-16">
            <h2 className="text-3xl font-semibold mb-4">{category}</h2>

            {/* dynamic carousel */}
            <Gallery4 title={category} items={carouselItems} />

            {/* dynamic paginated grid */}
            <PaginatedCards items={cardItems} itemsPerPage={9} />
          </section>
        );
      })}
    </div>
  );
} 