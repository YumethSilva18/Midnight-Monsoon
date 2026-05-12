import React, { memo, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Calendar, Music } from 'lucide-react';
import { ServicesShowcase } from '../components/ServicesShowcase';

// Preload critical images
const preloadImage = (src) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

// Memoized Hero Section with main banner
const HeroSection = memo(() => {
  // Preload hero image on component mount
  React.useEffect(() => {
    preloadImage('/Homepage-mainbanner2.jpg');
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Main Banner Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Homepage-mainbanner2.jpg"
          className="w-full h-full object-cover"
          alt="Midnight Monsoon Main Banner"
          loading="eager"
          fetchpriority="high"
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0A]" />
        
        {/* Ambient Glow Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF] rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFC857] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
            MIDNIGHT <span className="text-[#00D4FF] neon-text-blue">MONSOON</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Where the night comes alive with <span className="text-[#00D4FF] font-semibold">electric energy</span>, 
            <br />premium drinks, and <span className="text-[#FFC857] font-semibold">unforgettable moments</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/menu"
              className="btn-primary group">
              <span>Explore Menu</span>
              <Star className="w-5 h-5 ml-2 transition-transform group-hover:rotate-12" />
            </Link>
            
            <Link 
              to="/gallery"
              className="btn-secondary group">
              <span>View Gallery</span>
              <Music className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-4 h-4 bg-[#00D4FF] rounded-full opacity-60"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-16 w-6 h-6 bg-[#FFC857] rounded-full opacity-40"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// Memoized Drink Card Component
const DrinkCard = memo(({ drink, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    className="glass-card p-8 text-center group service-card-glow">
    
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFC857] to-[#FF007F] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
      <span className="text-2xl font-black text-white">{drink.icon}</span>
    </div>
    
    <h3 className="text-2xl font-bold mb-4 text-[#FFC857]">{drink.name}</h3>
    <p className="text-gray-300 leading-relaxed mb-4">{drink.description}</p>
    <div className="text-3xl font-black text-[#00D4FF] mb-4">{drink.price}</div>
    
    <Link 
      to="/menu"
      className="inline-block px-6 py-2 border border-[#00D4FF] text-[#00D4FF] rounded-full hover:bg-[#00D4FF] hover:text-black transition-all duration-300 text-sm font-semibold">
      Order Now
    </Link>
  </motion.div>
));

DrinkCard.displayName = 'DrinkCard';

// Memoized Vibe Feature Component
const VibeFeature = memo(({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="flex items-center gap-4 text-gray-300 group">
    
    <div className="w-3 h-3 rounded-full bg-[#00D4FF] group-hover:scale-150 transition-transform duration-300" />
    <span className="text-lg group-hover:text-white transition-colors duration-300">{feature}</span>
  </motion.div>
));

VibeFeature.displayName = 'VibeFeature';

export function Home() {
  // Memoized static data to prevent recreation on every render
  const featuredDrinks = useMemo(() => [
    {
      name: "Monsoon Mule",
      description: "Our signature vodka cocktail with ginger beer, fresh lime, and mint",
      price: "LKR 1,800",
      icon: "🍸"
    },
    {
      name: "Thunderbolt Sour",
      description: "Premium whisky sour with honey, lemon, and angostura bitters",
      price: "LKR 2,000",
      icon: "🥃"
    },
    {
      name: "Stormy Passion",
      description: "Exotic passion fruit puree with premium vodka and chili rim",
      price: "LKR 1,850",
      icon: "🍹"
    }
  ], []);

  const vibeFeatures = useMemo(() => [
    "Live DJ & Music Every Night",
    "Premium Cocktails & Spirits", 
    "VIP Booths & Bottle Service",
    "Late Night Dining Menu",
    "Rooftop Bar & Lounge",
    "Private Event Hosting"
  ], []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#0A0A0A]">
      
      {/* Hero Section with Main Banner */}
      <HeroSection />

      {/* Featured Drinks Section */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              SIGNATURE <span className="text-[#00D4FF]">COCKTAILS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Handcrafted by our expert mixologists using premium spirits and fresh ingredients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredDrinks.map((drink, index) => (
              <DrinkCard key={drink.name} drink={drink} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase - Infinite Scrolling Section */}
      <ServicesShowcase />

      {/* The Vibe Section */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                FEEL THE <span className="gradient-text">VIBE</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Step into a world where luxury meets energy. Our carefully curated atmosphere 
                combines the sophistication of a premium lounge with the electric pulse of 
                Colombo's hottest nightlife destination.
              </p>

              <div className="space-y-4 mb-12">
                {vibeFeatures.map((feature, index) => (
                  <VibeFeature key={feature} feature={feature} index={index} />
                ))}
              </div>

              <Link 
                to="/contact"
                className="btn-primary group text-lg px-10 py-4">
                <span>Make Reservation</span>
                <Calendar className="w-6 h-6 ml-3 transition-transform group-hover:scale-110" />
              </Link>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative">
              
              <div className="relative rounded-3xl overflow-hidden neon-border-blue">
                <img
                  src="/Elevated-comfort.jpg"
                  alt="Midnight Monsoon Interior"
                  className="w-full h-[600px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-[#FF007F] text-white px-6 py-3 rounded-full font-bold text-sm shadow-2xl"
                animate={{ 
                  y: [0, -10, 0],
                  boxShadow: [
                    "0 10px 30px rgba(255, 0, 127, 0.3)",
                    "0 20px 40px rgba(255, 0, 127, 0.5)",
                    "0 10px 30px rgba(255, 0, 127, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                OPEN DAILY
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-[#00D4FF]/10 via-[#FF007F]/10 to-[#FFC857]/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto">
            
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              READY FOR THE <span className="text-[#00D4FF]">STORM</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join us for an electrifying night where every moment becomes a memory. 
              <br />Experience Colombo's most exclusive nightlife destination.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact"
                className="btn-primary group text-lg px-12 py-4">
                <span>Make Reservation</span>
                <Calendar className="w-6 h-6 ml-3 transition-transform group-hover:scale-110" />
              </Link>
              
              <a 
                href="tel:+94771234567"
                className="btn-secondary group text-lg px-12 py-4">
                <span>Call Now</span>
                <span className="ml-3 font-bold">+94 77 123 4567</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}