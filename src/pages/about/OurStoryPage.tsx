import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Heart } from "lucide-react";

const OurStoryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Story</h1>
            <p className="text-xl text-muted-foreground">How PM Egypt News became the leading source for product management insights</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-card p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Our Beginning
              </h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2022, PM Egypt News emerged from a simple observation: Egypt's tech ecosystem was rapidly evolving, 
                but product managers lacked a centralized source for local industry insights, best practices, and community updates.
              </p>
              <p className="text-muted-foreground">
                What started as a weekly newsletter for 50 subscribers has grown into Egypt's premier platform for product 
                management professionals, serving over 10,000 readers across the MENA region.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-4">
                We believe that great products shape the future. Our mission is to empower Egyptian product managers 
                with the knowledge, tools, and network they need to build products that matter.
              </p>
              <p className="text-muted-foreground">
                Through curated news, expert analysis, and community insights, we bridge the gap between global 
                product management trends and local market realities.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                Our Impact
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-muted-foreground">Active Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Articles Published</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Companies Featured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurStoryPage;