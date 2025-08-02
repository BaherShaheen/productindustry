import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GridPatternWrapper } from "@/components/ui/grid-pattern-wrapper";
import { Mail, Send } from "lucide-react";

const NewsletterSubscribePage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert("Thank you for subscribing!");
  };

  return (
    <GridPatternWrapper className="min-h-screen bg-background" variant="default">
      <Header />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h1>
            <p className="text-xl text-muted-foreground">Get the latest product management insights delivered to your inbox</p>
          </div>
          
          <div className="bg-card rounded-xl p-8 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Mail className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Weekly Product Insights</h2>
              <p className="text-muted-foreground">
                Join 10,000+ product managers who trust us for the latest news, 
                trends, and insights from Egypt's tech ecosystem.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                  placeholder="Your company name"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                Subscribe Now
                <Send className="w-4 h-4" />
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </GridPatternWrapper>
  );
};

export default NewsletterSubscribePage;