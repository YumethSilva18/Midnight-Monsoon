import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ArrowLeft } from 'lucide-react';

// Gallery Categories Data
const galleryCategories = [
  {
    id: 'drinks',
    title: 'DRINKS',
    subtitle: 'Liquid Artistry',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-amber-500/20 to-orange-600/20',
    accentColor: '#FFC857',
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
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560508020-c6b8f3a39dac?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509669803555-fd5d83d6d7ca?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'foods',
    title: 'FOODS',
    subtitle: 'Culinary Excellence',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-red-500/20 to-pink-600/20',
    accentColor: '#FF007F',
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
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'entertainment',
    title: 'ENTERTAINMENT',
    subtitle: 'Electric Nights',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-purple-500/20 to-pink-600/20',
    accentColor: '#A855F7',
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
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571266028243-d220c6e2e8e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'lounge',
    title: 'LOUNGE & EXPERIENCE',
    subtitle: 'Elevated Comfort',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-cyan-500/20 to-blue-600/20',
    accentColor: '#00D4FF',
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
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'events',
    title: 'EVENTS & SOCIAL',
    subtitle: 'Unforgettable Moments',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-rose-500/20 to-red-600/20',
    accentColor: '#FF1744',
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
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'premium',
    title: 'PREMIUM SERVICES',
    subtitle: 'VIP Treatment',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-yellow-500/20 to-amber-600/20',
    accentColor: '#FFD700',
    items: [
      'Table Reservations',
      'Valet Parking',
      'Mixology Experience',
      'Personalized Bottle Packages',
      'Premium Guest Service',
      'Security & Private Access'
    ],
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'atmosphere',
    title: 'ATMOSPHERE & AMBIENCE',
    subtitle: 'Midnight Monsoon Vibes',
    image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-indigo-500/20 to-purple-600/20',
    accentColor: '#6366F1',
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

// Memoized Category Section Component with Left Text + Right Image Layout
const CategorySection = memo(({ category, onClick, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 ${
      index % 2 === 0 ? '' : 'lg:grid-flow-dense'
    }`}>
    
    {/* Text Content - Left Side */}
    <div className={`${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
      <motion.div
        initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}>
        
        {/* Category Badge */}
        <div className="inline-block mb-4">
          <span 
            className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/40">
            {category.subtitle}
          </span>
        </div>
        
        {/* Category Title */}
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          {category.title}
        </h2>
        
        {/* Items List */}
        <ul className="space-y-2 mb-6">
          {category.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[#00D4FF]" />
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
    
    {/* Image - Right Side */}
    <div className={`${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
      <motion.div
        initial={{ x: index % 2 === 0 ? 30 : -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        onClick={onClick}
        className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer">
        
        {/* Featured Image */}
        <img
          src={category.image}
          alt={category.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#00D4FF]/10" />
        
        {/* Explore Button - Always Visible on Image */}
        <div className="absolute bottom-8 left-8 right-8">
          <button
            className="w-full group/btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 bg-[#00D4FF]/20 text-[#00D4FF] border-2 border-[#00D4FF]/60 hover:bg-[#00D4FF] hover:text-black backdrop-blur-md">
            <span>Explore Gallery</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
          </button>
        </div>
      </motion.div>
    </div>
  </motion.div>
));

CategorySection.displayName = 'CategorySection';

// Memoized Gallery Modal Component with Back Button
const GalleryModal = memo(({ category, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm overflow-y-auto">
      
      <div className="min-h-screen py-20 px-6">
        {/* Back Button */}
        <button
          onClick={onClose}
          className="fixed top-8 left-8 z-[110] flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 group">
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-semibold">Back to Gallery</span>
        </button>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-8 right-8 z-[110] text-white hover:text-[#FF007F] transition-colors p-3 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20">
          <X size={28} />
        </button>
        
        <div className="container mx-auto max-w-7xl pt-20">
          {/* Header */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
              {category.title}
            </h2>
            <p 
              className="text-xl uppercase tracking-widest font-semibold"
              style={{ color: category.accentColor }}>
              {category.subtitle}
            </p>
          </motion.div>
          
          {/* Items List */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">What We Offer</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-gray-300 text-sm">
                  <div 
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: category.accentColor }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Image Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                onClick={() => setSelectedImage(img)}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group">
                
                <img
                  src={img}
                  alt={`${category.title} ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${category.accentColor}30` }}>
                    <ChevronRight className="w-8 h-8" style={{ color: category.accentColor }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/98 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

GalleryModal.displayName = 'GalleryModal';

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ willChange: 'opacity, transform' }}
      className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/Gallerypage-banner.jpg"
          alt="Gallery Banner"
          loading="eager"
          fetchpriority="high"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0A0A0A]" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF] rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00D4FF] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
              MONSOON <span className="text-[#00D4FF]">GALLERY</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Experience the essence of <span className="text-[#00D4FF] font-semibold">Midnight Monsoon</span><br />
              <span className="text-gray-400 text-lg">Rain, Rhythm & Unforgettable Nights</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Categories - New Layout */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-7xl mx-auto divide-y divide-white/10">
          {galleryCategories.map((category, index) => (
            <CategorySection
              key={category.id}
              category={category}
              index={index}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>
      </section>

      {/* Category Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <GalleryModal
            category={selectedCategory}
            onClose={() => setSelectedCategory(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}