import React from "react";
import { Calendar, User, Eye, MessageCircle } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Atlas Robot Successfully Completes First Public Demonstration",
    excerpt: "Our humanoid companion Atlas has achieved a major milestone with its first public demonstration, showcasing advanced movement and interaction capabilities.",
    author: "Dr. Sarah Mahmoud",
    date: "2024-08-01",
    readTime: "5 min read",
    views: 1247,
    comments: 23,
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    category: "Product Updates"
  },
  {
    id: 2,
    title: "Revolutionary AI Learning Algorithm Improves Human-Robot Interaction",
    excerpt: "New breakthrough in adaptive learning technology allows Atlas to understand and respond to human emotions with unprecedented accuracy.",
    author: "Prof. Ahmed Hassan",
    date: "2024-07-28",
    readTime: "7 min read",
    views: 890,
    comments: 15,
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    category: "Research"
  },
  {
    id: 3,
    title: "Atlas Robot Joins Healthcare Initiative in Cairo Medical Center",
    excerpt: "Partnership with leading medical institutions brings robotic assistance to patient care, representing a significant step in healthcare automation.",
    author: "Dr. Fatima Al-Rashid",
    date: "2024-07-25",
    readTime: "6 min read",
    views: 2156,
    comments: 42,
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    category: "Healthcare"
  },
  {
    id: 4,
    title: "Enhanced Security Protocols Ensure Safe Human-Robot Collaboration",
    excerpt: "Latest updates to Atlas security systems provide comprehensive protection while maintaining seamless interaction capabilities.",
    author: "Engineer Omar Khaled",
    date: "2024-07-22",
    readTime: "4 min read",
    views: 654,
    comments: 18,
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
    category: "Security"
  },
  {
    id: 5,
    title: "Future of Robotics: Atlas Leads Innovation in Sustainable Technology",
    excerpt: "Environmental consciousness meets cutting-edge robotics as Atlas demonstrates energy-efficient operations and sustainable design principles.",
    author: "Dr. Layla Nasser",
    date: "2024-07-19",
    readTime: "8 min read",
    views: 1823,
    comments: 36,
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
    category: "Innovation"
  }
];

const NewsFeed = () => {
  return (
    <div className="news-feed-layout">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="pulse-chip mx-auto mb-4">
          <span>Latest Updates</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Atlas Robot <span className="egyptian-accent">News Feed</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest developments, research breakthroughs, and real-world applications of Atlas humanoid technology.
        </p>
      </div>

      {/* Featured Article */}
      <div className="mb-12">
        <div className="news-card bg-gradient-to-r from-card to-card/80 border-primary/30">
          <div className="flex items-center gap-2 mb-4">
            <span className="pulse-chip bg-primary text-primary-foreground">Featured</span>
            <span className="text-sm text-muted-foreground">{newsData[0].category}</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {newsData[0].title}
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                {newsData[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{newsData[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{newsData[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{newsData[0].views.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={newsData[0].image} 
                alt={newsData[0].title}
                className="w-full h-64 md:h-full object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {newsData[0].readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {newsData.slice(1).map((article) => (
          <div key={article.id} className="news-card group cursor-pointer">
            <div className="relative mb-4">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 pulse-chip bg-primary/90 text-primary-foreground">
                {article.category}
              </div>
              <div className="absolute top-3 right-3 bg-background/90 text-foreground px-2 py-1 rounded-full text-sm">
                {article.readTime}
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{article.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{article.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-colors">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default NewsFeed;