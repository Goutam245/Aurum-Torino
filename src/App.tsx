import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import Fleet from "./pages/Fleet";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollReset = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <ScrollReset />
        <CookieBanner />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<MainLayout><Index /></MainLayout>} />
          <Route path="/fleet" element={<MainLayout><Fleet /></MainLayout>} />
          <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
          <Route path="/blog/:slug" element={<MainLayout><BlogPost /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/promo" element={<Landing />} />
          <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
