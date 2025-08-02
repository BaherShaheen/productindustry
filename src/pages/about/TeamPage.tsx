import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GridPatternWrapper } from "@/components/ui/grid-pattern-wrapper";
import { User, Linkedin, Twitter } from "lucide-react";

const TeamPage = () => {
  const team = [
    {
      name: "Ahmed Hassan",
      role: "Founder & Editor-in-Chief",
      bio: "Former Senior PM at Careem with 8+ years in product management across MENA startups.",
      image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sarah Mahmoud",
      role: "Senior Tech Reporter",
      bio: "Covering Egyptian tech ecosystem for 5+ years. Previously at TechCrunch Middle East.",
      image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Omar Khaled",
      role: "Community Manager",
      bio: "Building bridges between product managers across Egypt's leading tech companies.",
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <GridPatternWrapper className="min-h-screen bg-background" variant="default">
      <Header />
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground">The passionate people behind PM Egypt News</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-muted-foreground hover:text-primary">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.twitter} className="text-muted-foreground hover:text-primary">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </GridPatternWrapper>
  );
};

export default TeamPage;