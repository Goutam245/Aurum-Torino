import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const posts = [
  { slug: "top-drives-piedmont", title: "Top 5 Alpine Drives from Torino", excerpt: "Discover the most breathtaking routes through Italy's northwest, from dramatic Alpine passes to rolling vineyard valleys in the Langhe.", category: "Travel", date: "Dec 15, 2024", readTime: "5 min", author: "Luca Rossi", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80", featured: true },
  { slug: "ferrari-vs-lambo", title: "Ferrari vs Lamborghini: Which Should You Rent?", excerpt: "A detailed comparison of Italy's two most iconic supercar brands to help you choose the perfect car for your next adventure.", category: "Guide", date: "Dec 8, 2024", readTime: "4 min", author: "Alessandro Conti", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80" },
  { slug: "corporate-mobility", title: "Corporate Car Rental: The Complete Guide", excerpt: "How premium car rental is reshaping business travel and executive transportation across Northern Italy.", category: "Business", date: "Nov 28, 2024", readTime: "6 min", author: "Giulia Ferretti", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80" },
  { slug: "wedding-car-guide", title: "Wedding Car Inspiration for 2025", excerpt: "From classic Alfa Romeo elegance to modern Mercedes luxury — finding the right vehicle for your Italian wedding.", category: "Lifestyle", date: "Nov 20, 2024", readTime: "4 min", author: "Giulia Ferretti", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
  { slug: "hidden-roads", title: "Hidden Roads of Piedmont", excerpt: "Secret routes and local favorites in Piedmont that are best explored with a luxury car and no agenda.", category: "Travel", date: "Nov 12, 2024", readTime: "7 min", author: "Luca Rossi", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { slug: "best-rate-tips", title: "How to Get the Best Rate on a Luxury Rental", excerpt: "Insider tips on timing, packages, and negotiation to get maximum value from your premium car rental experience.", category: "Tips", date: "Nov 5, 2024", readTime: "5 min", author: "Alessandro Conti", img: "https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?w=800&q=80" },
];

const Blog = () => {
  const [featured, ...rest] = posts;
  return (
    <main>
      <PageHero title="Journal" breadcrumb="Blog" subtitle="Automotive insights, Italian travel guides, and luxury lifestyle" />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Featured */}
          <ScrollReveal>
            <Link to={`/blog/${featured.slug}`} className="block card-elite rounded-xl overflow-hidden mb-16 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-72 lg:h-auto overflow-hidden">
                  <img src={featured.img} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <span className="absolute top-4 left-4 text-[10px] font-heading uppercase tracking-widest bg-primary/90 text-primary-foreground px-3 py-1 rounded-full">Featured</span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-[10px] font-heading uppercase tracking-widest text-primary mb-3">{featured.category}</span>
                  <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">{featured.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{featured.author}</span>
                    <span>·</span>
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime} read</span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <Link to={`/blog/${post.slug}`} className="card-elite rounded-xl overflow-hidden group block h-full">
                  <div className="relative h-52 overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <span className="absolute top-4 left-4 text-[10px] font-heading uppercase tracking-widest bg-primary/90 text-primary-foreground px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col">
                    <h3 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
