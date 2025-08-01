import React, { useState } from "react";
import { Calendar, User, Building2, ExternalLink } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Swvl Restructures Operations Following Market Challenges",
    excerpt: "Egyptian transport startup pivots strategy to focus on sustainable growth in emerging markets.",
    author: "Sarah Ahmed",
    date: "2024-08-01",
    source: "Startup Scene",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    category: "Startups"
  },
  {
    id: 2,
    title: "Vodafone Egypt Launches 5G Network in New Administrative Capital",
    excerpt: "Major telecommunications advancement brings high-speed connectivity to Egypt's new government hub.",
    author: "Mohamed Rashid",
    date: "2024-07-31",
    source: "Vodafone",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    category: "Telecom"
  },
  {
    id: 3,
    title: "Fawry Expands Digital Payment Solutions for SMEs",
    excerpt: "Leading fintech company introduces new features targeting small and medium enterprises across Egypt.",
    author: "Layla Hassan",
    date: "2024-07-30",
    source: "Fawry",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    category: "Fintech"
  },
  {
    id: 4,
    title: "Egyptian E-commerce Market Reaches $7.5B in 2024",
    excerpt: "Comprehensive market analysis reveals unprecedented growth in online retail sector.",
    author: "Ahmed Nasser",
    date: "2024-07-29",
    source: "Market Research",
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
    category: "E-commerce"
  },
  {
    id: 5,
    title: "Uber Egypt Introduces Green Transportation Options",
    excerpt: "Ride-sharing platform commits to environmental sustainability with new eco-friendly vehicle fleet.",
    author: "Fatima Omar",
    date: "2024-07-28",
    source: "Uber",
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
    category: "Transportation"
  },
  {
    id: 6,
    title: "Microsoft Egypt Opens New Innovation Hub in Smart Village",
    excerpt: "Tech giant establishes development center to support local talent and drive digital transformation.",
    author: "Omar Khaled",
    date: "2024-07-27",
    source: "Microsoft",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    category: "Tech Giants"
  },
  {
    id: 7,
    title: "Paymob Secures Strategic Partnership with Major Banks",
    excerpt: "Payment gateway provider strengthens position in Egyptian financial ecosystem through key alliances.",
    author: "Nour Abdel Rahman",
    date: "2024-07-26",
    source: "Paymob",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    category: "Fintech"
  },
  {
    id: 8,
    title: "Egyptian Gov Tech Initiative Digitizes Public Services",
    excerpt: "Government accelerates digital transformation with new citizen-facing applications and services.",
    author: "Mahmoud Ali",
    date: "2024-07-25",
    source: "Gov Tech",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    category: "Gov Tech"
  },
  {
    id: 9,
    title: "Local Delivery Startup Bosta Raises Series B Funding",
    excerpt: "Egyptian logistics company secures major investment to expand operations across MENA region.",
    author: "Yasmin Farouk",
    date: "2024-07-24",
    source: "Bosta",
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
    category: "Logistics"
  }
];

const NewsGrid = () => {
  const [visibleNews, setVisibleNews] = useState(9);

  const loadMore = () => {
    setVisibleNews(prev => prev + 9);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Latest Tech News</h2>
        <p className="text-muted-foreground text-lg">Comprehensive coverage of Egypt's technology landscape</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {newsData.slice(0, visibleNews).map((article) => (
          <div key={article.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="relative">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    <span>{article.source}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
              </div>
              
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm">
                Read More
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {visibleNews < newsData.length && (
        <div className="text-center">
          <button 
            onClick={loadMore}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-3 rounded-lg font-medium transition-colors border border-border"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsGrid;