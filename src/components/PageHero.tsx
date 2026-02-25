import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  breadcrumb?: string;
  subtitle?: string;
}

const PageHero = ({ title, breadcrumb, subtitle }: PageHeroProps) => (
  <section className="relative pt-32 pb-20 bg-secondary">
    <div className="container mx-auto px-6">
      {breadcrumb && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="text-primary">/</span>
          <span className="text-foreground">{breadcrumb}</span>
        </div>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-display text-5xl md:text-7xl font-light text-foreground"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mt-4 text-sm max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="gold-line mt-6" />
    </div>
  </section>
);

export default PageHero;
