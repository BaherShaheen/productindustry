import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GridPatternWrapper } from "@/components/ui/grid-pattern-wrapper";
import { Briefcase, Users, Clock, MapPin } from "lucide-react";

const CareersPage = () => {
  const openings = [
    {
      title: "Senior Content Writer",
      department: "Editorial",
      location: "Cairo, Egypt",
      type: "Full-time",
      description: "We're looking for an experienced content writer to join our editorial team and help create compelling stories about Egypt's tech ecosystem."
    },
    {
      title: "Community Manager",
      department: "Community",
      location: "Remote",
      type: "Part-time",
      description: "Help us build and nurture our community of product managers across Egypt through social media, events, and online engagement."
    }
  ];

  return (
    <GridPatternWrapper className="min-h-screen bg-background" variant="gradient">
      <Header />
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-muted-foreground">Help us shape the future of product management in Egypt</p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Great Team</h3>
                <p className="text-muted-foreground text-sm">Work with passionate professionals who care about making a difference</p>
              </div>
              <div className="bg-card p-6 rounded-xl text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Flexible Hours</h3>
                <p className="text-muted-foreground text-sm">We believe in work-life balance and flexible working arrangements</p>
              </div>
              <div className="bg-card p-6 rounded-xl text-center">
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground text-sm">Continuous learning and career development in a growing company</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
            <div className="space-y-6">
              {openings.map((job, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-lg font-medium transition-colors mt-4 md:mt-0">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 bg-card p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Don't See the Right Position?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals to join our team. 
              Send us your resume and tell us how you'd like to contribute to PM Egypt News.
            </p>
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg font-medium transition-colors">
              Send Your Resume
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </GridPatternWrapper>
  );
};

export default CareersPage;