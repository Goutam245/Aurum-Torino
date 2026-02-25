import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-24">
        <div className="h-[50vh] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920"
            alt="Blog post hero"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="container mx-auto px-6 -mt-32 relative z-10">
          <ScrollReveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-primary mb-6 hover:gap-3 transition-all">
              <ArrowLeft size={14} /> Back to Journal
            </Link>
            <span className="text-[10px] font-heading uppercase tracking-widest text-primary block mb-3">Travel</span>
            <h1 className="font-display text-4xl md:text-6xl font-light text-foreground mb-4">Top 5 Scenic Drives in Piedmont</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span>Dec 15, 2024</span><span>·</span><span>5 min read</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <div className="prose-custom space-y-6 text-sm text-muted-foreground leading-[1.9]">
              <p>Piedmont is a paradise for driving enthusiasts. With its winding mountain roads, rolling vineyards, and picturesque villages, this Italian region offers some of the most unforgettable routes in Europe.</p>

              <h2 className="font-display text-2xl text-foreground mt-12 mb-4">1. The Langhe Wine Route</h2>
              <p>Starting from Alba, this route winds through UNESCO-protected vineyards, past medieval hilltop towns like Barolo and La Morra. The landscape shifts with the seasons — golden in autumn, emerald in spring.</p>

              <blockquote className="border-l-2 border-primary pl-6 py-2 text-foreground font-display text-xl italic my-8">
                "Driving through the Langhe at sunset, with a Ferrari purring beneath you — that's la dolce vita."
              </blockquote>

              <h2 className="font-display text-2xl text-foreground mt-12 mb-4">2. The Great St. Bernard Pass</h2>
              <p>One of the oldest Alpine passes, this dramatic route climbs to 2,469 meters. Hairpin turns, glacial views, and a sense of adventure that only a mountain road can deliver.</p>

              <h2 className="font-display text-2xl text-foreground mt-12 mb-4">3. Lake Orta Circuit</h2>
              <p>A quieter alternative to Lake Como, the roads around Orta San Giulio offer lakeside serenity, Romanesque churches, and charming cafés perfect for a mid-drive espresso stop.</p>

              <img src="https://images.unsplash.com/photo-1529154691717-3306083a9066?w=1200" alt="Italian landscape" className="w-full h-64 object-cover rounded-xl my-8" loading="lazy" />

              <h2 className="font-display text-2xl text-foreground mt-12 mb-4">4. Torino to Sestriere</h2>
              <p>This route climbs from the elegance of Torino into the Olympic ski resorts. In summer, the road is quiet and the panoramas are spectacular.</p>

              <h2 className="font-display text-2xl text-foreground mt-12 mb-4">5. Monferrato Hills</h2>
              <p>Rolling hills dotted with castles, Romanesque churches, and some of Italy's finest wine estates. A gentler drive, perfect for the Bentley Continental or Mercedes S-Class.</p>
            </div>
          </ScrollReveal>

          {/* Author */}
          <ScrollReveal>
            <div className="card-elite rounded-xl p-8 mt-16 flex items-center gap-6">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200" alt="Author" className="w-16 h-16 rounded-full object-cover" loading="lazy" />
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">Luca Rossi</p>
                <p className="text-xs text-muted-foreground mt-1">Founder of AutoElite and passionate advocate for Italian motoring culture.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Related */}
          <ScrollReveal>
            <div className="mt-20">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Ferrari vs Lamborghini", img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400", slug: "ferrari-vs-lambo" },
                  { title: "The Perfect Wedding Car", img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=400", slug: "wedding-car-guide" },
                  { title: "Torino's Hidden Gems", img: "https://images.unsplash.com/photo-1529154691717-3306083a9066?w=400", slug: "torino-hidden-gems" },
                ].map(r => (
                  <Link key={r.slug} to={`/blog/${r.slug}`} className="card-elite rounded-xl overflow-hidden group block">
                    <img src={r.img} alt={r.title} className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="p-4">
                      <p className="text-sm font-heading font-medium text-foreground group-hover:text-primary transition-colors">{r.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
