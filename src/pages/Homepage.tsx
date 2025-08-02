import React from "react";
import Header from "@/components/Header";
import NewsCarousel from "@/components/NewsCarousel";
import NewsGrid from "@/components/NewsGrid";
import { PaginatedCards, NewsItem } from "@/components/blocks/PaginatedCards";
import Footer from "@/components/Footer";

const Homepage = () => {
  // Sample data for PaginatedCards
  const sampleNewsItems: NewsItem[] = [
    {
      id: "1",
      title: "The Future of Product Management",
      description: "Exploring how AI and machine learning are transforming product management practices.",
      href: "https://example.com/future-pm",
    },
    {
      id: "2",
      title: "Building High-Performance Teams",
      description: "Strategies for creating and maintaining effective product development teams.",
      href: "https://example.com/teams",
    },
    {
      id: "3",
      title: "User Research Best Practices",
      description: "Comprehensive guide to conducting effective user research for product decisions.",
      href: "https://example.com/user-research",
    },
    {
      id: "4",
      title: "Data-Driven Product Decisions",
      description: "How to leverage analytics and metrics to make informed product decisions.",
      href: "https://example.com/data-driven",
    },
    {
      id: "5",
      title: "Agile Product Development",
      description: "Modern approaches to agile methodologies in product development.",
      href: "https://example.com/agile",
    },
    {
      id: "6",
      title: "Product Strategy Fundamentals",
      description: "Core principles and frameworks for developing effective product strategies.",
      href: "https://example.com/strategy",
    },
    {
      id: "7",
      title: "Customer Feedback Integration",
      description: "Best practices for collecting and integrating customer feedback into product development.",
      href: "https://example.com/feedback",
    },
    {
      id: "8",
      title: "Product Launch Strategies",
      description: "Comprehensive guide to successful product launches and go-to-market strategies.",
      href: "https://example.com/launch",
    },
    {
      id: "9",
      title: "Competitive Analysis",
      description: "How to conduct thorough competitive analysis to inform product positioning.",
      href: "https://example.com/competitive",
    },
    {
      id: "10",
      title: "Product Metrics That Matter",
      description: "Key performance indicators and metrics for measuring product success.",
      href: "https://example.com/metrics",
    },
    {
      id: "11",
      title: "Cross-Functional Collaboration",
      description: "Building effective partnerships between product, engineering, and design teams.",
      href: "https://example.com/collaboration",
    },
    {
      id: "12",
      title: "Product Innovation Frameworks",
      description: "Systematic approaches to fostering innovation in product development.",
      href: "https://example.com/innovation",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <NewsCarousel />
        <NewsGrid />
        <PaginatedCards items={sampleNewsItems} itemsPerPage={6} />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;