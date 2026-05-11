import React, { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wine, Beer, Flame, Package, Coffee, Utensils, Droplets, Sparkles, Clock, MapPin, Phone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import LazyImage from '../components/LazyImage';

// Clean Menu Data - Names and Prices Only
const menuData = {
  cocktails: {
    id: 'cocktails',
    name: 'Signature Cocktails',
    subtitle: 'Monsoon Series',
    icon: Wine,
    color: '#00D4FF',
    items: [
      { name: "Monsoon Mule", desc: "vodka, lime, ginger beer, mint", price: "1,800" },
      { name: "Rainforest Negroni", desc: "gin, campari, sweet vermouth, cinnamon", price: "2,200" },
      { name: "Thunderbolt Sour", desc: "whisky, lemon, honey, angostura", price: "2,000" },
      { name: "Cyclone Spritz", desc: "aperol, prosecco, soda, orange", price: "1,900" },
      { name: "Flooded Mai Tai", desc: "rum, orange curaçao, lime, orgeat", price: "2,100" },
      { name: "Wet Martini", desc: "vodka/gin, dry vermouth, olive", price: "2,300" },
      { name: "Stormy Passion", desc: "passion fruit puree, vodka, chili", price: "1,850" },
      { name: "Drizzle Daiquiri", desc: "rum, lime, sugar, frozen berries", price: "1,750" }
    ]
  },
  beers: {
    id: 'beers',
    name: 'Beers & Ciders',
    subtitle: 'Local & International',
    icon: Beer,
    color: '#FFC857',
    items: [
      { name: "Lion Lager", desc: "local", price: "650" },
      { name: "Lion Stout", desc: "", price: "750" },
      { name: "Carlsberg", desc: "", price: "700" },
      { name: "Heineken", desc: "", price: "800" },
      { name: "Corona Extra", desc: "", price: "850" },
      { name: "Somersby Apple Cider", desc: "", price: "950" },
      { name: "Budweiser", desc: "", price: "800" },
      { name: "Guinness Draught", desc: "can", price: "1,100" }
    ]
  },
  spirits: {
    id: 'spirits',
    name: 'Premium Spirits',
    subtitle: 'By Peg (30ml)',
    icon: Sparkles,
    color: '#FF007F',
    items: [
      { name: "Johnnie Walker Black Label", desc: "", price: "1,200" },
      { name: "Jack Daniel's Old No.7", desc: "", price: "1,350" },
      { name: "Jameson Irish Whiskey", desc: "", price: "1,250" },
      { name: "Absolut Vodka", desc: "original", price: "1,000" },
      { name: "Grey Goose Vodka", desc: "", price: "1,600" },
      { name: "Bombay Sapphire Gin", desc: "", price: "1,200" },
      { name: "Bacardi Carta Blanca Rum", desc: "", price: "900" },
      { name: "Old Monk Rum", desc: "", price: "800" },
      { name: "Jose Cuervo Tequila", desc: "silver", price: "1,300" }
    ]
  },
  bottles: {
    id: 'bottles',
    name: 'Bottle Packages',
    subtitle: 'Includes Mixers & Ice',
    icon: Package,
    color: '#A855F7',
    items: [
      { name: "Monsoon Starter", desc: "1 x Jameson / 1 x Absolut + 4 soft drinks", price: "8,500" },
      { name: "Storm Chaser", desc: "1 x Johnnie Walker Black + 6 sodas + nachos", price: "12,000" },
      { name: "VIP Rainmaker", desc: "1 x Grey Goose / 1 x Bombay Sapphire + 8 mixers + fries platter", price: "18,000" },
      { name: "Midnight Feast", desc: "1 x Jack Daniel's + 1 x Bacardi + 10 mixers + cheese platter", price: "24,000" },
      { name: "Hurricane Party", desc: "2 x spirits of choice + 12 mixers + 2 platters (4 pax)", price: "32,000" }
    ]
  },
  shots: {
    id: 'shots',
    name: 'Shots & Shooters',
    subtitle: 'Quick & Bold',
    icon: Flame,
    color: '#FF1744',
    items: [
      { name: "Jägerbomb", desc: "Jägermeister + Red Bull", price: "1,100" },
      { name: "Kamikaze", desc: "vodka, triple sec, lime", price: "800" },
      { name: "B-52", desc: "coffee liqueur, baileys, grand marnier", price: "900" },
      { name: "Wet Pussy", desc: "vodka, peach schnapps, cranberry", price: "850" },
      { name: "Lemon Drop", desc: "vodka, lemon, sugar rim", price: "800" },
      { name: "Tequila Slammer", desc: "tequila + sprite", price: "900" },
      { name: "Flaming Lamborghini", desc: "layered", price: "1,200" }
    ]
  },
  wines: {
    id: 'wines',
    name: 'Fine Wines',
    subtitle: 'By Glass / Bottle',
    icon: Wine,
    color: '#9C27B0',
    items: [
      { name: "Chardonnay", desc: "South Africa", price: "1,000", bottlePrice: "4,500" },
      { name: "Sauvignon Blanc", desc: "New Zealand", price: "1,200", bottlePrice: "5,200" },
      { name: "Shiraz", desc: "Australia", price: "1,300", bottlePrice: "5,800" },
      { name: "Merlot", desc: "Chile", price: "1,100", bottlePrice: "4,900" },
      { name: "Rosé", desc: "France", price: "1,250", bottlePrice: "5,500" },
      { name: "Prosecco", desc: "Italy (sparkling)", price: "1,500", bottlePrice: "6,500" }
    ]
  },
  food: {
    id: 'food',
    name: 'Gourmet Bites',
    subtitle: 'Bar Snacks & Platters',
    icon: Utensils,
    color: '#FF6F00',
    items: [
      { name: "Spicy Devilled Chicken", desc: "", price: "1,200" },
      { name: "Cheese & Charcuterie Board", desc: "", price: "2,500" },
      { name: "Classic Nachos", desc: "cheese, jalapeños, salsa", price: "1,400" },
      { name: "Sri Lankan Lamprais Bite", desc: "mini", price: "900" },
      { name: "French Fries", desc: "peri peri / plain", price: "600" },
      { name: "Garlic Bread with Cheese", desc: "", price: "750" },
      { name: "Chicken Wings", desc: "6 pcs – BBQ / hot", price: "1,300" },
      { name: "Spring Rolls", desc: "veg / chicken – 4 pcs", price: "700" },
      { name: "Onion Rings", desc: "with aioli", price: "800" },
      { name: "Gourmet Sliders", desc: "beef/chicken – 2 pcs", price: "1,500" }
    ]
  },
  mocktails: {
    id: 'mocktails',
    name: 'Mocktails & Juices',
    subtitle: 'Non-Alcoholic',
    icon: Droplets,
    color: '#00BFA5',
    items: [
      { name: "Virgin Monsoon", desc: "mango, lime, soda", price: "750" },
      { name: "Rainforest Cooler", desc: "passion, mint, lemon", price: "700" },
      { name: "No-jito", desc: "lime, mint, brown sugar, soda", price: "650" },
      { name: "Fresh Orange / Lime Juice", desc: "", price: "400" },
      { name: "Watermelon & Basil Smash", desc: "", price: "700" },
      { name: "Berry Lemonade", desc: "", price: "650" }
    ]
  },
  hot: {
    id: 'hot',
    name: 'Hot Drinks & Others',
    subtitle: 'Coffee & Tea',
    icon: Coffee,
    color: '#795548',
    items: [
      { name: "Espresso", desc: "", price: "400" },
      { name: "Cappuccino", desc: "", price: "550" },
      { name: "Latte", desc: "", price: "550" },
      { name: "Hot Chocolate", desc: "", price: "500" },
      { name: "Ceylon Tea", desc: "black / ginger", price: "300" },
      { name: "Red Bull", desc: "can", price: "600" }
    ]
  }
};

// Clean Menu Item Component - Name and Price Only with Performance Optimization
const MenuItem = memo(({ item, index, categoryColor }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px'
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="border-b border-white/10 py-5 last:border-0 group hover:bg-white/5 transition-all duration-300 px-4 rounded-lg">
      
      <div className="flex justify-between items-start gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#FFC857] transition-colors duration-300">
            {item.name}
          </h3>
          {item.desc && (
            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
          )}
        </div>
        
        <div className="text-right flex-shrink-0">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-gray-500 uppercase">LKR</span>
            <span 
              className="text-2xl font-black transition-colors duration-300"
              style={{ color: categoryColor }}>
              {item.price}
            </span>
          </div>
          {item.bottlePrice && (
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xs text-gray-500">Bottle:</span>
              <span className="text-base font-bold text-gray-400">{item.bottlePrice}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
});

MenuItem.displayName = 'MenuItem';

// Category Navigation Item
const CategoryNavItem = memo(({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
        isActive
          ? 'text-black shadow-lg'
          : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
      }`}
      style={isActive ? {
        backgroundColor: category.color,
        boxShadow: `0 8px 32px ${category.color}40`
      } : {}}>
      {category.name}
    </button>
  );
});

CategoryNavItem.displayName = 'CategoryNavItem';

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('cocktails');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const currentCategory = menuData[activeCategory];

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
        {/* Background Image with Lazy Loading */}
        <div className="absolute inset-0">
          <LazyImage
            src="/Menupage-banner.jpg"
            alt="Menu Banner"
            className="w-full h-full object-cover"
            width="100%"
            height="70vh"
          />
        </div>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0A0A0A]" />
        
        {/* Ambient Glow Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF] rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFC857] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
              OUR <span className="text-[#FFC857]">MENU</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Handcrafted cocktails, premium spirits, and bold flavors<br />
              <span className="text-[#00D4FF]">for the wild at heart</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Happy Hour Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative py-6 bg-gradient-to-r from-[#00D4FF]/20 via-[#00D4FF]/10 to-[#00D4FF]/20 border-y border-[#00D4FF]/20 z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <Clock className="text-[#00D4FF]" size={24} />
              <span className="text-white font-bold text-lg">Happy Hours: 5PM – 8PM</span>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <span className="text-[#00D4FF] font-bold text-lg">Buy 2 Cocktails, Get 1 Free</span>
          </div>
        </div>
      </motion.div>

      {/* Sticky Category Navigation */}
      <div 
        className={`sticky top-20 z-50 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${
          showNav ? 'translate-y-0' : '-translate-y-full'
        }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex overflow-x-auto gap-3 scrollbar-hide">
            {Object.values(menuData).map((category) => (
              <CategoryNavItem
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-6 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto">
            
            {/* Category Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6">
                <div 
                  className="px-6 py-2 rounded-full backdrop-blur-md border"
                  style={{
                    backgroundColor: `${currentCategory.color}20`,
                    borderColor: `${currentCategory.color}40`
                  }}>
                  <span 
                    className="text-sm font-bold uppercase tracking-widest"
                    style={{ color: currentCategory.color }}>
                    {currentCategory.subtitle}
                  </span>
                </div>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                {currentCategory.name}
              </h2>
              
              {/* Divider */}
              <div className="flex items-center justify-center gap-4">
                <div 
                  className="h-1 w-24 rounded-full"
                  style={{ backgroundColor: currentCategory.color }}
                />
                <div className="w-2 h-2 rounded-full bg-white/50" />
                <div 
                  className="h-1 w-24 rounded-full"
                  style={{ backgroundColor: currentCategory.color }}
                />
              </div>
            </div>

            {/* Menu Items List */}
            <div className="bg-gradient-to-b from-white/5 to-transparent rounded-3xl p-6 md:p-10 backdrop-blur-sm border border-white/10">
              {currentCategory.items.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  index={index}
                  categoryColor={currentCategory.color}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Info Section */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Opening Hours */}
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <Clock className="text-[#00D4FF] mx-auto mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-2">Opening Hours</h4>
              <p className="text-gray-400 text-sm">Mon - Thu: 5PM - 12AM</p>
              <p className="text-gray-400 text-sm">Fri - Sat: 5PM - 2AM</p>
              <p className="text-gray-400 text-sm">Sunday: 6PM - 12AM</p>
            </div>
            
            {/* Location */}
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <MapPin className="text-[#FFC857] mx-auto mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-2">Location</h4>
              <p className="text-gray-400 text-sm">123 Galle Road</p>
              <p className="text-gray-400 text-sm">Colombo 03</p>
              <p className="text-gray-400 text-sm">Sri Lanka</p>
            </div>
            
            {/* Contact */}
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <Phone className="text-[#FF007F] mx-auto mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-2">Reservations</h4>
              <p className="text-gray-400 text-sm">+94 11 234 5678</p>
              <p className="text-gray-400 text-sm">info@midnightmonsoon.lk</p>
              <p className="text-[#00D4FF] text-sm mt-2 font-semibold">Smart Casual Dress Code</p>
            </div>
          </div>
          
          {/* Final Note */}
          <div className="bg-gradient-to-r from-[#FFC857]/10 via-[#FF007F]/10 to-[#00D4FF]/10 rounded-2xl p-8 border border-white/10 text-center">
            <p className="text-gray-300 text-base mb-2">
              All prices are in Sri Lankan Rupees (LKR) and inclusive of service charges.
            </p>
            <p className="text-gray-500 text-sm">
              Menu items and prices are subject to change. Please ask our staff for daily specials and happy hour offers.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
