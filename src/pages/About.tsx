import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { Target, Gem, HandshakeIcon, Lightbulb } from "lucide-react";

const team = [
  { name: "Luca Rossi", title: "Founder & CEO", bio: "20 years in luxury automotive. Former brand manager at Maserati. Passionate about Italian motoring culture and customer experience.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
  { name: "Giulia Ferretti", title: "Operations Director", bio: "Expert in logistics and fleet management. Ensures every vehicle is delivered immaculately and on time, every single time.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
  { name: "Alessandro Conti", title: "Fleet Manager", bio: "Automotive engineer by training, car enthusiast by nature. Personally inspects every vehicle before it joins the AutoElite fleet.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
];

const About = () => (
  <main>
    {/* Hero with Torino image */}
    <section className="relative pt-32 pb-20">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90" alt="Torino cityscape" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="text-primary">/</span>
          <span className="text-foreground">About</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-light text-foreground hero-text-shadow">About AutoElite</h1>
        <div className="gold-line mt-6" />
      </div>
    </section>

    {/* Story */}
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-4">Our Story</p>
            <h2 className="font-display text-4xl md:text-[48px] font-light text-foreground mb-8">Since 2009</h2>
            <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
              <p>AutoElite was born from a simple belief: that luxury should be accessible, and every journey should be extraordinary. Founded in the heart of Torino — the birthplace of Fiat, the home of Italian automotive excellence — we began with three carefully selected vehicles and a passion for exceptional service.</p>
              <p>Over fifteen years, we've grown into Northern Italy's most trusted premium car rental, serving discerning clients from more than 40 countries. Our fleet now includes over 50 vehicles — from Italian supercars like Ferrari and Lamborghini to executive sedans, luxury SUVs, and elegant convertibles.</p>
              <p>What hasn't changed is our commitment to personal, white-glove service. Every rental is curated, every detail considered. Because at AutoElite, we don't just rent cars — we craft experiences that become lifelong memories.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800"
              alt="AutoElite founder"
              className="rounded-xl w-full h-[450px] object-cover"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>

    <div className="section-divider" />

    {/* Mission */}
    <section className="py-28 bg-secondary">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <ScrollReveal>
          <p className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-6">Our Mission</p>
          <blockquote className="font-display text-3xl md:text-[42px] font-light text-foreground italic leading-snug">
            "To redefine luxury mobility in Italy, making every journey — from a weekend escape to a year-long adventure — feel effortless, exhilarating, and unmistakably Italian."
          </blockquote>
          <div className="gold-line mx-auto mt-8" />
        </ScrollReveal>
      </div>
    </section>

    <div className="section-divider" />

    {/* Values */}
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-4">What Drives Us</p>
            <h2 className="font-display text-4xl md:text-[52px] font-light text-foreground">Our Values</h2>
            <div className="gold-line mx-auto mt-6" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Target, title: "Passion", desc: "Every team member shares an authentic passion for automotive excellence and Italian craftsmanship." },
            { icon: Gem, title: "Excellence", desc: "We pursue perfection in every interaction, from vehicle preparation to customer care." },
            { icon: HandshakeIcon, title: "Trust", desc: "Transparent pricing, honest advice, and genuine relationships built over 15 years." },
            { icon: Lightbulb, title: "Innovation", desc: "Continuously evolving our fleet, technology, and services to exceed expectations." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="card-elite rounded-xl p-8 text-center h-full">
                <v.icon className="mx-auto text-primary mb-6" size={28} strokeWidth={1.5} />
                <h3 className="font-heading text-base font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="section-divider" />

    {/* Stats */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { end: 1200, suffix: "+", label: "Clients Served" },
            { end: 50, suffix: "+", label: "Premium Vehicles" },
            { end: 15, suffix: "+", label: "Years of Excellence" },
            { end: 200, suffix: "+", label: "Corporate Partners" },
          ].map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <p className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                <CountUp end={s.end} suffix={s.suffix} />
              </p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="section-divider" />

    {/* Team */}
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-4">Leadership</p>
            <h2 className="font-display text-4xl md:text-[52px] font-light text-foreground">Meet the Team</h2>
            <div className="gold-line mx-auto mt-6" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="card-elite rounded-xl overflow-hidden text-center">
                <img src={t.img} alt={t.name} className="w-full h-72 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="font-heading text-base font-semibold text-foreground">{t.name}</h3>
                  <p className="text-xs text-primary mt-1 mb-3">{t.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.bio}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
