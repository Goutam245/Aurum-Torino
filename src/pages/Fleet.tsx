import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Fuel, Users, Settings, Gauge, CircleDot } from "lucide-react";

const allCars = [
  { name: "Ferrari 488 GTB", category: "Sports", price: 890, seats: 2, fuel: "Petrol", trans: "Auto", hp: "660hp", speed: "3.0s", available: true, img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=85&auto=format&fit=crop" },
  { name: "Lamborghini Huracán", category: "Sports", price: 950, seats: 2, fuel: "Petrol", trans: "Auto", hp: "640hp", speed: "2.9s", available: true, img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=85&auto=format&fit=crop" },
  { name: "Porsche 911 Turbo S", category: "Sports", price: 650, seats: 2, fuel: "Petrol", trans: "PDK", hp: "650hp", speed: "2.7s", available: true, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=85&auto=format&fit=crop" },
  { name: "Mercedes S-Class", category: "Luxury Sedan", price: 420, seats: 5, fuel: "Hybrid", trans: "Auto", hp: "496hp", speed: "4.4s", available: true, img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=85&fit=crop" },
  { name: "BMW 7 Series", category: "Luxury Sedan", price: 380, seats: 5, fuel: "Diesel", trans: "Auto", hp: "340hp", speed: "5.3s", available: true, img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=85&auto=format&fit=crop" },
  { name: "Range Rover Autobiography", category: "SUV", price: 450, seats: 5, fuel: "Diesel", trans: "Auto", hp: "400hp", speed: "5.8s", available: true, img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=85&fit=crop" },
  { name: "Maserati Ghibli", category: "Luxury Sedan", price: 550, seats: 4, fuel: "Petrol", trans: "Auto", hp: "430hp", speed: "4.7s", available: false, img: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=85&auto=format&fit=crop" },
  { name: "Audi R8 V10", category: "Sports", price: 780, seats: 2, fuel: "Petrol", trans: "Auto", hp: "570hp", speed: "3.2s", available: true, img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=85&auto=format&fit=crop" },
  { name: "Alfa Romeo Giulia QV", category: "Sports", price: 350, seats: 4, fuel: "Petrol", trans: "Auto", hp: "510hp", speed: "3.9s", available: true, img: "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=800&q=85&auto=format&fit=crop" },
];

const categories = ["All", "Sports", "Luxury Sedan", "SUV"];

const Fleet = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allCars : allCars.filter(c => c.category === active);

  return (
    <main>
      <PageHero title="Our Premium Fleet" breadcrumb="Fleet" subtitle="50+ handpicked vehicles across all categories" />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-14 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-heading font-medium tracking-wide transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((car, i) => (
              <ScrollReveal key={car.name} delay={i * 0.08}>
                <div className="card-elite rounded-xl overflow-hidden group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={car.img} alt={car.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <span className={`absolute top-4 left-4 text-[10px] font-heading uppercase tracking-widest px-3 py-1 rounded-full ${
                      car.category === "Sports" ? "bg-destructive/90 text-destructive-foreground" : car.category === "SUV" ? "bg-accent/90 text-accent-foreground" : "bg-primary/90 text-primary-foreground"
                    }`}>
                      {car.category}
                    </span>
                    {car.available ? (
                      <span className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-heading text-green-400">
                        <CircleDot size={8} className="fill-green-400 text-green-400" /> Available
                      </span>
                    ) : (
                      <span className="absolute top-4 right-4 text-[10px] font-heading text-muted-foreground">Contact for Availability</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{car.name}</h3>
                    <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground flex-wrap">
                      <span className="flex items-center gap-1"><Gauge size={12} /> {car.hp}</span>
                      <span className="flex items-center gap-1"><Settings size={12} /> {car.trans}</span>
                      <span className="flex items-center gap-1"><Users size={12} /> {car.seats}</span>
                      <span className="flex items-center gap-1"><Fuel size={12} /> {car.fuel}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">0-100 km/h: {car.speed}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-heading font-bold text-xl">€{car.price}<span className="text-xs text-muted-foreground font-normal"> /day</span></span>
                      <Link to="/contact" className="btn-gold-solid text-xs px-5 py-2">Book This Car</Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <ScrollReveal>
            <div className="card-elite rounded-xl p-10 text-center mt-16">
              <h3 className="font-display text-2xl text-foreground mb-3">Looking for something specific?</h3>
              <p className="text-sm text-muted-foreground mb-6">We can source any luxury or exotic vehicle on request. Contact our concierge team.</p>
              <Link to="/contact" className="btn-gold-outline">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Fleet;
