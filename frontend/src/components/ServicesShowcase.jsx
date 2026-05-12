import React, { useState, memo, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { 
  Wine, 
  UtensilsCrossed, 
  Music, 
  Sofa, 
  PartyPopper, 
  Crown, 
  Sparkles 
} from 'lucide-react';

const services = [
  {
    id: 1,
    category: "DRINKS",
    title: "Liquid Artistry",
    icon: Wine,
    image: "/Gallery/Drinks/Drinks-main.jpg",
    items: [
      "Signature Cocktails",
      "Craft Beers",
      "Premium Spirits",
      "Fine Wines",
      "Happy Hour Specials",
      "Mocktails & Fresh Juices",
      "Bottle Service",
      "Bites / Bar Snacks"
    ]
  },
  {
    id: 2,
    category: "FOODS",
    title: "Culinary Excellence",
    icon: UtensilsCrossed,
    image: "/Gallery/Foods/kobby-mendez-idTwDKt2j2o-unsplash.jpg",
    items: [
      "Late-Night Dining",
      "Gourmet Burgers",
      "Fusion Cuisine",
      "Seafood Platters",
      "Sharing Boards",
      "Desserts",
      "Chef Specials",
      "Premium Dining Experience"
    ]
  },
  {
    id: 3,
    category: "ENTERTAINMENT",
    title: "Electric Nights",
    icon: Music,
    image: "/Gallery/Entertainment/aleksandr-popov-DPspiXW2zWg-unsplash.jpg",
    items: [
      "Live DJ & Music",
      "Dance Floor",
      "Live Band Performances",
      "Karaoke Nights",
      "Theme Parties",
      "Sports Screenings",
      "Open Mic Nights",
      "Acoustic Sessions"
    ]
  },
  {
    id: 4,
    category: "LOUNGE & EXPERIENCE",
    title: "Elevated Comfort",
    icon: Sofa,
    image: "/Gallery/Lounge & Experience/stanislav-knopp-nawaKdBv75c-unsplash.jpg",
    items: [
      "Hookah Lounge / Shisha",
      "VIP Booths",
      "Private Lounge Seating",
      "Rooftop Bar",
      "Outdoor Terrace",
      "Cigar Lounge",
      "Luxury Dining Experience",
      "Poolside Bar"
    ]
  },
  {
    id: 5,
    category: "EVENTS & SOCIAL",
    title: "Unforgettable Moments",
    icon: PartyPopper,
    image: "/Gallery/Event & Social/matty-adame-nLUb9GThIcg-unsplash (1).jpg",
    items: [
      "Birthday Celebrations",
      "Corporate Events",
      "Ladies' Night",
      "Bachelor / Bachelorette Parties",
      "Exclusive Member Nights",
      "Event Hosting",
      "Private Parties",
      "Seasonal Festivals"
    ]
  },
  {
    id: 6,
    category: "PREMIUM SERVICES",
    title: "VIP Treatment",
    icon: Crown,
    image: "/Gallery/Premium Services/jordan-graff-9TBgvuPAe0Y-unsplash.jpg",
    items: [
      "Table Reservations",
      "Valet Parking",
      "Mixology Experience",
      "Personalized Bottle Packages",
      "Premium Guest Service",
      "Security & Private Access"
    ]
  }
];

// Auto-scrolling service card component
const ServiceCard = memo(({ service, isActive, onClick }) => {
  const IconComponent = service.icon;
  
  return (
    <motion.div
      className={`relative min-w-[400px] h-[600px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${
        isActive ? 'scale-105 shadow-2xl' : 'scale-95 opacity-70'
      }`}
      onClick={onClick}
      whileHover={{ scale: isActive ? 1.08 : 1.02 }}
      style={{
        boxShadow: isActive ? '0 25px 50px rgba(0, 212, 255, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}>
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/20 via-transparent to-[#FF007F]/20" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 text-white">
        {/* Icon */}
        <motion.div
          className="w-16 h-16 rounded-full bg-[#00D4FF]/20 backdrop-blur-md flex items-center justify-center mb-6 border border-[#00D4FF]/40"
          animate={{ 
            boxShadow: isActive ? '0 0 30px rgba(0, 212, 255, 0.6)' : '0 0 10px rgba(0, 212, 255, 0.3)'
          }}>
          <IconComponent size={32} className="text-[#00D4FF]" />
        </motion.div>

        {/* Category */}
        <motion.span 
          className="text-sm font-bold uppercase tracking-[0.2em] text-[#FFC857] mb-2"
          animate={{ opacity: isActive ? 1 : 0.7 }}>
          {service.category}
        </motion.span>

        {/* Title */}
        <motion.h3 
          className="text-3xl font-black mb-4 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
          animate={{ 
            scale: isActive ? 1.05 : 1,
            color: isActive ? '#FFFFFF' : '#E5E5E5'
          }}>
          {service.title}
        </motion.h3>

        {/* Items List */}
        <motion.div 
          className="space-y-2"
          animate={{ opacity: isActive ? 1 : 0.8 }}>
          {service.items.slice(0, 4).map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-3 text-sm text-gray-300"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: isActive ? 1 : 0.6 }}
              transition={{ delay: idx * 0.1 }}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
              <span>{item}</span>
            </motion.div>
          ))}
          {service.items.length > 4 && (
            <motion.div 
              className="text-xs text-[#00D4FF] font-semibold mt-2"
              animate={{ opacity: isActive ? 1 : 0.5 }}>
              +{service.items.length - 4} more services
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={{
          boxShadow: isActive 
            ? '0 0 60px rgba(0, 212, 255, 0.4), inset 0 0 60px rgba(0, 212, 255, 0.1)'
            : '0 0 20px rgba(0, 212, 255, 0.1)'
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export const ServicesShowcase = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Smooth scroll animation
  useEffect(() => {
    const targetX = -currentIndex * 420; // 400px width + 20px gap
    animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8
    });
  }, [currentIndex, x]);

  const handleCardClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <motion.div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.3em] bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/40 backdrop-blur-md">
              <Sparkles size={16} />
              Our Services
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            EXPERIENCE THE <span className="text-[#00D4FF]">MONSOON</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in our world of premium entertainment, exquisite dining, and electric nightlife
          </p>
        </motion.div>

        {/* Auto-scrolling Cards Container */}
        <div className="relative">
          <div 
            ref={containerRef}
            className="flex gap-5 py-8"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}>
            
            <motion.div
              className="flex gap-5"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -(services.length - 1) * 420, right: 0 }}
              onDragEnd={(_, info) => {
                const offset = info.offset.x;
                const velocity = info.velocity.x;
                
                if (Math.abs(velocity) > 500) {
                  if (velocity > 0 && currentIndex > 0) {
                    setCurrentIndex(currentIndex - 1);
                  } else if (velocity < 0 && currentIndex < services.length - 1) {
                    setCurrentIndex(currentIndex + 1);
                  }
                } else if (Math.abs(offset) > 100) {
                  if (offset > 0 && currentIndex > 0) {
                    setCurrentIndex(currentIndex - 1);
                  } else if (offset < 0 && currentIndex < services.length - 1) {
                    setCurrentIndex(currentIndex + 1);
                  }
                }
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}>
              
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isActive={index === currentIndex}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#00D4FF] shadow-lg shadow-[#00D4FF]/50 scale-125'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <motion.div 
            className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-sm text-white"
            animate={{ opacity: isAutoPlaying ? 1 : 0.5 }}>
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
            <span className="text-xs">{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ServicesShowcase.displayName = 'ServicesShowcase';