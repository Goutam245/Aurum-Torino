import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed! Welcome to AutoElite.");
    setEmail("");
  };

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-semibold text-foreground">Auto<span className="text-primary">Elite</span></span>
            <span className="text-primary text-xs ml-0.5">✦</span>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              Premium car rental in Torino since 2009. Serving clients across Northern Italy with the finest fleet of luxury and sports vehicles.
            </p>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Facebook", "LinkedIn", "WhatsApp"].map(s => (
                <a key={s} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors link-underline">{s}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                ["Home", "/"], ["Fleet", "/fleet"], ["Self Drive", "/services"], ["Chauffeur", "/services"],
                ["Corporate", "/services"], ["Wedding Cars", "/services"], ["About", "/about"],
                ["Blog", "/blog"], ["Contact", "/contact"], ["Book Now", "/contact"],
              ].map(([l, h]) => (
                <Link key={l} to={h} className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline w-fit">{l}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary mb-6">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span>Via Roma 45, 10121 Torino TO, Italy</span>
              <a href="tel:+390111234567" className="hover:text-foreground transition-colors">+39 011 123 4567</a>
              <a href="mailto:info@autoelite.it" className="hover:text-foreground transition-colors">info@autoelite.it</a>
              <span className="mt-2 text-xs">Open: Mon–Sun 07:00–22:00</span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Get exclusive offers and automotive insights delivered to your inbox.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button type="submit" className="btn-gold-solid text-xs py-2.5">Subscribe</button>
            </form>
            <p className="text-xs text-muted-foreground mt-3">We never share your data.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Aurum Torino · P.IVA 12345678901</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
