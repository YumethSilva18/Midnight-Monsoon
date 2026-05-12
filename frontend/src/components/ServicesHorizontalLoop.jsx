import React, { useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Services data with high-resolution images and content
const servicesData = [
  {
    id: 1,
    mainTopic: "Food & Drinks",
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80",
    neonColor: "#cfbcff",
    glowColor: "rgba(207, 188, 255, 0.4)",
    subPoints: [
      "Bites / Bar Snacks",
      "Gourmet Platters", 
      "Signature Cocktails",
      "Craft Beers",
      "Premium Spirits",
      "Fine Wines",
      "Happy Hour Specials",
      "Late-Night Dining",
      "Mocktails & Fresh Juices",
      "Bottle Service"
    ]
  },
  {
    id: 2,
    mainTopic: "Entertainment",
    image: "https://images.unsplash.com/photo-1571948624357-37b6ef6a3a7e?auto=format&fit=crop&w=800&q=80",
    neonColor: "#e7c365",
    glowColor: "rgba(231, 195, 101, 0.4)",
    subPoints: [
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
    id: 3,
    mainTopic: "Lounge & Experience",
    image: "https://images.unsplash.com/photo-1560440039-5fa6f7c2a021?auto=format&fit=crop&w=800&q=80",
    neonColor: "#cfbcff",
    glowColor: "rgba(207, 188, 255, 0.4)",
    subPoints: [
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
    id: 4,
    mainTopic: "Events & Social",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    neonColor: "#e7c365",
    glowColor: "rgba(231, 195, 101, 0.4)",
    subPoints: [
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
    id: 5,
    mainTopic: "Premium Services",
    image: "https://images.unsplash.com/photo-1565085822570-a0974a5bcb3d?auto=format&fit=crop&w=800&q=80",
    neonColor: "#cfbcff",
    glowColor: "rgba(207, 188, 255, 0.4)",
    subPoints: [
      "Table Reservations",
      "Valet Parking",
      "Mixology Experience",
      "Personalized Bottle Packages",
      "Premium Guest Service",
      "Security & Private Access"
    ]
  },
  {
    id: 6,
    mainTopic: "Atmosphere & Ambience",
    image: "https://images.unsplash.com/photo-1572060581000-8ef9ae5b82a9?auto=format&fit=crop&w=800&q=80",
    neonColor: "#e7c365",
    glowColor: "rgba(231, 195, 101, 0.4)",
    subPoints: [
      "Neon Nightlife",
      "Chill Vibes",
      "Elegant Dining",
      "Sunset Sessions",
      "After-Hours Clubbing",
      "Rainy Night Lounge",
      "Urban Luxury Experience"
    ]
  }
];

// Memoized Service Card Component
const ServiceCard = memo(({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        delay: index * 0.05,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="relative flex-shrink-0 w-80 h-96 md:w-80 md:h-96 sm:w-70 sm:h-90 rounded-2xl overflow-hidden cursor-pointer group snap-center"
      style={{
        scrollSnapAlign: 'center'
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.mainTopic}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        {/* Neon Glow Effect on Hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${service.glowColor}, transparent 70%)`
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col justify-between p-6 text-white z-10">
        {/* Main Topic Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.05 }}
          className="mb-4"
        >
          <h3 
            className="text-2xl md:text-3xl font-black leading-tight tracking-tight"
            style={{ 
              color: service.neonColor,
              textShadow: `0 0 10px ${service.glowColor}, 0 0 20px ${service.glowColor}`,
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            {service.mainTopic}
          </h3>
        </motion.div>

        {/* Sub-points Grid */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.05 }}
          className="flex-1 flex items-end"
        >
          <div className="w-full bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {service.subPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 + idx * 0.02 }}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <span 
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: service.neonColor }}
                  />
                  <span className="font-medium leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hover Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          border: `2px solid ${service.neonColor}`,
          boxShadow: `0 0 20px ${service.glowColor}, inset 0 0 20px ${service.glowColor}`
        }}
      />
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

// Main Services Horizontal Loop Component
export const ServicesHorizontalLoop = memo(() => {
  const scrollContainerRef = useRef(null);

  // Scroll functions for navigation buttons
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -340, // Card width + gap
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 340, // Card width + gap
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-16 md:py-24 bg-gradient-to-b from-[#141218] to-[#1a1825] overflow-hidden"
    >
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#cfbcff] rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e7c365] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.3em] bg-[#cfbcff]/20 text-[#cfbcff] border border-[#cfbcff]/40 backdrop-blur-md">
              Our Services
            </span>
          </motion.div>
          
          <h2 
            className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-white"
            style={{ 
              fontFamily: "'Poppins', sans-serif",
              textShadow: '0 0 20px rgba(207, 188, 255, 0.3)'
            }}
          >
            MIDNIGHT <span style={{ color: '#e7c365' }}>EXPERIENCES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover our premium offerings designed for the ultimate nightlife experience
          </p>
        </motion.div>

        {/* Horizontal Scrollable Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border-2 border-[#cfbcff]/40 text-[#cfbcff] flex items-center justify-center hover:bg-[#cfbcff]/20 hover:border-[#cfbcff] hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border-2 border-[#cfbcff]/40 text-[#cfbcff] flex items-center justify-center hover:bg-[#cfbcff]/20 hover:border-[#cfbcff] hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 px-2 scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-8 gap-2"
        >
          {servicesData.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/20 hover:bg-[#cfbcff]/60 transition-colors duration-300 cursor-pointer"
            />
          ))}
        </motion.div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.section>
  );
});

ServicesHorizontalLoop.displayName = 'ServicesHorizontalLoop';

export default ServicesHorizontalLoop;