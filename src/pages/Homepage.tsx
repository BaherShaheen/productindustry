import React from "react";
import Header from "@/components/Header";
import NewsCarousel from "@/components/NewsCarousel";
import NewsGrid from "@/components/NewsGrid";
import Footer from "@/components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <NewsCarousel />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;