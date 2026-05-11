import React, { memo, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Calendar, Music } from 'lucide-react';
import { ServicesShowcase } from '../components/ServicesShowcase';
import LazyImage from '../components/LazyImage';

// Preload critical images
const preloadImage = (src) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

// Memoized Hero Section with optimized images
const HeroSection = memo(() => {
  // Preload hero image on component mount
  React.useEffect(() => {
    preloadImage('/Homepage-mainbanner2.jpg');
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background Image with WebP support */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/Homepage-mainbanner2.webp" type="image/webp" />
          <LazyImage
            src="/Homepage-mainbanner2.jpg"
            className="w-full h-full object-cover"
            alt="Midnight Monsoon Nightlife Background"
            loading="eager"
            fetchpriority="high"
            width={1920}
            height={1080}
          />
        </picture>
        
        {/* Optimized Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0A]" />
        
        {/* Subtle Pattern Overlay - GPU accelerated */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            willChange: 'transform'
          }} 
        />
      </div>
      
      {/* Optimized Ambient Glow Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-5">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF] rounded-full blur-[150px] animate-pulse"
          style={{ willChange: 'opacity' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[150px] animate-pulse" 
          style={{ animationDelay: '1s', willChange: 'opacity' }} 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ willChange: 'transform, opacity' }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            MIDNIGHT <span className="text-[#00D4FF] neon-text-blue">MONSOON</span>
          </h1>
          <p className="text-2xl md:text-3xl text-shine-white font-bold mb-4 tracking-wide">
            Not every night can handle the rain.
          </p>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            Sri Lanka's boldest after-dark experience – reserved for the wild at heart.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/gallery" 
              className="px-6 py-2 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// Memoized vibe feature component with performance optimizations
const VibeFeature = memo(({ icon: Icon, title, description, color }) => (
  <motion.div 
    className="flex items-start space-x-4"
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -20 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
  >
    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${color} shrink-0`}>
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-xl font-bold mb-1">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
));

VibeFeature.displayName = 'VibeFeature';

// Memoized Vibe Section with lazy loaded image
const VibeSection = memo(() => {
  const vibeFeatures = useMemo(() => [
    {
      icon: Music,
      title: "Live DJ Sets",
      description: "9 PM – 2 AM. Deep house & tropical rhythms.",
      color: "text-[#00D4FF]"
    },
    {
      icon: Star,
      title: "Happy Hour",
      description: "5 PM – 8 PM. 2-for-1 on all local spirits.",
      color: "text-white"
    },
    {
      icon: Calendar,
      title: "Karaoke Nights",
      description: "Every Wednesday. Unleash your inner star.",
      color: "text-[#00D4FF]"
    }
  ], []);

  return (
    <section className="relative py-24 bg-[#0F0F0F] overflow-hidden">
      {/* Optimized Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>
      
      {/* Optimized Ambient Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF] rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[150px] opacity-10" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Tonight's <span className="text-[#00D4FF]">Electric Vibe</span>
            </h2>
            <div className="space-y-8">
              {vibeFeatures.map((feature) => (
                <VibeFeature key={feature.title} {...feature} />
              ))}
            </div>
            <Link to="/contact" className="btn-secondary inline-block mt-12">
              Reserve a Table
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden neon-border-blue">
              <LazyImage 
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80" 
                className="w-full h-full object-cover" 
                alt="DJ Performance at Midnight Monsoon"
                width={800}
                height={800}
                placeholderSrc="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=50&q=20"
              />
            </div>
            <motion.div 
              className="absolute -bottom-6 -right-6 glass-card p-8 max-w-[200px]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <p className="text-4xl font-black text-[#00D4FF] mb-1">95%</p>
              <p className="text-xs uppercase tracking-widest text-gray-400">Capacity Tonight</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

VibeSection.displayName = 'VibeSection';

export const Home = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ willChange: 'opacity, transform' }}
      className="w-full relative"
    >
      {/* Optimized Base Background */}
      <div className="fixed inset-0 -z-10 bg-[#0A0A0A]">
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />
      </div>
      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Showcase */}
      <ServicesShowcase />

      {/* Partnership Promo Banner */}
      <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />
        
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF] rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm"
          >
            <div className="absolute inset-0">
              <LazyImage
                src="/Homepage-mainbanner2.jpg"
                alt="After Midnight Monsoon Partnership"
                className="w-full h-full object-cover opacity-30"
                width={1200}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />
            </div>

            <div className="relative z-10 p-12 md:p-16 text-center">
              <div className="inline-block mb-6">
                <span className="bg-[#00D4FF] text-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                  Nearby Events
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                After <span className="text-[#00D4FF]">Midnight Monsoon</span>?
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
                Walk to <span className="text-white font-bold">'The Sky Lounge'</span>
              </p>

              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-[#00D4FF]/30 rounded-full px-8 py-4 mb-8">
                <Star className="text-[#00D4FF]" size={24} />
                <span className="text-2xl font-bold text-[#00D4FF]">10% OFF</span>
                <span className="text-gray-400">with our stamp</span>
              </div>

              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                Extend your night out with our exclusive partnership. Show your Midnight Monsoon stamp at The Sky Lounge and enjoy special discounts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vibe Section */}
      <VibeSection />
    </motion.div>
  );
});

Home.displayName = 'Home';
