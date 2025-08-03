import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import productIndustryLogo from "@/assets/product-industry-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const handleDropdownHover = (dropdown: string | null) => {
    setActiveDropdown(dropdown);
  };

  const navigation = {
    About: [
      { name: "Our Story", href: "/about/story" },
      { name: "Team", href: "/about/team" },
      { name: "Mission", href: "/about/mission" },
      { name: "Careers", href: "/about/careers" }
    ],
    Newsletter: [
      { name: "Subscribe", href: "/newsletter/subscribe" },
      { name: "Archive", href: "/newsletter/archive" },
      { name: "Latest Edition", href: "/newsletter/latest" }
    ],
    Resources: [
      { name: "Industry Reports", href: "/resources/reports" },
      { name: "PM Tools", href: "/resources/tools" },
      { name: "Templates", href: "/resources/templates" },
      { name: "Learning Center", href: "/resources/learning" },
      { name: "Case Studies", href: "/resources/case-studies" }
    ]
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" 
          : "bg-background"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-3">
          <img src={productIndustryLogo} alt="Product Industry" className="h-10 w-10" />
          <div className="hidden sm:block">
            <h1 className="font-bold text-xl text-foreground">Product Industry</h1>
            <p className="text-xs text-muted-foreground">Egypt Tech News</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-8">
            {Object.entries(navigation).map(([key, items]) => (
              <div 
                key={key}
                className="relative"
                onMouseEnter={() => handleDropdownHover(key)}
                onMouseLeave={() => handleDropdownHover(null)}
              >
                <button className="flex items-center space-x-1 text-foreground hover:text-primary py-2 transition-colors duration-200 font-medium">
                  <span>{key}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div className={cn(
                  "absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-lg z-50 transition-all duration-200",
                  activeDropdown === key 
                    ? "opacity-100 translate-y-0 visible" 
                    : "opacity-0 translate-y-2 invisible"
                )}>
                  <div className="py-2">
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-3 text-foreground hover:bg-accent hover:text-primary transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary py-2 transition-colors duration-200 font-medium"
            >
              Contact Us
            </Link>
          </nav>
          
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-background flex flex-col pt-20 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-4 mt-8">
          {Object.entries(navigation).map(([key, items]) => (
            <div key={key} className="border-b border-border pb-4">
              <h3 className="font-semibold text-lg mb-2 text-primary">{key}</h3>
              <div className="space-y-2 ml-4">
                {items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      document.body.style.overflow = '';
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          <Link 
            to="/contact" 
            className="font-semibold text-lg text-primary py-4"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;