import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GridPatternWrapper } from "@/components/ui/grid-pattern-wrapper";
import { FileText, Download, Calendar } from "lucide-react";

const ResourcesReportsPage = () => {
  const reports = [
    {
      title: "State of Product Management in Egypt 2024",
      description: "Comprehensive analysis of product management trends, salaries, and career paths in Egyptian tech companies.",
      date: "July 2024",
      pages: 45,
      downloadLink: "#"
    },
    {
      title: "Egyptian Startup Ecosystem Report",
      description: "Deep dive into funding trends, successful exits, and emerging sectors in Egypt's startup landscape.",
      date: "June 2024",
      pages: 32,
      downloadLink: "#"
    },
    {
      title: "Fintech Product Innovation in MENA",
      description: "Analysis of fintech product strategies and user adoption patterns across the Middle East and North Africa.",
      date: "May 2024",
      pages: 28,
      downloadLink: "#"
    }
  ];

  return (
    <GridPatternWrapper className="min-h-screen bg-background" variant="dashed">
      <Header />
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Industry Reports</h1>
            <p className="text-xl text-muted-foreground">In-depth research and analysis for product management professionals</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{report.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{report.description}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{report.date}</span>
                  </div>
                  <span>{report.pages} pages</span>
                </div>
                
                <a 
                  href={report.downloadLink}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download Report
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </GridPatternWrapper>
  );
};

export default ResourcesReportsPage;