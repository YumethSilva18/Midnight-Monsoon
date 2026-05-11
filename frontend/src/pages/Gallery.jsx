import React, { memo, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, Sparkles } from 'lucide-react';
import LazyImage from '../components/LazyImage';
import SkeletonLoader from '../components/SkeletonLoader';

// Gallery Categories Data
const galleryCategories = [
  {
    id: 'drinks',
    title: 'DRINKS',
    subtitle: 'Liquid Artistry',
    image: '/Gallery/Drinks/Drinks-main.jpg',
    gradient: 'from-amber-500/20 via-orange-500/20 to-amber-600/20',
    accentColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    items: [
      'Bites / Bar Snacks',
      'Gourmet Platters',
      'Signature Cocktails',
      'Craft Beers',
      'Premium Spirits',
      'Fine Wines',
      'Happy Hour Specials',
      'Mocktails & Fresh Juices',
      'Bottle Service'
    ],
    images: [
      '/Gallery/Drinks/drinks01.jpg',
      '/Gallery/Drinks/drinks02.jpg',
      '/Gallery/Drinks/drinks03.jpg',
      '/Gallery/Drinks/drinks04.jpg',
      '/Gallery/Drinks/drinks05.jpg',
      '/Gallery/Drinks/drinks06.jpg',
      '/Gallery/Drinks/drinks07.jpg'
    ]
  },
  {
    id: 'foods',
    title: 'FOODS',
    subtitle: 'Culinary Excellence',
    image: '/Gallery/Foods/kobby-mendez-idTwDKt2j2o-unsplash.jpg',
    gradient: 'from-rose-500/20 via-pink-500/20 to-red-600/20',
    accentColor: '#F43F5E',
    glowColor: 'rgba(244, 63, 94, 0.4)',
    items: [
      'Late-Night Dining',
      'Bites / Bar Snacks',
      'Gourmet Burgers',
      'Fusion Cuisine',
      'Seafood Platters',
      'Sharing Boards',
      'Desserts',
      'Chef Specials',
      'Premium Dining Experience'
    ],
    images: [
      '/Gallery/Foods/birgith-roosipuu-qE2RzCozwJI-unsplash.jpg',
      '/Gallery/Foods/jarukit-nantaprapin-_59RTihF4bI-unsplash.jpg',
      '/Gallery/Foods/jay-jjIuYrisJ2c-unsplash.jpg',
      '/Gallery/Foods/proper-quality-shandis-Ls_ifted7I8-unsplash.jpg',
      '/Gallery/Foods/semih-koca-yyc0QXznfGk-unsplash.jpg',
      '/Gallery/Foods/solo-seafood-sC5NuyjiBjU-unsplash.jpg',
      '/Gallery/Foods/kobby-mendez-idTwDKt2j2o-unsplash.jpg'
    ]
  },
  {
    id: 'entertainment',
    title: 'ENTERTAINMENT',
    subtitle: 'Electric Nights',
    image: '/Gallery/Entertainment/aleksandr-popov-DPspiXW2zWg-unsplash.jpg',
    gradient: 'from-purple-500/20 via-violet-500/20 to-fuchsia-600/20',
    accentColor: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    items: [
      'Live DJ & Music',
      'Dance Floor',
      'Live Band Performances',
      'Karaoke Nights',
      'Theme Parties',
      'Sports Screenings',
      'Open Mic Nights',
      'Acoustic Sessions'
    ],
    images: [
      '/Gallery/Entertainment/aleksandr-popov-3XXkojDxK_g-unsplash.jpg',
      '/Gallery/Entertainment/gabriel-gurrola-2UuhMZEChdc-unsplash.jpg',
      '/Gallery/Entertainment/himanshu-choudhary-lzBcmD1VKms-unsplash.jpg',
      '/Gallery/Entertainment/howen-v-Osi1kUPAQ-unsplash.jpg',
      '/Gallery/Entertainment/krys-amon-ttv1pX6tk7o-unsplash.jpg',
      '/Gallery/Entertainment/nereid-ndreu-h3bZqJlAMOs-unsplash.jpg',
      '/Gallery/Entertainment/aleksandr-popov-DPspiXW2zWg-unsplash.jpg'
    ]
  },
  {
    id: 'lounge',
    title: 'LOUNGE & EXPERIENCE',
    subtitle: 'Elevated Comfort',
    image: '/Gallery/Lounge & Experience/stanislav-knopp-nawaKdBv75c-unsplash.jpg',
    gradient: 'from-cyan-500/20 via-sky-500/20 to-blue-600/20',
    accentColor: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    items: [
      'Hookah Lounge / Shisha',
      'VIP Booths',
      'Private Lounge Seating',
      'Rooftop Bar',
      'Outdoor Terrace',
      'Cigar Lounge',
      'Luxury Dining Experience',
      'Poolside Bar'
    ],
    images: [
      '/Gallery/Lounge & Experience/considerate-agency-f5hCYk1PdA0-unsplash.jpg',
      '/Gallery/Lounge & Experience/logistic-hookah-mgs-R44dp9s-unsplash.jpg',
      '/Gallery/Lounge & Experience/sasha-make-stories-studio-qzt0DKKG8Pc-unsplash.jpg',
      '/Gallery/Lounge & Experience/tai-bui-2voBM3XMt6w-unsplash.jpg',
      '/Gallery/Lounge & Experience/tanja-tepavac-jSH-7IjJVsQ-unsplash.jpg',
      '/Gallery/Lounge & Experience/stanislav-knopp-nawaKdBv75c-unsplash.jpg'
    ]
  },
  {
    id: 'events',
    title: 'EVENTS & SOCIAL',
    subtitle: 'Unforgettable Moments',
    image: '/Gallery/Event & Social/matty-adame-nLUb9GThIcg-unsplash (1).jpg',
    gradient: 'from-red-500/20 via-rose-500/20 to-pink-600/20',
    accentColor: '#EF4444',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    items: [
      'Birthday Celebrations',
      'Corporate Events',
      "Ladies' Night",
      'Bachelor / Bachelorette Parties',
      'Exclusive Member Nights',
      'Event Hosting',
      'Private Parties',
      'Seasonal Festivals'
    ],
    images: [
      '/Gallery/Event & Social/ibuki-tsubo-kNxQv2d2pGI-unsplash.jpg',
      '/Gallery/Event & Social/laszlo-barta-TuVMcxuFeYU-unsplash.jpg',
      '/Gallery/Event & Social/nereid-ndreu-h3bZqJlAMOs-unsplash.jpg',
      '/Gallery/Event & Social/ourwhisky-foundation-SdTKkcdz9mY-unsplash.jpg',
      '/Gallery/Event & Social/roman-oB5Ct0dixk8-unsplash.jpg',
      '/Gallery/Event & Social/sujan-khalifa-FTidJBLW1AY-unsplash.jpg',
      '/Gallery/Event & Social/matty-adame-nLUb9GThIcg-unsplash (1).jpg'
    ]
  },
  {
    id: 'premium',
    title: 'PREMIUM SERVICES',
    subtitle: 'VIP Treatment',
    image: '/Gallery/Premium Services/jordan-graff-9TBgvuPAe0Y-unsplash.jpg',
    gradient: 'from-yellow-500/20 via-amber-500/20 to-orange-600/20',
    accentColor: '#EAB308',
    glowColor: 'rgba(234, 179, 8, 0.4)',
    items: [
      'Table Reservations',
      'Valet Parking',
      'Mixology Experience',
      'Personalized Bottle Packages',
      'Premium Guest Service',
      'Security & Private Access'
    ],
    images: [
      '/Gallery/Premium Services/adrien-vajas-WZ5DN04_XZ4-unsplash.jpg',
      '/Gallery/Premium Services/arya-foto-SqRtvlCcN9s-unsplash.jpg',
      '/Gallery/Premium Services/foto-dial-LEHNmIJ467k-unsplash.jpg',
      '/Gallery/Premium Services/jordan-graff-9TBgvuPAe0Y-unsplash.jpg'
    ]
  },
  {
    id: 'atmosphere',
    title: 'ATMOSPHERE & AMBIENCE',
    subtitle: 'Midnight Monsoon Vibes',
    image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-indigo-500/20 via-blue-500/20 to-purple-600/20',
    accentColor: '#6366F1',
    glowColor: 'rgba(99, 102, 241, 0.4)',
    items: [
      'Neon Nightlife',
      'Chill Vibes',
      'Elegant Dining',
      'Sunset Sessions',
      'After-Hours Clubbing',
      'Rainy Night Lounge',
      'Urban Luxury Experience'
    ],
    images: [
      'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

// Memoized Category Card Component with Performance Optimizations
const CategoryCard = memo(({ category, onClick, index }) => {
  const handleClick = useCallback(() => {
    onClick(category);
  }, [category, onClick]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative">
      
      <div 
        onClick={handleClick}
        className="relative h-[500px] rounded-3xl overflow-hidden cursor-pointer bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
        style={{ willChange: 'transform' }}>
        
        {/* Background Image with Lazy Loading */}
        <div className="absolute inset-0">
          <LazyImage
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            width="100%"
            height="500px"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="mb-4">
            <span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md border"
              style={{ 
                backgroundColor: `${category.accentColor}20`,
                color: category.accentColor,
                borderColor: `${category.accentColor}40`
              }}>
              <Sparkles size={14} />
              {category.subtitle}
            </span>
          </motion.div>
          
          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            {category.title}
          </motion.h2>
          
          {/* Explore Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 backdrop-blur-md border-2 w-fit"
            style={{
              backgroundColor: `${category.accentColor}15`,
              color: category.accentColor,
              borderColor: `${category.accentColor}60`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = category.accentColor;
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.borderColor = category.accentColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `${category.accentColor}15`;
              e.currentTarget.style.color = category.accentColor;
              e.currentTarget.style.borderColor = `${category.accentColor}60`;
            }}>
            <span>Explore Collection</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
          </motion.button>
        </div>
        
        {/* Glow Effect on Hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${category.glowColor}, transparent 70%)`
          }}
        />
      </div>
    </motion.div>
  );
});

CategoryCard.displayName = 'CategoryCard';

// Optimized Gallery Image Component
const GalleryImage = memo(({ img, index, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.6 + index * 0.1 }}
      className="break-inside-avoid relative rounded-2xl overflow-hidden group border border-white/10 hover:border-white/20 transition-all duration-500"
      style={{
        boxShadow: `0 10px 40px ${category.glowColor}`,
        willChange: 'transform'
      }}>
      
      <LazyImage
        src={img}
        alt={`${category.title} ${index + 1}`}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Subtle Overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
          background: `linear-gradient(135deg, ${category.accentColor}20, transparent 60%)` 
        }}
      />
    </motion.div>
  );
});

GalleryImage.displayName = 'GalleryImage';

// Memoized Gallery Modal Component with Performance Optimizations
const GalleryModal = memo(({ category, onClose }) => {
  const [visibleImages, setVisibleImages] = useState(6);
  
  // Scroll to top when modal opens
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Load more images on scroll
  const loadMoreImages = useCallback(() => {
    if (visibleImages < category.images.length) {
      setVisibleImages(prev => Math.min(prev + 6, category.images.length));
    }
  }, [visibleImages, category.images.length]);

  // Throttled scroll handler
  React.useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.offsetHeight;
        
        if (scrollTop + windowHeight >= docHeight - 1000) {
          loadMoreImages();
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [loadMoreImages]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const displayedImages = useMemo(() => 
    category.images.slice(0, visibleImages), 
    [category.images, visibleImages]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#0A0A0A] overflow-y-auto">
      
      <div className="min-h-screen py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-16">
            
            {/* Logo */}
            <h1 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              MIDNIGHT <span style={{ color: category.accentColor }}>MONSOON</span>
            </h1>
            
            {/* Back Button */}
            <button
              onClick={handleClose}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-semibold text-sm uppercase tracking-wider">Back to Gallery</span>
            </button>
          </motion.div>
          
          {/* Category Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16">
            <motion.div className="inline-block mb-6">
              <span 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md border"
                style={{ 
                  backgroundColor: `${category.accentColor}20`,
                  color: category.accentColor,
                  borderColor: `${category.accentColor}40`
                }}>
                <Sparkles size={16} />
                {category.subtitle}
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {category.title}
            </h2>
          </motion.div>
          
          {/* Items List - Professional Grid */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-20 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-white/10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Selection
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                    className="flex items-center gap-4 text-gray-200 text-base py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                    style={{ fontFamily: "'Inter', sans-serif" }}>
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"
                      style={{ backgroundColor: category.accentColor }}
                    />
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Image Gallery - Optimized Masonry Layout */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Gallery
            </h3>
            
            {/* Masonry Grid - Images maintain aspect ratio */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {displayedImages.map((img, idx) => (
                <GalleryImage
                  key={idx}
                  img={img}
                  index={idx}
                  category={category}
                />
              ))}
            </div>

            {/* Load More Indicator */}
            {visibleImages < category.images.length && (
              <div className="text-center mt-12">
                <SkeletonLoader height="60px" width="200px" className="mx-auto" />
                <p className="text-gray-400 mt-4">Loading more images...</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
});

GalleryModal.displayName = 'GalleryModal';

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedCategory(null);
  }, []);

  // Preload critical images
  React.useEffect(() => {
    const preloadImages = ['/Gallerypage-banner.jpg'];
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ willChange: 'opacity, transform' }}
      className="min-h-screen bg-[#0A0A0A]">
      
      {/* Hero Section - Professional Typography */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <LazyImage
          src="/Gallerypage-banner.jpg"
          alt="Gallery Banner"
          className="absolute inset-0 w-full h-full object-cover"
          width="100%"
          height="80vh"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-[#0A0A0A]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.3em] bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/40 backdrop-blur-md">
                <Sparkles size={16} />
                Explore Our World
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
              MONSOON <span className="text-[#00D4FF]">GALLERY</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Experience the essence of <span className="text-[#00D4FF] font-semibold">Midnight Monsoon</span>
              <br />
              <span className="text-gray-400 text-lg">Where Every Moment Becomes a Memory</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid - Professional Cards */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryCategories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </section>

      {/* Category Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <GalleryModal
            category={selectedCategory}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}