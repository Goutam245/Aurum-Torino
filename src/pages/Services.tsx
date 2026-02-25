import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "Self Drive Rental",
    desc: "Choose your dream car, set your route, and discover Italy at your own pace. Daily, weekend, and weekly packages available with flexible pickup locations across Torino, Milano, and Venezia.",
    long: "Our self-drive experience puts you behind the wheel of Italy's finest automobiles. Every vehicle comes GPS-equipped, fully insured, and detailed to showroom standards. Whether it's a Ferrari on the Autostrada or a Range Rover through the Alps, the road is yours.",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&q=90",
  },
  {
    title: "Chauffeur Service",
    desc: "Our professional, multilingual drivers are available 24/7 for airport transfers, business meetings, weddings, and city tours. Discreet, punctual, and impeccably dressed.",
    long: "Every chauffeur is trained in advanced driving, fluent in at least two languages, and carries full professional insurance. We provide door-to-door luxury for corporate executives, VIP guests, and special occasions.",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=90",
  },
  {
    title: "Airport Transfers",
    desc: "Meet & greet at Turin Airport (TRN), Milan Malpensa (MXP), and Milan Linate (LIN). Flight-tracking ensures we're always on time, even with delays.",
    long: "Your driver monitors your flight in real-time. Upon landing, they'll greet you in the arrivals hall with a personalized sign and escort you to your vehicle. Complimentary water, Wi-Fi, and phone charging provided in all transfer vehicles.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=90",
  },
  {
    title: "Wedding & Events",
    desc: "Make your special day unforgettable. Our decorated fleet includes convertibles, vintage Alfa Romeos, and elegant S-Classes.",
    long: "From classic ribbon decorations to bespoke floral arrangements, we coordinate with your wedding planner to ensure the perfect automotive entrance. Our wedding packages include a professional chauffeur, champagne service, and photo-ready vehicles.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=90",
  },
  {
    title: "Corporate Accounts",
    desc: "Dedicated account managers, monthly invoicing, and priority vehicle availability. Trusted by 200+ companies in Northern Italy.",
    long: "Our corporate program includes dedicated fleet management, volume discounts, priority reservations, and centralized billing. Ideal for consulting firms, luxury hotels, and international executives requiring consistent premium transportation.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=90",
  },
  {
    title: "Monthly & Long-Term",
    desc: "Extended project? Our monthly programs offer significant savings with all-inclusive packages: insurance, maintenance, and roadside assistance.",
    long: "Relocating to Italy or working on an extended project? Our long-term rental packages deliver the luxury car experience at a fraction of ownership cost. Includes comprehensive insurance, scheduled maintenance, and 24/7 support.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=90",
  },
];

const steps = [
  { n: "01", title: "Choose Vehicle", desc: "Browse our curated fleet and select your perfect car." },
  { n: "02", title: "Select Dates", desc: "Pick your rental period with flexible start and end times." },
  { n: "03", title: "Confirm & Pay", desc: "Secure your booking with our simple, transparent checkout." },
  { n: "04", title: "We Deliver", desc: "Car delivered to your hotel, airport, or any address in the city." },
  { n: "05", title: "Drive & Enjoy", desc: "Hit the road with 24/7 support always at your fingertips." },
];

const tiers = [
  { name: "Day Rental", price: "From €350", features: ["Full CDW insurance", "Unlimited mileage", "24/7 roadside support", "GPS navigation", "One additional driver"], cta: "Book Day Rental" },
  { name: "Week Package", price: "From €2,100", features: ["Everything in Day", "10% automatic discount", "Free delivery/pickup", "Flexible date changes", "Priority support line", "Fuel card option"], featured: true, cta: "Book Week Package" },
  { name: "Monthly Corporate", price: "Custom Quote", features: ["Everything in Week", "Dedicated account manager", "Fleet rotation available", "Centralized invoicing", "Volume discounts", "Airport lounge access"], cta: "Request Quote" },
];

const Services = () => (
  <main>
    <PageHero title="Complete Mobility Solutions" breadcrumb="Services" subtitle="From spontaneous weekend escapes to year-long corporate accounts" />

    {/* Services alternating */}
    {services.map((s, i) => (
      <section key={s.title} className={`py-24 ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
            <ScrollReveal className={i % 2 !== 0 ? "lg:order-2" : ""}>
              <img src={s.img} alt={s.title} className="rounded-xl w-full h-[400px] object-cover" loading="lazy" />
            </ScrollReveal>
            <ScrollReveal delay={0.15} className={i % 2 !== 0 ? "lg:order-1" : ""}>
              <p className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-4">Service {String(i + 1).padStart(2, '0')}</p>
              <h2 className="font-display text-3xl md:text-[44px] font-light text-foreground mb-6">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.long}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-primary font-heading font-medium hover:gap-3 transition-all">
                Get Started <ArrowRight size={14} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
        {i < services.length - 1 && <div className="section-divider mt-24" />}
      </section>
    ))}

    {/* How It Works */}
    <section className="py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-4">Process</p>
            <h2 className="font-display text-4xl md:text-[52px] font-light text-foreground">How It Works</h2>
            <div className="gold-line mx-auto mt-6" />
          </div>
        </ScrollReveal>
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 0.1}>
                <div className="text-center relative">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-primary text-primary font-heading font-bold text-lg mb-6 bg-secondary relative z-10">
                    {s.n}
                  </span>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    <div className="section-divider" />

    {/* Pricing */}
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-4">Pricing</p>
            <h2 className="font-display text-4xl md:text-[52px] font-light text-foreground">Rental Plans</h2>
            <div className="gold-line mx-auto mt-6" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className={`card-elite rounded-xl p-8 text-center h-full flex flex-col ${t.featured ? "border-primary/30 relative" : ""}`}>
                {t.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-heading uppercase tracking-widest bg-primary text-primary-foreground px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{t.name}</h3>
                <p className="text-2xl font-heading font-bold text-primary mb-6">{t.price}</p>
                <ul className="space-y-3 mb-8 flex-1 text-left">
                  {t.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={t.featured ? "btn-gold-solid w-full" : "btn-gold-outline w-full"}>
                  {t.cta}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Services;
