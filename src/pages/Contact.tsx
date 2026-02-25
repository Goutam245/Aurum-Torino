import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

const cars = [
  "Ferrari 488 GTB", "Lamborghini Huracán", "Porsche 911 Turbo S",
  "Mercedes S-Class", "BMW 7 Series", "Range Rover Autobiography",
  "Maserati Ghibli", "Audi R8 V10", "Alfa Romeo Giulia QV",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState({
    name: "", email: "", phone: "", pickup: "", startDate: "", endDate: "",
    car: "", drivers: "0", message: "", source: "", gdpr: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!form.name) newErrors.name = true;
    if (!form.email) newErrors.email = true;
    if (!form.phone) newErrors.phone = true;
    if (!form.gdpr) newErrors.gdpr = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields.");
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast.success("Thank you! We'll contact you within 2 hours.");
  };

  const set = (key: string, value: string | boolean) => {
    setForm(f => ({ ...f, [key]: value }));
    setErrors(e => ({ ...e, [key]: false }));
  };

  const inputClass = (field: string) =>
    `w-full bg-card border ${errors[field] ? "border-destructive" : "border-border"} rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors`;

  return (
    <main>
      <PageHero title="Contact Us" breadcrumb="Contact" subtitle="Get in touch — we respond within 2 hours during business hours" />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <ScrollReveal>
              <div>
                <h2 className="font-display text-3xl font-light text-foreground mb-8">Get in Touch</h2>
                <div className="space-y-6 mb-10">
                  <div>
                    <p className="text-xs font-heading uppercase tracking-widest text-primary mb-2">Address</p>
                    <p className="text-sm text-muted-foreground">Via Roma 45, 10121 Torino TO, Italy</p>
                  </div>
                  <div>
                    <p className="text-xs font-heading uppercase tracking-widest text-primary mb-2">Phone</p>
                    <a href="tel:+390111234567" className="text-sm text-muted-foreground hover:text-foreground transition-colors">+39 011 123 4567</a>
                  </div>
                  <div>
                    <p className="text-xs font-heading uppercase tracking-widest text-primary mb-2">Email</p>
                    <a href="mailto:info@autoelite.it" className="text-sm text-muted-foreground hover:text-foreground transition-colors">info@autoelite.it</a>
                  </div>
                  <div>
                    <p className="text-xs font-heading uppercase tracking-widest text-primary mb-2">Emergency (24/7)</p>
                    <a href="tel:+393330000000" className="text-sm text-muted-foreground hover:text-foreground transition-colors">+39 333 000 0000</a>
                  </div>
                </div>

                {/* Hours */}
                <div className="card-elite rounded-xl p-6 mb-8">
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-4">Business Hours</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between"><span>Monday – Friday</span><span>07:00 – 22:00</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span>08:00 – 20:00</span></div>
                    <div className="flex justify-between"><span>Sunday</span><span>09:00 – 18:00</span></div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden h-64 border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.5!2d7.685!3d45.069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA0JzA4LjQiTiA3wrA0MScwNi4wIkU!5e0!3m2!1sit!2sit!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    title="AutoElite Torino location"
                  />
                </div>

                {/* WhatsApp + Call */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href="https://wa.me/390111234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-heading font-medium transition-all duration-300"
                    style={{ background: "hsl(142 70% 45%)", color: "white" }}
                  >
                    <MessageCircle size={16} /> Chat on WhatsApp
                  </a>
                  <a href="tel:+390111234567" className="btn-gold-outline inline-flex items-center gap-2">
                    <Phone size={14} /> Call Us
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.2}>
              {submitted ? (
                <div className="card-elite rounded-xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary text-3xl">✓</span>
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-4">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">Thank you! We'll contact you within 2 hours during business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2 block">Full Name *</label>
                      <input type="text" className={inputClass("name")} placeholder="Your full name" value={form.name} onChange={e => set("name", e.target.value)} />
                      {errors.name && <p className="text-xs text-destructive mt-1">Required</p>}
                    </div>
                    <div>
                      <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2 block">Email *</label>
                      <input type="email" className={inputClass("email")} placeholder="email@example.com" value={form.email} onChange={e => set("email", e.target.value)} />
                      {errors.email && <p className="text-xs text-destructive mt-1">Required</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2 block">Phone *</label>
                      <input type="tel" className={inputClass("phone")} placeholder="+39 ..." value={form.phone} onChange={e => set("phone", e.target.value)} />
                      {errors.phone && <p className="text-xs text-destructive mt-1">Required</p>}
                    </div>
                    <div>
                      <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2 block">Pickup Location</label>
                      <select className={inputClass("pickup")} value={form.pickup} onChange={e => set("pickup", e.target.value)}>
                        <option value="">Select location...</option>
                        <option>Torino Airport (TRN)</option>
                        <option>Torino City Center</option>
                        <option>Hotel Delivery</option>
                        <option>Milan Malpensa (MXP)</option>
                        <option>Milan Linate (LIN)</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2 block">Start Date</label>
                      <input type="date" className={inputClass("startDate")} value={form.startDate} onChange={e => set("startDate", e.target.value)} />
                    </div>
                    <div>
                      <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2 block">End Date</label>
                      <input type="date" className={inputClass("endDate")} value={form.endDate} onChange={e => set("endDate", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2 block">Preferred Vehicle</label>
                      <select className={inputClass("car")} value={form.car} onChange={e => set("car", e.target.value)}>
                        <option value="">Select a vehicle...</option>
                        {cars.map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2 block">Additional Drivers</label>
                      <input type="number" min="0" max="3" className={inputClass("drivers")} value={form.drivers} onChange={e => set("drivers", e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2 block">Message</label>
                    <textarea rows={4} className={inputClass("message")} placeholder="Tell us about your plans..." value={form.message} onChange={e => set("message", e.target.value)} />
                  </div>
                  <div>
                    <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-3 block">How did you find us?</label>
                    <div className="flex flex-wrap gap-4">
                      {["Google", "Social Media", "Friend / Referral", "Corporate Partner", "Other"].map(s => (
                        <label key={s} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                          <input type="radio" name="source" value={s} checked={form.source === s} onChange={e => set("source", e.target.value)} className="accent-primary" /> {s}
                        </label>
                      ))}
                    </div>
                  </div>
                  <label className={`flex items-start gap-3 text-sm cursor-pointer ${errors.gdpr ? "text-destructive" : "text-muted-foreground"}`}>
                    <input type="checkbox" checked={form.gdpr} onChange={e => set("gdpr", e.target.checked)} className="mt-1 accent-primary" />
                    I accept the Privacy Policy and consent to being contacted regarding my rental inquiry. *
                  </label>
                  <button type="submit" className="btn-gold-solid w-full py-4">Send Inquiry</button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
