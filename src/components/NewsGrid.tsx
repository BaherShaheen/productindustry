import React, { useState } from "react";
import { Calendar, User, Building2, ExternalLink } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Orange Egypt Unveils AI-Powered Customer Service Platform",
    excerpt: "Telecommunications leader integrates artificial intelligence to enhance customer experience and reduce response times by 60%.",
    author: "Sarah Ahmed",
    date: "2024-08-03",
    source: "Orange Egypt",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    category: "AI & Tech"
  },
  {
    id: 2,
    title: "Cairo Angels Launches $50M Fund for Egyptian Tech Startups",
    excerpt: "Leading angel investment network announces major fund to accelerate growth of Egyptian technology companies and entrepreneurs.",
    author: "Mohamed Rashid",
    date: "2024-08-02",
    source: "Cairo Angels",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    category: "Investment"
  },
  {
    id: 3,
    title: "Banque Misr Partners with IBM for Digital Banking Revolution",
    excerpt: "Historic Egyptian bank collaborates with tech giant to implement blockchain and cloud technologies for next-generation banking services.",
    author: "Layla Hassan",
    date: "2024-08-01",
    source: "Banque Misr",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    category: "Banking Tech"
  },
  {
    id: 4,
    title: "Jumia Egypt Reports 40% Growth in Mobile Commerce",
    excerpt: "Leading e-commerce platform shows significant mobile adoption as Egyptian consumers embrace smartphone shopping experiences.",
    author: "Ahmed Nasser",
    date: "2024-07-31",
    source: "Jumia Egypt",
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
    category: "E-commerce"
  },
  {
    id: 5,
    title: "Egyptian Space Agency Launches Satellite Technology Program",
    excerpt: "Ambitious initiative to develop local satellite capabilities and support Egypt's growing space technology sector.",
    author: "Fatima Omar",
    date: "2024-07-30",
    source: "Egyptian Space Agency",
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
    category: "Space Tech"
  },
  {
    id: 6,
    title: "Raya IT Expands Cloud Infrastructure Across MENA Region",
    excerpt: "Egyptian technology solutions provider invests heavily in regional cloud infrastructure to serve growing demand.",
    author: "Omar Khaled",
    date: "2024-07-29",
    source: "Raya IT",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    category: "Cloud Tech"
  },
  {
    id: 7,
    title: "Instabug Reaches 10 Million Active Users Globally",
    excerpt: "Egyptian-founded mobile app debugging platform achieves major milestone with global expansion and enterprise adoption.",
    author: "Nour Abdel Rahman",
    date: "2024-07-28",
    source: "Instabug",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    category: "Software"
  },
  {
    id: 8,
    title: "Egyptian Universities Launch Joint Cybersecurity Initiative",
    excerpt: "Academic consortium establishes comprehensive cybersecurity program to address growing digital security challenges.",
    author: "Mahmoud Ali",
    date: "2024-07-27",
    source: "Educational Consortium",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    category: "Cybersecurity"
  },
  {
    id: 9,
    title: "MaxAB Secures $40M Series B for B2B E-commerce Expansion",
    excerpt: "Egyptian B2B marketplace platform raises significant funding to expand operations across Africa and the Middle East.",
    author: "Yasmin Farouk",
    date: "2024-07-26",
    source: "MaxAB",
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
    category: "B2B Tech"
  },
  {
    id: 10,
    title: "Telecom Egypt Deploys Fiber Network in Rural Areas",
    excerpt: "National telecommunications provider accelerates digital inclusion with high-speed internet infrastructure in underserved communities.",
    author: "Amira Soliman",
    date: "2024-07-25",
    source: "Telecom Egypt",
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
    category: "Infrastructure"
  },
  {
    id: 11,
    title: "Egyptian Fintech Sector Attracts $200M in Q3 Investments",
    excerpt: "Record-breaking quarter for Egyptian financial technology companies as international investors show strong interest in the market.",
    author: "Hassan El-Shamy",
    date: "2024-07-24",
    source: "Fintech Report",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    category: "Fintech"
  },
  {
    id: 12,
    title: "Smart Village Cairo Announces New Tech Incubator Program",
    excerpt: "Egypt's premier technology hub launches comprehensive startup incubation program to nurture next generation of tech entrepreneurs.",
    author: "Dina Mostafa",
    date: "2024-07-23",
    source: "Smart Village",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    category: "Startups"
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