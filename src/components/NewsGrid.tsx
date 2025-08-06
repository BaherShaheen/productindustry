import React, { useState } from "react";
import { Calendar, User, Building2, ExternalLink } from "lucide-react";
import egyptianAiStartup from "../assets/egyptian-ai-startup.jpg";
import egyptTelecom5g from "../assets/egypt-telecom-5g.jpg";
import egyptEcommerceTech from "../assets/egypt-ecommerce-tech.jpg";
import egyptGreentech from "../assets/egypt-greentech.jpg";
import egyptFintechBlockchain from "../assets/egypt-fintech-blockchain.jpg";
import egyptAiResearch from "../assets/egypt-ai-research.jpg";

const newsData = [
  {
    id: 1,
    title: "Egyptian AI Startup Rypple Raises $8M Series A for Conversational Commerce",
    excerpt: "Cairo-based startup develops Arabic-first AI chatbots for e-commerce, helping Egyptian businesses automate customer service and boost sales by 65%.",
    author: "Nour El-Din Farouk",
    date: "2024-08-06",
    source: "Rypple AI",
    image: egyptianAiStartup,
    category: "AI & Commerce"
  },
  {
    id: 2,
    title: "Vodafone Egypt Launches 5G Network Across Greater Cairo",
    excerpt: "Telecommunications giant activates next-generation mobile network infrastructure, promising download speeds up to 1Gbps for Egyptian consumers and businesses.",
    author: "Salma Rashid",
    date: "2024-08-05",
    source: "Vodafone Egypt",
    image: egyptTelecom5g,
    category: "5G Technology"
  },
  {
    id: 3,
    title: "Jumia Egypt Introduces AI-Powered Logistics Optimization",
    excerpt: "E-commerce platform implements machine learning algorithms to reduce delivery times by 40% across Egyptian cities, revolutionizing last-mile delivery.",
    author: "Karim Hassan",
    date: "2024-08-04",
    source: "Jumia Egypt",
    image: egyptEcommerceTech,
    category: "E-commerce Tech"
  },
  {
    id: 4,
    title: "Egyptian GreenTech Startup KarmSolar Expands to 15 African Countries",
    excerpt: "Solar energy company leverages IoT and smart grid technology to bring renewable energy solutions across the African continent, targeting 50MW capacity.",
    author: "Yasmin Abdel-Rahman",
    date: "2024-08-03",
    source: "KarmSolar",
    image: egyptGreentech,
    category: "GreenTech"
  },
  {
    id: 5,
    title: "Egyptian Central Bank Approves First Cryptocurrency Exchange License",
    excerpt: "CoinMENA receives regulatory approval to operate digital asset trading platform in Egypt, marking milestone for blockchain adoption in the region.",
    author: "Mahmoud El-Sayed",
    date: "2024-08-02",
    source: "CoinMENA",
    image: egyptFintechBlockchain,
    category: "Blockchain & Fintech"
  },
  {
    id: 6,
    title: "American University in Cairo Establishes $20M AI Research Institute",
    excerpt: "Academic institution partners with Google and Microsoft to create cutting-edge artificial intelligence lab focusing on Arabic language processing and computer vision.",
    author: "Dr. Amira Soliman",
    date: "2024-08-01",
    source: "AUC",
    image: egyptAiResearch,
    category: "AI Research"
  },
  {
    id: 7,
    title: "Egyptian Startup Swvl Announces $50M Investment in Smart Transportation",
    excerpt: "Mass transit technology company secures funding to expand AI-powered bus routing and dynamic pricing systems across Middle East and Africa.",
    author: "Omar Nabil",
    date: "2024-07-31",
    source: "Swvl",
    image: egyptianAiStartup,
    category: "Transportation Tech"
  },
  {
    id: 8,
    title: "Orange Egypt Partners with Ericsson for Private 5G Networks",
    excerpt: "Telecommunications operator launches dedicated 5G infrastructure for Egyptian manufacturers and enterprises, enabling Industry 4.0 applications.",
    author: "Rana Mostafa",
    date: "2024-07-30",
    source: "Orange Egypt",
    image: egyptTelecom5g,
    category: "Enterprise 5G"
  },
  {
    id: 9,
    title: "Egyptian E-commerce Platform Noon Integrates Augmented Reality Shopping",
    excerpt: "Online marketplace introduces AR technology allowing customers to virtually try products before purchase, reducing return rates by 45%.",
    author: "Dina Mahmoud",
    date: "2024-07-29",
    source: "Noon Egypt",
    image: egyptEcommerceTech,
    category: "AR & E-commerce"
  },
  {
    id: 10,
    title: "Egypt's New Administrative Capital Becomes Smart City Testbed",
    excerpt: "Government initiative implements IoT sensors, smart lighting, and AI-powered traffic management across the new capital, serving as model for African smart cities.",
    author: "Ahmed Zaki",
    date: "2024-07-28",
    source: "NAC Authority",
    image: egyptGreentech,
    category: "Smart Cities"
  },
  {
    id: 11,
    title: "Egyptian Fintech Shahry Launches Digital Salary Platform",
    excerpt: "Financial technology startup provides earned wage access and financial wellness tools for Egyptian employees, partnering with 200+ companies.",
    author: "Noha Farid",
    date: "2024-07-27",
    source: "Shahry",
    image: egyptFintechBlockchain,
    category: "Fintech Solutions"
  },
  {
    id: 12,
    title: "Cairo University's AI Lab Develops Arabic Medical Diagnosis System",
    excerpt: "Research team creates machine learning model for medical diagnosis using Arabic patient data, achieving 94% accuracy rate for common conditions.",
    author: "Prof. Hany Farouk",
    date: "2024-07-26",
    source: "Cairo University",
    image: egyptAiResearch,
    category: "Medical AI"
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