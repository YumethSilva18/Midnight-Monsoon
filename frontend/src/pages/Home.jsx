import React, { memo, useMemo, useCallback, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Calendar, 
  Music, 
  ChevronLeft, 
  ChevronRight, 
  Wine, 
  UtensilsCrossed, 
  Sofa, 
  PartyPopper, 
  Crown, 
  Sparkles,
  Plus,
  ArrowRight,
  Headphones,
  MapPin,
  Phone
} from 'lucide-react';
import { ServicesHorizontalLoop } from '../components/ServicesHorizontalLoop';

// Preload critical images
const preloadImage = (src) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

// Services data matching the HTML structure
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
      "Vintage Arrack",
      "Mocktails & Fresh Juices",
      "Bottle Service"
    ]
  },
  {
    id: 2,
    category: "FOODS", 
    title: "Culinary Excellence",
    icon: UtensilsCrossed,
    image: "/Gallery/Foods/kobby-mendez-idTwDKt2j2o-unsplash.jpg",
    items: [
      "Bites / Bar Snacks",
      "Gourmet Platters",
      "Fusion Tapas", 
      "Late Night Bites",
      "Artisan Platters"
    ]
  },
  {
    id: 3,
    category: "ENTERTAINMENT",
    title: "Electric Nights", 
    icon: Music,
    image: "/Gallery/Entertainment/aleksandr-popov-DPspiXW2zWg-unsplash.jpg",
    items: [
      "Live DJ Sets",
      "Jazz Nights",
      "Acoustic Solos",
      "Visual Shows"
    ]
  },
  {
    id: 4,
    category: "LOUNGE & EXPERIENCE",
    title: "Elevated Comfort",
    icon: Sofa, 
    image: "/Gallery/Lounge & Experience/stanislav-knopp-nawaKdBv75c-unsplash.jpg",
    items: [
      "Rooftop Views",
      "Private Booths", 
      "VIP Balcony",
      "Cigar Lounge"
    ]
  },
  {
    id: 5,
    category: "EVENTS & SOCIAL",
    title: "Unforgettable Moments",
    icon: PartyPopper,
    image: "/Gallery/Event & Social/matty-adame-nLUb9GThIcg-unsplash (1).jpg", 
    items: [
      "Launch Parties",
      "Mixology Classes",
      "Networking",
      "Seasonal Galas"
    ]
  },
  {
    id: 6,
    category: "PREMIUM SERVICES",
    title: "VIP Treatment",
    icon: Crown,
    image: "/Gallery/Premium Services/jordan-graff-9TBgvuPAe0Y-unsplash.jpg",
    items: [
      "Valet Parking",
      "Concierge",
      "Bottle Service", 
      "Pick-up/Drop"
    ]
  }
];

// Featured drinks data
const featuredDrinks = [
  {
    name: "Monsoon Blue Lagoon",
    description: "Electric curacao, premium vodka, and a splash of tropical monsoon mist.",
    price: "LKR 3,200",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsZEklLyIq8R8XXUQhLHmDK78qwfGweSUo5FjtpAq8uCHDivMg7UowxUzV0L1oO0dEs3VWLkxHBmEXWaDwgOXXJQt16R6U3pPfWJmoD-tqsaHjreVwDD0fCeKzFGkuGqJHtfh34cC37wSLwJyJpuH_vzse9X1HNxIcjIklfCMEWGvnhsRC4hH2xaF2C6l79xFSYHHQXjHvmHcX1ugqdYmaHxUXHWKBRnorx4CoDRVEsp6dLnShXaly-xqCxhF9dvs3JkPyqNXHMKBc",
    badge: "Signature"
  },
  {
    name: "Ceylon Storm Mojito", 
    description: "Dark rum, wild Ceylon berries, lime, and crushed ice storm.",
    price: "LKR 2,800",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLUzS18pVWno3w69K2RQ0JDlAOuvCGRjxR2e7JVg86Hm8MH4SnBGMNYWzaa9PNJiauJqySAGcOltiLo9XTuT6jcuU68ZBZXnDTYzxHNhEnV0SVeHsR_mHZzpJ5et-VJl1m59CSgcKUGB0wcJEHCyQMfpqcLhyO6sz-KpHsNbajFcR5GyFr0JSHRdkR6q9NH7xHDjpC0ttyfcIGQjAsDz1lg8OaiXLEQ8BFF52mcuyICuy4P4RwelD12JGnjaJ8EZdT_rny9cCMgNmy"
  },
  {
    name: "Midnight Arrack Fusion",
    description: "Smoked island arrack, ginger bitters, and honey-infused clouds.", 
    price: "LKR 3,500",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDplyFk3KYrGSYc-snhtWZeo8yGHPNWZqUfLsou-o_wWHP_ltHnyfQUr2nMK_CtRdNIxvEgDTM0uRGcq2JCO8UGJGVpwLo-HLCzbhQSBX8kAIBwa3KJFwrMKTthSmU5AGAeMOGQrYGmL_d3TJ1WLZKpqdLz0qWI4RpoS3hP0LkRkZwn2w5DwRH0eV7OYQKnj3Kb5d03gBc9WCAI2HvXvmK4xQzeEcptFWLFGyD6QMpcoI3NMHTAr7uVUjC-vpXuoXDNJ9_kj2kQqZt1"
  }
];

// Memoized Hero Section with main banner
const HeroSection = memo(() => {
  // Preload hero image on component mount
  React.useEffect(() => {
    preloadImage('/Homepage-mainbanner2.jpg');
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Main Banner Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Homepage-mainbanner2.jpg"
          className="w-full h-full object-cover"
          alt="Midnight Monsoon Main Banner"
          loading="eager"
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141218] via-[#141218]/40 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight text-white">
            Midnight Monsoon Bar
            <div className="h-1 w-48 mx-auto bg-[#cfbcff] mt-2 rounded-full shadow-[0_4px_15px_-2px_rgba(207,188,255,0.8)]" />
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Where the rain meets the night – Sri Lanka's boldest after-dark experience.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              to="/menu"
              className="border border-[#cfbcff]/50 backdrop-blur-md text-[#cfbcff] px-12 py-4 rounded-xl font-bold hover:bg-[#cfbcff]/10 transition-all scale-105 active:scale-95">
              View Menu
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronRight className="text-[#cfbcff] text-4xl rotate-90" />
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// Auto-scrolling service card component
const ServiceCard = memo(({ service, isActive, onClick }) => {
  const IconComponent = service.icon;
  
  return (
    <motion.div
      className={`aspect-video rounded-3xl overflow-hidden relative group snap-center flex-shrink-0 cursor-pointer transition-all duration-700 min-w-[550px] md:min-w-[800px] ${
        isActive ? 'scale-105 shadow-2xl' : 'scale-95 opacity-70'
      }`}
      onClick={onClick}
      whileHover={{ scale: isActive ? 1.08 : 1.02 }}
      style={{
        boxShadow: isActive ? '0 25px 50px rgba(207, 188, 255, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}>
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#cfbcff]/20 via-transparent to-[#e7c365]/20" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        <motion.h3 
          className="text-3xl font-black mb-4 leading-tight text-[#cfbcff]"
          animate={{ 
            scale: isActive ? 1.05 : 1,
            color: isActive ? '#cfbcff' : '#E5E5E5'
          }}>
          {service.category}
        </motion.h3>

        {/* Items List */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300"
          animate={{ opacity: isActive ? 1 : 0.8 }}>
          {service.items.slice(0, 4).map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2 text-sm"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: isActive ? 1 : 0.6 }}
              transition={{ delay: idx * 0.1 }}>
              <div className="w-1 h-1 rounded-full bg-[#e7c365]" />
              <span>{item}</span>
            </motion.div>
          ))}
          {service.items.length > 4 && (
            <motion.div 
              className="text-xs text-[#cfbcff] font-semibold mt-2"
              animate={{ opacity: isActive ? 1 : 0.5 }}>
              +{service.items.length - 4} more services
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

// Services Showcase Section
const ServicesShowcase = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleCardClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#141218]">
      <div className="px-6 md:px-16 max-w-[1440px] mx-auto mb-16 flex justify-between items-end">
        <div>
          <span className="text-[#e7c365] text-xs font-semibold uppercase tracking-widest">Our Essence</span>
          <h2 className="text-5xl md:text-6xl font-black mt-2 text-white" style={{ textShadow: '0 0 10px rgba(207, 188, 255, 0.5)' }}>
            Midnight Experiences
          </h2>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handlePrevious}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#cfbcff]/20 transition-all text-[#cfbcff]">
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#cfbcff]/20 transition-all text-[#cfbcff]">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-16 no-scrollbar snap-x">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            isActive={index === currentIndex}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </section>
  );
});

ServicesShowcase.displayName = 'ServicesShowcase';

// Memoized Drink Card Component
const DrinkCard = memo(({ drink, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 group hover:border-[#cfbcff]/50 transition-all duration-500">
    
    <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
      <img 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        src={drink.image}
        alt={drink.name}
        loading="lazy"
      />
      {drink.badge && (
        <div className="absolute top-4 right-4 bg-[#cfbcff]/20 backdrop-blur-md px-4 py-1 rounded-full text-[#cfbcff] text-xs font-semibold border border-[#cfbcff]/30">
          {drink.badge}
        </div>
      )}
    </div>
    
    <h3 className="text-2xl font-bold mb-2 text-[#cfbcff]">{drink.name}</h3>
    <p className="text-gray-300 leading-relaxed mb-4">{drink.description}</p>
    
    <div className="flex justify-between items-center">
      <span className="text-[#e7c365] font-bold text-2xl">{drink.price}</span>
      <button className="bg-[#cfbcff]/10 text-[#cfbcff] p-2 rounded-full hover:bg-[#cfbcff] hover:text-black transition-all">
        <Plus size={20} />
      </button>
    </div>
  </motion.div>
));

DrinkCard.displayName = 'DrinkCard';

// Tonight's Vibe Section
const TonightsVibeSection = memo(() => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-[#cfbcff]/5 -z-10" />
    <div className="px-6 md:px-16 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#cfbcff]/20 blur-[100px] rounded-full" />
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-white">Tonight's Vibe</h2>
        
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl border-l-4 border-l-[#e7c365]">
            <div className="flex gap-4 items-start">
              <Headphones className="text-[#e7c365] text-2xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-white">Deep Monsoon Beats</h4>
                <p className="text-gray-300">Live DJ Set by DJ Auralis • 9:00 PM onwards</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-red-500 text-xs font-semibold uppercase">Live Now</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl border-l-4 border-l-[#cfbcff]/30">
            <div className="flex gap-4 items-start">
              <Star className="text-[#cfbcff] text-2xl flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-white">VIP Rain Room</h4>
                <p className="text-gray-300">Private lounge access with panoramic rain views.</p>
                <p className="text-[#cfbcff] text-sm mt-1">Available for Booking</p>
              </div>
            </div>
          </div>
        </div>
        
        <button className="mt-12 bg-[#cfbcff] text-black px-12 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(207,188,255,0.4)] transition-all">
          Reserve Your Table
          <ArrowRight size={20} />
        </button>
      </div>
      
      <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <img 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBonGKCYt7EVWbJ-M_sm1hsp0rw5_QvmRhjexVFAARBP7-7X9qc9WMIm8VXcNoKGnqQDI0vukcYHa0Wk48i0tM_5vumT8bvQJ9RYUzFi1tkC_WvUcUY4fe6i5THuX9emOvAZKsEYrXR5HA7IMs_tK4n1-y8_JuMr_xUVMXoXbT4QOyNNNVecSutclYZ_qKZf94kIRD3VyWza-Y7J98cxCSwE7NHOhifhpQ1aLK44T61_-V-YHqqWx_nCG7jV2ngBHMKFwwoLgpEBE55"
          alt="DJ performing in nightclub"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141218] via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl">
          <p className="text-[#e7c365] text-xs mb-1">CURRENTLY PLAYING</p>
          <p className="text-white font-bold">Midnight Echoes (Live Edit)</p>
        </div>
      </div>
    </div>
  </section>
));

TonightsVibeSection.displayName = 'TonightsVibeSection';

export function Home() {
  // Preload critical images
  React.useEffect(() => {
    preloadImage('/Homepage-mainbanner2.jpg');
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#141218]">
      
      {/* Hero Section with Main Banner */}
      <HeroSection />

      {/* Services Horizontal Loop - New Component */}
      <ServicesHorizontalLoop />

      {/* Services Showcase - Auto-scrolling Section */}
      <ServicesShowcase />

      {/* Featured Drinks Section */}
      <section className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto overflow-hidden">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[#e7c365] text-xs font-semibold uppercase tracking-widest">Liquid Artistry</span>
            <h2 className="text-5xl md:text-6xl font-black mt-2 text-white">Featured Drinks</h2>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#cfbcff]/20 transition-colors">
              <ChevronLeft className="text-[#cfbcff]" size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#cfbcff]/20 transition-colors">
              <ChevronRight className="text-[#cfbcff]" size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredDrinks.map((drink, index) => (
            <DrinkCard key={drink.name} drink={drink} index={index} />
          ))}
        </div>
      </section>

      {/* Tonight's Vibe Section */}
      <TonightsVibeSection />

      {/* Footer */}
      <footer className="w-full py-24 bg-[#0f0d13]/40 backdrop-blur-md border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16 max-w-[1440px] mx-auto text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-[#e7c365] mb-4">Midnight Monsoon</h2>
            <p className="text-gray-300">Colombo's sanctuary for the midnight dreamers and the monsoon seekers.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Connect</h4>
            <a className="text-gray-300 text-xs hover:text-[#cfbcff] transition-colors" href="#">Instagram</a>
            <a className="text-gray-300 text-xs hover:text-[#cfbcff] transition-colors" href="#">TikTok</a>
            <a className="text-gray-300 text-xs hover:text-[#cfbcff] transition-colors" href="#">Facebook</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Experience</h4>
            <a className="text-gray-300 text-xs hover:text-[#cfbcff] transition-colors" href="#">Location</a>
            <a className="text-gray-300 text-xs hover:text-[#cfbcff] transition-colors" href="#">Careers</a>
            <p className="mt-4 text-gray-300 opacity-100 hover:opacity-80 transition-all cursor-default">
              © 2024 Midnight Monsoon Bar. Crafted for the Global Elite.
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}