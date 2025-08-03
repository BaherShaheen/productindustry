
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";
import productIndustryLogo from "@/assets/product-industry-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src={productIndustryLogo} alt="Product Industry" className="h-10 w-10" />
              <div>
                <h3 className="font-bold text-lg">Product Industry</h3>
                <p className="text-xs text-muted-foreground">Egypt Tech News</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Egypt's leading source for technology insights, news, and innovation.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about/story" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/about/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/about/mission" className="text-muted-foreground hover:text-primary transition-colors">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link to="/about/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Join Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@productindustry.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+20 10 1234 5678</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Smart Village, Building B163<br />Giza, Egypt</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest tech insights delivered to your inbox.
            </p>
            <Link 
              to="/newsletter/subscribe"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
        
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 Product Industry. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
