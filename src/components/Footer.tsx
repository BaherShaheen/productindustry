
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-card border-t border-border mt-16">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/logo.svg" alt="Atlas Robot" className="h-8 mb-4" />
            <p className="text-muted-foreground">
              Atlas Robot - Where technology meets humanity in perfect harmony.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 egyptian-accent">Latest Updates</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Product News</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Innovation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 egyptian-accent">Connect</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6">
          <p className="text-center text-muted-foreground text-sm">
            © 2024 Atlas Robot News Feed. Inspired by Egyptian innovation and built with modern technology.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
