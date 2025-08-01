import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Lightbulb, Globe, Award } from "lucide-react";

const MissionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Mission & Vision</h1>
            <p className="text-xl text-muted-foreground">Driving the future of product management in Egypt and beyond</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                To empower product managers across Egypt with the insights, tools, and community connections 
                they need to build world-class products that solve real problems and drive meaningful impact.
              </p>
              <p className="text-muted-foreground">
                We believe that great product management is the cornerstone of successful technology companies, 
                and by supporting product managers, we're contributing to the growth of Egypt's entire tech ecosystem.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-primary" />
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                To become the definitive platform for product management excellence in the MENA region, 
                fostering a community where innovation thrives and local solutions address global challenges.
              </p>
              <p className="text-muted-foreground">
                We envision a future where Egyptian product managers are recognized globally for their expertise, 
                creativity, and ability to build products that serve millions of users worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  Global Perspective
                </h3>
                <p className="text-muted-foreground">
                  We bring global product management best practices to the Egyptian market while 
                  respecting local context and cultural nuances.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  Excellence Driven
                </h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in our content, community, and platform, 
                  ensuring every piece adds genuine value to our readers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MissionPage;