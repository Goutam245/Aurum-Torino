import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/fleet", label: "Fleet" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl border-b border-border" : "bg-transparent"}`} style={scrolled ? { background: "rgba(8,8,8,0.97)" } : undefined}>
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-1">
          <span className="font-display text-2xl font-semibold tracking-tight" style={{ color: "#FFFFFF", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
            Auto<span className="text-primary">Elite</span>
          </span>
          <span className="text-primary text-xs -mt-3 ml-0.5">✦</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-heading font-medium tracking-wide transition-colors duration-300 link-underline ${location.pathname === l.to ? "text-primary" : ""}`}
              style={location.pathname === l.to ? undefined : { color: "#FFFFFF", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:+390111234567" className="flex items-center gap-2 text-xs text-primary font-heading font-medium">
            <Phone size={13} /> +39 011 123 4567
          </a>
          <Link to="/contact" className="btn-gold-solid text-xs px-6 py-2.5">Book Now</Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground z-50">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={l.to}
                  className={`font-display text-4xl font-light transition-colors ${location.pathname === l.to ? "text-primary" : "text-foreground"}`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <Link to="/contact" className="btn-gold-solid mt-4">Book Now</Link>
            <a href="tel:+390111234567" className="flex items-center gap-2 text-sm text-primary font-heading">
              <Phone size={14} /> +39 011 123 4567
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
