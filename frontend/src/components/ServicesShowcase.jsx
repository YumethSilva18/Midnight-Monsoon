import React, { useState, memo, useRef } from 'react';
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
    image: "/Drinks-Liquid-Artistry.jpg",
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
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
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
    image: "/Entertainment-Electric-Nights.jpg",
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
    image: "/Elevated-comfort.jpg",
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
    image: "/Unforgettable-moments.jpg",
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
    image: "/Mixology.jpg",
    items: [
      "Table Reservations",
      "Valet Parking",
      "Mixology Experience",
      "Personalized Bottle Packages",
      "Premium Guest Service",
      "Security & Private Access",
      "Concierge Service",
      "VIP Entry"
    ]
  },
  {
    id: 7,
    category: "ATMOSPHERE & AMBIENCE",
    title: "Sensory Journey",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    items: [
      "Neon Nightlife",
      "Chill Vibes",
      "Elegant Dining",
      "Sunset Sessions",
      "After-Hours Clubbing",
      "Rainy Night Lounge",
      "Urban Luxury Experience",
      "Monsoon Atmosphere"
    ]
  }
];

export function ServicesShowcase() {
  const [isDragging, setIsDragging] = useState(false);
  const [pauseAnimation, setPauseAnimation] = useState(false);
  const containerRef = useRef(null);
  const dragStartX = useRef(0);
  const hasDragged = useRef(false);

  const handleDragStart = (event, info) => {
    setIsDragging(true);
    setPauseAnimation(true);
    dragStartX.current = info.point.x;
    hasDragged.current = false;
  };

  const handleDrag = (event, info) => {
    // Check if user has dragged more than 5px
    if (Math.abs(info.point.x - dragStartX.current) > 5) {
      hasDragged.current = true;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Resume animation after 2 seconds
    setTimeout(() => {
      setPauseAnimation(false);
    }, 2000);
  };

  const handleTouchStart = () => {
    setPauseAnimation(true);
    hasDragged.current = false;
  };

  const handleTouchMove = () => {
    hasDragged.current = true;
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setPauseAnimation(false);
    }, 2000);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A] overflow-hidden">
      {/* Quality Background Effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00D4FF] rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-white rounded-full blur-[150px]" />
      </div>
      
      {/* Solid Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00D4FF] to-white">Signature Experiences</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            From handcrafted cocktails to unforgettable nights.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative" ref={containerRef}>
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          <motion.div 
            className="flex gap-6 md:gap-8"
            drag="x"
            dragConstraints={{ left: -3000, right: 100 }}
            dragElastic={0.02}
            dragTransition={{ 
              power: 0.3,
              timeConstant: 200,
              modifyTarget: (target) => Math.round(target / 408) * 408
            }}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              animation: !pauseAnimation ? 'infiniteScroll 60s linear infinite' : 'none',
              willChange: 'transform'
            }}>
            
            {/* Render cards 3 times for seamless loop */}
            {[...Array(3)].map((_, setIndex) => (
              <React.Fragment key={`set-${setIndex}`}>
                {services.map((service) => (
                  <ServiceCard 
                    key={`${setIndex}-${service.id}`} 
                    service={service}
                    isDragging={isDragging}
                    hasDragged={hasDragged}
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Instruction */}
      <div className="text-center mt-12 relative z-10">
        <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">
          <span className="hidden md:inline">Drag to explore • </span>Swipe to browse all experiences
        </p>
      </div>

      {/* CSS Animation - Fixed for smooth loop */}
      <style jsx>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * (408px * 7)));
          }
        }
        
        @media (max-width: 768px) {
          @keyframes infiniteScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-1 * (344px * 7)));
            }
          }
        }
      `}</style>
    </section>
  );
}

// Memoized ServiceCard with reduced hover interaction
const ServiceCard = memo(({ service, isDragging, hasDragged }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!isDragging && !hasDragged.current) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative flex-shrink-0 w-[320px] md:w-[400px] h-[480px] md:h-[550px] rounded-2xl md:rounded-3xl overflow-hidden select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={!isDragging && !hasDragged.current ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ 
        willChange: 'transform',
        pointerEvents: isDragging ? 'none' : 'auto'
      }}>
      
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{ 
          scale: isHovered && !isDragging && !hasDragged.current ? 1.08 : 1 
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ willChange: 'transform' }}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

      {/* Card Content */}
      <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col">
        {/* Category Badge - Top Left Corner */}
        <div className="mb-auto">
          <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">
              {service.category}
            </span>
          </div>
        </div>

        {/* Title and Services List - Bottom */}
        <div className="mt-auto">
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 text-white leading-tight">
            {service.title}
          </h3>

          {/* Services List */}
          <motion.div 
            className="space-y-1.5 md:space-y-2 overflow-hidden"
            animate={{
              opacity: isHovered && !isDragging && !hasDragged.current ? 1 : 0.8
            }}
            transition={{ duration: 0.3 }}>
            {service.items.slice(0, isHovered && !isDragging && !hasDragged.current ? service.items.length : 4).map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#00D4FF] flex-shrink-0" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
            {(!isHovered || isDragging || hasDragged.current) && service.items.length > 4 && (
              <p className="text-[10px] md:text-xs text-[#00D4FF] font-semibold mt-2">
                +{service.items.length - 4} more experiences
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Subtle Border Glow on Hover */}
      <motion.div
        className="absolute inset-0 z-30 rounded-2xl md:rounded-3xl pointer-events-none"
        animate={{
          boxShadow: isHovered && !isDragging && !hasDragged.current
            ? '0 0 20px rgba(0, 212, 255, 0.4), inset 0 0 20px rgba(0, 212, 255, 0.05)'
            : '0 0 0px rgba(0, 212, 255, 0)',
        }}
        transition={{ duration: 0.4 }}
        style={{
          border: isHovered && !isDragging && !hasDragged.current ? '1px solid rgba(0, 212, 255, 0.3)' : '1px solid transparent'
        }}
      />

      {/* Subtle Shimmer Effect on Hover */}
      {isHovered && !isDragging && !hasDragged.current && (
        <motion.div
          className="absolute inset-0 z-25"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
          }}
        />
      )}
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';
