import React, { useState } from "react";
import { Calendar, User, Building2, ExternalLink } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Talabat Egypt Introduces AI-Powered Restaurant Recommendations",
    excerpt: "Food delivery platform leverages machine learning to provide personalized restaurant suggestions, boosting customer satisfaction by 45% across Egyptian cities.",
    author: "Nora Farid",
    date: "2024-08-03",
    source: "Talabat Egypt",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    category: "AI & Food Tech"
  },
  {
    id: 2,
    title: "CIB Bank Partners with Mastercard for Contactless Payment Revolution",
    excerpt: "Commercial International Bank Egypt introduces next-generation contactless payment solutions, targeting 2 million new digital banking customers by 2025.",
    author: "Karim Hosny",
    date: "2024-08-02",
    source: "CIB Bank",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    category: "Digital Banking"
  },
  {
    id: 3,
    title: "Careem Egypt Expands Super App Services to Include Healthcare",
    excerpt: "Ride-hailing platform adds telemedicine consultations and pharmacy delivery services, transforming into comprehensive lifestyle platform for Egyptian users.",
    author: "Yasmin Taha",
    date: "2024-08-01",
    source: "Careem Egypt",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    category: "Healthcare Tech"
  },
  {
    id: 4,
    title: "Alexandria Technology Park Attracts $100M in New Investments",
    excerpt: "Egypt's coastal tech hub secures major funding from international investors, with plans to house 50 new technology companies focused on maritime and logistics tech.",
    author: "Mohamed Salah",
    date: "2024-07-31",
    source: "Alexandria Tech Park",
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
    category: "Investment"
  },
  {
    id: 5,
    title: "Souq.com Alumni Launch Egyptian E-learning Platform Nafham 2.0",
    excerpt: "Former Souq.com executives revive popular Egyptian educational platform with advanced AI tutoring and personalized learning paths for Arabic content.",
    author: "Dina Mohsen",
    date: "2024-07-30",
    source: "Nafham",
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
    category: "EdTech"
  },
  {
    id: 6,
    title: "Etisalat Egypt Becomes First Telecom to Offer Satellite Internet",
    excerpt: "Telecommunications leader partners with global satellite providers to bring high-speed internet to remote Egyptian communities and rural areas.",
    author: "Tarek Nabil",
    date: "2024-07-29",
    source: "Etisalat Egypt",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    category: "Telecom"
  },
  {
    id: 7,
    title: "Egyptian Startup Rology Raises $5M for Medical Imaging AI",
    excerpt: "Cairo-based medical technology company secures Series A funding to expand AI-powered radiology solutions across Middle East and Africa healthcare systems.",
    author: "Amina Hassan",
    date: "2024-07-28",
    source: "Rology",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    category: "HealthTech"
  },
  {
    id: 8,
    title: "ITIDA Launches National Cybersecurity Training Program",
    excerpt: "Information Technology Industry Development Agency initiates comprehensive cybersecurity certification program to train 10,000 Egyptian professionals by 2025.",
    author: "Omar Zaki",
    date: "2024-07-27",
    source: "ITIDA",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    category: "Cybersecurity"
  },
  {
    id: 9,
    title: "Elmenus Integrates with Google Pay for Seamless Food Ordering",
    excerpt: "Egyptian food discovery platform enhances user experience with Google Pay integration, reducing checkout time by 70% and increasing order completion rates.",
    author: "Layla Mahmoud",
    date: "2024-07-26",
    source: "Elmenus",
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
    category: "Food Tech"
  },
  {
    id: 10,
    title: "Cairo University Launches Africa's Largest AI Research Center",
    excerpt: "Academic institution establishes cutting-edge artificial intelligence research facility with partnerships from IBM, Microsoft, and local tech companies.",
    author: "Mahmoud Reda",
    date: "2024-07-25",
    source: "Cairo University",
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
    category: "Research & AI"
  },
  {
    id: 11,
    title: "Vezeeta Expands Telemedicine Services to Rural Egypt",
    excerpt: "Healthcare booking platform extends digital health services to underserved communities, partnering with Ministry of Health for nationwide coverage.",
    author: "Fatma El-Zahra",
    date: "2024-07-24",
    source: "Vezeeta",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    category: "Digital Health"
  },
  {
    id: 12,
    title: "Egyptian Fintech Valdyfy Secures Regulatory Approval for Digital Identity",
    excerpt: "Identity verification startup receives Central Bank of Egypt approval to provide KYC solutions for financial institutions across the MENA region.",
    author: "Heba Abdel-Nasser",
    date: "2024-07-23",
    source: "Valdyfy",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    category: "Identity Tech"
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