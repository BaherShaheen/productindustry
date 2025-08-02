import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

function calculateGap(width: number) {
  const minWidth = 800;
  const maxWidth = 1200;
  const minGap = 120;
  const maxGap = 180;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return maxGap;
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

const NewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1000);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const newsLength = useMemo(() => featuredNews.length, []);
  const activeNews = useMemo(() => featuredNews[currentSlide], [currentSlide]);

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    autoplayIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    }, 5000);
    
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, []);

  // 3D Transform styling for images
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = 40;
    const isActive = index === currentSlide;
    const isLeft = (currentSlide - 1 + newsLength) % newsLength === index;
    const isRight = (currentSlide + 1) % newsLength === index;
    
    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 0.7,
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 0.7,
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      transform: `scale(0.8)`,
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Today's Top Stories</h2>
        <p className="text-muted-foreground text-lg">Stay updated with the most important tech news from Egypt</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* 3D Image Carousel */}
        <div className="relative h-96" style={{ perspective: "1000px" }} ref={imageContainerRef}>
          {featuredNews.map((news, index) => (
            <div
              key={news.id}
              className="absolute inset-0 cursor-pointer"
              style={getImageStyle(index)}
              onClick={() => setCurrentSlide(index)}
            >
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {news.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold leading-tight text-foreground">
                {activeNews.title}
              </h3>
              
              <motion.p className="text-muted-foreground text-lg leading-relaxed">
                {activeNews.excerpt.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.015 * i,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{activeNews.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{activeNews.date}</span>
                </div>
              </div>
              
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 w-fit">
                Read Full Story
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-card border hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-card border hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex space-x-2 mt-6">
            {featuredNews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary scale-125' : 'bg-muted hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;