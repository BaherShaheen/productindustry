import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// About pages
import OurStoryPage from "./pages/about/OurStoryPage";
import TeamPage from "./pages/about/TeamPage";
import MissionPage from "./pages/about/MissionPage";
import CareersPage from "./pages/about/CareersPage";

// Newsletter pages
import NewsletterSubscribePage from "./pages/newsletter/NewsletterSubscribePage";

// Resources pages
import ResourcesReportsPage from "./pages/resources/ResourcesReportsPage";

// Contact page
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About routes */}
          <Route path="/about/story" element={<OurStoryPage />} />
          <Route path="/about/team" element={<TeamPage />} />
          <Route path="/about/mission" element={<MissionPage />} />
          <Route path="/about/careers" element={<CareersPage />} />
          
          {/* Newsletter routes */}
          <Route path="/newsletter/subscribe" element={<NewsletterSubscribePage />} />
          
          {/* Resources routes */}
          <Route path="/resources/reports" element={<ResourcesReportsPage />} />
          
          {/* Contact route */}
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
