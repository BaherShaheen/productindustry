import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, User } from "lucide-react";

const featuredNews = [
  {
    id: 1,
    title: "Talabat Egypt Expands AI-Powered Delivery System Across Cairo",
    excerpt: "The food delivery giant announces major technological advancement in last-mile delivery optimization, reducing delivery times by 35% across the capital.",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    author: "Ahmed Hassan",
    date: "2024-08-01",
    source: "Talabat"
  },
  {
    id: 2,
    title: "Amazon Egypt Launches New Seller Program for Local Entrepreneurs",
    excerpt: "Supporting Egyptian small businesses with comprehensive onboarding, training, and marketing support to compete in the global marketplace.",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    author: "Fatima Al-Rashid",
    date: "2024-07-31",
    source: "Amazon Egypt"
  },
  {
    id: 3,
    title: "Egyptian Fintech Startup Secures $15M Series A Funding",
    excerpt: "Revolutionary payment platform aims to transform digital banking experience for millions of Egyptians with innovative mobile-first approach.",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    author: "Omar Khaled",
    date: "2024-07-30",
    source: "TechCrunch ME"
  }
];

const NewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Today's Top Stories</h2>
        <p className="text-muted-foreground">Stay updated with the most important tech news from Egypt</p>
      </div>
      
      <div className="relative bg-card rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-96 md:h-80">
          {featuredNews.map((news, index) => (
            <div
              key={news.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="grid md:grid-cols-2 h-full">
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {news.source}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {news.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 text-lg">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{news.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{news.date}</span>
                    </div>
                  </div>
                  
                  <button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors w-fit">
                    Read Full Story
                  </button>
                </div>
                
                <div className="relative h-full">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {featuredNews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-background/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;