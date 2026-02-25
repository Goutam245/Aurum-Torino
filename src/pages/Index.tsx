import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Shield, Clock, Users, Banknote, Star, Car, Plane, Heart, Building, UserCheck, CalendarDays, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const cars = [
  { name: "Ferrari 488 GTB", category: "Sports", price: "€890", weekly: "€5,200", specs: "660hp · V8 Twin-Turbo · 3.0s 0-100 · 2 seats", img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=85&auto=format&fit=crop" },
  { name: "Porsche 911 Turbo S", category: "Sports", price: "€650", weekly: "€3,800", specs: "650hp · PDK · AWD · 2+2 seats", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=85&auto=format&fit=crop" },
  { name: "Mercedes S-Class", category: "Luxury Sedan", price: "€420", weekly: "€2,500", specs: "Chauffeur-Ready · Burmester · Massage Seats", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=85&fit=crop" },
];

const scrollCars = [
  { name: "Ferrari 488", img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=85&auto=format&fit=crop", price: "€890" },
  { name: "Lamborghini Huracán", img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=85&auto=format&fit=crop", price: "€950" },
  { name: "Porsche 911", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=85&auto=format&fit=crop", price: "€650" },
  { name: "Mercedes S-Class", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=85&fit=crop", price: "€420" },
  { name: "BMW 7 Series", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=85&auto=format&fit=crop", price: "€380" },
  { name: "Range Rover", img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=85&fit=crop", price: "€450" },
  { name: "Maserati Ghibli", img: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=85&auto=format&fit=crop", price: "€550" },
  { name: "Audi R8", img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=85&auto=format&fit=crop", price: "€780" },
];

const services = [
  { icon: Car, title: "Self Drive Rental", desc: "Choose your dream car, set your route, and discover Italy at your own pace. Daily, weekend, and weekly packages available with flexible pickup locations across Torino, Milano, and Venezia." },
  { icon: UserCheck, title: "Chauffeur Service", desc: "Our professional, multilingual drivers are available 24/7 for airport transfers, business meetings, weddings, and city tours. Discreet, punctual, and impeccably dressed." },
  { icon: Building, title: "Corporate Accounts", desc: "Dedicated account managers, monthly invoicing, and priority vehicle availability. Trusted by 200+ companies in Northern Italy including Fortune 500 branches." },
  { icon: Plane, title: "Airport Transfers", desc: "Meet & greet at Turin Airport (TRN), Milan Malpensa (MXP), and Milan Linate (LIN). Flight-tracking ensures we're always on time, even with delays." },
  { icon: Heart, title: "Wedding & Events", desc: "Make your special day unforgettable. Our decorated fleet includes convertibles, vintage Alfa Romeos, and elegant S-Classes for weddings, anniversaries, and galas." },
  { icon: CalendarDays, title: "Monthly & Long-Term", desc: "Extended project? Our monthly rental programs offer significant savings with all-inclusive packages: insurance, maintenance, and roadside assistance." },
];

const pillars = [
  { icon: Clock, title: "24/7 Concierge", desc: "Round-the-clock support via phone, WhatsApp, and email. Our team speaks Italian, English, French, and German." },
  { icon: Banknote, title: "No Hidden Fees", desc: "What you see is what you pay. Full insurance, unlimited mileage options, and airport fees are always disclosed upfront." },
  { icon: Shield, title: "Curated Fleet", desc: "Every car is under 2 years old, serviced every 5,000km, detailed before each rental, and GPS-equipped for your safety." },
  { icon: Users, title: "Flexible Booking", desc: "Change your plans? No problem. Free cancellation up to 48 hours before pickup. Modify dates, upgrade your car, or add a driver at any time." },
];

const testimonials = [
  { name: "Marco Bianchi", location: "Milano", car: "Ferrari 488 GTB", stars: 5, text: "Exceptional service from start to finish. The Ferrari was immaculate and the handover process was seamless. 100% recommend AutoElite to anyone visiting Torino. Worth every euro.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&auto=format&fit=crop&crop=face" },
  { name: "Sophie Laurent", location: "Paris", car: "Mercedes S-Class", stars: 5, text: "We hired the S-Class for our wedding weekend in Torino. AutoElite exceeded every expectation with their attention to detail, the car was decorated exactly as requested, and the driver was professional and warm.", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&auto=format&fit=crop&crop=face" },
  { name: "James Henderson", location: "London", car: "Porsche 911", stars: 5, text: "The best car rental experience I've had in Europe. Premium vehicles, professional staff, and truly competitive pricing. Our Porsche was delivered to the hotel at 6am with no issues whatsoever.", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80&auto=format&fit=crop&crop=face" },
];

const faqs = [
  { q: "What documents do I need to rent a car?", a: "You'll need a valid driver's license (held for at least 2 years), a passport or national ID, and a credit card in the main driver's name. International licenses are accepted with an official translation." },
  { q: "Is there a minimum age requirement?", a: "The minimum age for standard vehicles is 21 years. For high-performance sports cars (Ferrari, Lamborghini, Porsche), the minimum age is 25 with at least 3 years of driving experience." },
  { q: "What is included in the rental price?", a: "All rentals include fully comprehensive insurance (Collision Damage Waiver + Theft Protection), 24/7 roadside assistance, GPS navigation, and one additional driver. VAT is always included in quoted prices." },
  { q: "Can I pick up the car at the airport?", a: "Yes. We offer meet-and-greet service at Turin Airport (TRN), Milan Malpensa (MXP), and Milan Linate (LIN). A member of our team will greet you at arrivals with a sign and escort you to your vehicle." },
  { q: "What is your cancellation policy?", a: "Free cancellation up to 48 hours before your rental start time. Cancellations between 24-48 hours receive a 50% refund. Cancellations within 24 hours are non-refundable, but you can reschedule for free up to 3 months." },
  { q: "Do you offer long-term rentals?", a: "Absolutely. We offer weekly, monthly, and annual contracts with significant discounts. Long-term clients receive a dedicated account manager, priority fleet access, and flexible billing options." },
  { q: "Is a deposit required?", a: "Yes, a pre-authorization hold is placed on your credit card at pickup. The amount varies by vehicle: €500 for standard vehicles, €1,500 for luxury sedans, and €3,000 for high-performance sports cars. This is released within 5 business days of return." },
  { q: "Can I drive outside of Italy?", a: "Cross-border driving is permitted in France, Switzerland, Austria, and Monaco with advance written approval. An additional cross-border fee applies. Driving to other countries requires special arrangements." },
];

const wordReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const wordChild = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden noise-overlay">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=90&auto=format&fit=crop"
            alt="Luxury sports car on Italian road"
            className="w-full h-full object-cover animate-ken-burns"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.55) 60%, rgba(8,8,8,0.97) 100%)" }} />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-8 hero-text-shadow"
          >
            Torino, Italia — Est. 2009
          </motion.p>
          <motion.h1
            variants={wordReveal}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl md:text-7xl lg:text-[90px] font-light text-foreground leading-[0.95] tracking-[-2px] hero-text-shadow"
          >
            <motion.span variants={wordChild} className="inline-block mr-4">Il</motion.span>
            <motion.span variants={wordChild} className="inline-block mr-4">Lusso</motion.span>
            <motion.span variants={wordChild} className="inline-block mr-4">di</motion.span>
            <br className="hidden md:block" />
            <motion.span variants={wordChild} className="inline-block mr-4 gold-text italic font-display">Guidare</motion.span>
            <motion.span variants={wordChild} className="inline-block gold-text italic font-display">Libero</motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 text-lg md:text-xl text-foreground/70 font-body font-light hero-text-shadow"
          >
            Premium Car Rental in Torino — Ferrari · Lamborghini · Porsche · Mercedes
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/fleet" className="btn-gold-outline">Explore Our Fleet</Link>
            <Link to="/contact" className="btn-gold-solid">Book Now</Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-heading uppercase tracking-widest text-muted-foreground">Scroll to Discover</span>
          <ChevronDown className="text-primary animate-scroll-hint" size={24} />
        </motion.div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary">
        <div className="container mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: 1200, s: "+", l: "Happy Clients", icon: Users },
            { n: 15, s: "+", l: "Years Experience", icon: Clock },
            { n: 50, s: "+", l: "Premium Vehicles", icon: Car },
            { n: 4.9, s: "★", l: "Google Reviews", icon: Star, fixed: true },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <item.icon size={20} className="mx-auto text-primary mb-3" strokeWidth={1.5} />
              <span className="block font-heading text-3xl md:text-4xl font-bold text-primary">
                {item.fixed ? "4.9★" : <CountUp end={item.n} suffix={item.s} />}
              </span>
              <span className="text-sm text-muted-foreground mt-1 block">{item.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED FLEET */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-4">Our Collection</p>
              <h2 className="font-display text-4xl md:text-[56px] font-light text-foreground">Drive the Extraordinary</h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">Handpicked selection of Italy's finest automobiles, maintained to concours condition</p>
              <div className="gold-line mx-auto mt-6" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars.map((car, i) => (
              <ScrollReveal key={car.name} delay={i * 0.15}>
                <div className="card-elite rounded-xl overflow-hidden group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={car.img} alt={car.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <span className="absolute top-4 left-4 text-[10px] font-heading uppercase tracking-widest bg-destructive/90 text-foreground px-3 py-1 rounded-full">
                      {car.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{car.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{car.specs}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-primary font-heading font-bold text-xl">{car.price}<span className="text-xs text-muted-foreground font-normal"> /day</span></span>
                        <span className="block text-xs text-muted-foreground">From {car.weekly}/week</span>
                      </div>
                      <Link to="/contact" className="btn-gold-solid text-xs px-5 py-2">Reserve</Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/fleet" className="text-sm text-primary font-heading font-medium hover:underline underline-offset-4 inline-flex items-center gap-2">
              View Full Fleet <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* BRAND SHOWCASE */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=85&auto=format&fit=crop"
            alt="Italian road driving"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-4">The AutoElite Difference</p>
              <h2 className="font-display text-4xl md:text-[56px] font-light text-foreground leading-tight mb-8">
                Not Just a Car.<br /><span className="italic gold-text">An Experience.</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                We believe that driving should be a journey of the senses. Every vehicle in our fleet is personally selected, meticulously maintained, and delivered to you immaculate. Whether you're exploring the Alpine passes above Torino, attending a corporate gala in Milano, or simply want to feel alive on the Autostrada — AutoElite is your key to Italy's soul.
              </p>
              <div className="space-y-3 mb-8">
                {["Concierge delivery to your hotel or airport", "24-hour emergency roadside assistance", "Flexible insurance packages included"].map(b => (
                  <div key={b} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="text-primary">✦</span> {b}
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-gold-outline">Discover Our Story</Link>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=85&auto=format&fit=crop"
                alt="Lamborghini on Italian road"
                className="rounded-xl w-full h-[450px] object-cover"
                loading="lazy"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* SERVICES */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-4">What We Offer</p>
              <h2 className="font-display text-4xl md:text-[56px] font-light text-foreground">Complete Mobility Solutions</h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">From spontaneous weekend escapes to year-long corporate accounts</p>
              <div className="gold-line mx-auto mt-6" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08}>
                <div className="card-elite rounded-xl p-8 group h-full">
                  <s.icon className="text-primary mb-6" size={28} strokeWidth={1.5} />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-xs text-primary font-heading font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* WHY AUTOELITE */}
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-4">Why AutoElite</p>
              <h2 className="font-display text-4xl md:text-[56px] font-light text-foreground">The Difference</h2>
              <div className="gold-line mx-auto mt-6" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="card-elite rounded-xl p-8 text-center h-full">
                  <f.icon className="mx-auto text-primary mb-6" size={32} strokeWidth={1.5} />
                  <h3 className="font-heading text-base font-semibold text-foreground mb-3">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FLEET HORIZONTAL SCROLL */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 mb-10">
          <ScrollReveal>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-4">Explore</p>
                <h2 className="font-display text-4xl md:text-[48px] font-light text-foreground">50+ Vehicles Waiting</h2>
              </div>
              <Link to="/fleet" className="text-sm text-primary font-heading font-medium hidden md:inline-flex items-center gap-2 hover:underline underline-offset-4">
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {scrollCars.map((car, i) => (
            <div key={car.name} className="relative flex-shrink-0 w-[380px] h-[280px] snap-start rounded-xl overflow-hidden group" style={{ border: "1px solid hsl(43 45% 49% / 0.1)" }}>
              <img src={car.img} alt={car.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent z-[1]" />
              <div className="absolute bottom-0 left-0 right-0 z-[2] p-5 flex items-end justify-between">
                <span className="font-heading text-sm font-semibold text-foreground">{car.name}</span>
                <span className="text-primary font-heading font-bold text-sm">{car.price}/day</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* TESTIMONIALS */}
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-4">Testimonials</p>
              <h2 className="font-display text-4xl md:text-[56px] font-light text-foreground">What Our Clients Say</h2>
              <p className="text-muted-foreground mt-4 text-sm">Over 1,200 verified reviews on Google, TripAdvisor, and Trustpilot</p>
              <div className="gold-line mx-auto mt-6" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="card-elite rounded-xl p-8 h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.photo} alt={t.name} className="w-[52px] h-[52px] rounded-full object-cover border-2 border-primary" loading="lazy" />
                    <div>
                      <p className="text-sm font-heading font-medium text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.location} · Rented: {t.car}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="flex items-center justify-center gap-8 mt-12 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><Star size={12} className="text-primary fill-primary" /> TrustPilot Verified</span>
            <span className="flex items-center gap-2"><Star size={12} className="text-primary fill-primary" /> Google Reviews 4.9</span>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* STATS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              { end: 1200, suffix: "+", label: "Happy Clients" },
              { end: 50, suffix: "+", label: "Premium Vehicles" },
              { end: 15, suffix: "", label: "Years in Business" },
              { end: 4.9, suffix: "", label: "Average Rating", fixed: true },
              { end: 3, suffix: "", label: "Cities Covered" },
              { end: 200, suffix: "+", label: "Corporate Clients" },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {s.fixed ? "4.9" : <CountUp end={s.end} suffix={s.suffix} />}
                </p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ */}
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[11px] font-heading uppercase tracking-[5px] text-primary mb-4">FAQ</p>
              <h2 className="font-display text-4xl md:text-[52px] font-light text-foreground">Common Questions</h2>
              <p className="text-muted-foreground mt-4 text-sm">Everything you need to know before booking</p>
              <div className="gold-line mx-auto mt-6" />
            </div>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="card-elite rounded-xl px-6 border-none">
                <AccordionTrigger className="text-sm font-heading font-medium text-foreground hover:text-primary py-5 [&[data-state=open]>svg]:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <div className="section-divider" />

      {/* CONVERSION CTA */}
      <section className="py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, hsl(43 45% 49% / 0.3), transparent 70%)" }} />
        </div>
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-[56px] font-light text-foreground mb-6 leading-tight">
              Ready to Drive Your{" "}
              <span className="gold-text italic">Dream Car</span>?
            </h2>
            <p className="text-muted-foreground mb-4 text-sm">Join 1,200+ clients who chose AutoElite.</p>
            <p className="text-primary text-sm font-heading font-medium mb-10">First rental? Enjoy 10% off with code ELITE10</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-gold-solid">Book Your Car</Link>
              <a href="tel:+390111234567" className="btn-gold-outline">Call Us: +39 011 123 4567</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
