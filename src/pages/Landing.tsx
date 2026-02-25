import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Landing = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 6, hours: 23, mins: 59, secs: 59 });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const end = Date.now() + 7 * 24 * 60 * 60 * 1000;
    const timer = setInterval(() => {
      const diff = end - Date.now();
      if (diff <= 0) { clearInterval(timer); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { toast.error("Please enter your email."); return; }
    setSubmitted(true);
    toast.success("Offer claimed! Check your email.");
  };

  const timerBlock = (val: number, label: string) => (
    <div className="text-center">
      <div className="card-elite rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-heading font-bold text-primary">
        {String(val).padStart(2, "0")}
      </div>
      <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-wider">{label}</p>
    </div>
  );

  return (
    <main className="min-h-screen bg-background flex items-center justify-center py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg w-full text-center"
      >
        <p className="text-sm text-destructive font-heading font-semibold mb-4">⚡ OFFERTA LIMITATA</p>
        <h1 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
          <span className="gold-text">20% Off</span> This Week Only
        </h1>
        <p className="text-muted-foreground text-sm mb-8">Book any vehicle from our premium fleet and save 20%. Limited availability — don't miss out.</p>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {timerBlock(timeLeft.days, "Days")}
          <span className="text-primary font-bold text-xl mb-5">:</span>
          {timerBlock(timeLeft.hours, "Hours")}
          <span className="text-primary font-bold text-xl mb-5">:</span>
          {timerBlock(timeLeft.mins, "Mins")}
          <span className="text-primary font-bold text-xl mb-5">:</span>
          {timerBlock(timeLeft.secs, "Secs")}
        </div>

        {/* Benefits */}
        <div className="space-y-3 mb-10 text-left max-w-xs mx-auto">
          {["Full insurance included", "Free airport delivery", "24/7 roadside assistance", "No hidden fees"].map(b => (
            <div key={b} className="flex items-center gap-3 text-sm text-muted-foreground">
              <Check size={14} className="text-primary flex-shrink-0" /> {b}
            </div>
          ))}
        </div>

        {/* Form */}
        {submitted ? (
          <div className="card-elite rounded-xl p-8">
            <p className="text-foreground font-heading font-semibold">Offer Claimed! ✓</p>
            <p className="text-sm text-muted-foreground mt-2">Check your email for the promo code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 bg-card border border-border rounded-full px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            />
            <button type="submit" className="btn-red-cta whitespace-nowrap">Claim 20% Off</button>
          </form>
        )}

        {/* Trust */}
        <div className="flex items-center justify-center gap-6 mt-10 text-xs text-muted-foreground">
          <span>4.9★ Google</span>
          <span>·</span>
          <span>1,200+ Clients</span>
          <span>·</span>
          <span>15+ Years</span>
        </div>

        <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors mt-8 inline-block">
          ← Back to AutoElite.it
        </Link>
      </motion.div>
    </main>
  );
};

export default Landing;
