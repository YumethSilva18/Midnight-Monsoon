import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Calendar, Music } from 'lucide-react';
import { ServicesShowcase } from '../components/ServicesShowcase';

// Memoized components to prevent re-renders
const HeroSection = memo(() => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* High Quality Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/Homepage-mainbanner2.jpg"
        className="w-full h-full object-cover"
        alt="Nightlife Background"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />
      {/* Quality Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0A]" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />
    </div>
    
    {/* Ambient Glow Effects */}
    <div className="absolute inset-0 opacity-20 pointer-events-none z-5">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF] rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
    </div>

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        
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
          <Link to="/gallery" className="px-6 py-2 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all">
            View Gallery
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
));

HeroSection.displayName = 'HeroSection';

// Memoized vibe feature component
const VibeFeature = memo(({ icon: Icon, title, description, color }) => (
  <div className="flex items-start space-x-4">
    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${color} shrink-0`}>
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-xl font-bold mb-1">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
));

VibeFeature.displayName = 'VibeFeature';

export function Home() {
  // Memoize static data to prevent recreation on re-renders
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ willChange: 'opacity, transform' }}
      className="w-full relative">
      
      {/* High Quality Base Background */}
      <div className="fixed inset-0 -z-10 bg-[#0A0A0A]">
        {/* Subtle Texture Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />
      </div>
      
      {/* Hero Section - Loads once, never re-animates */}
      <HeroSection />

      {/* Services Showcase - Infinite Scroll */}
      <ServicesShowcase />

      {/* Nearby Events - Partnership Promo Banner */}
      <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
        {/* High Quality Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        
        {/* Quality Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />
        
        {/* Ambient Glow Effects */}
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
            className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm">
            
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/Homepage-mainbanner2.jpg"
                alt="After Midnight Monsoon"
                loading="lazy"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" 
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }}
              />
            </div>

            <div className="relative z-10 p-12 md:p-16 text-center">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="bg-[#00D4FF] text-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                  Nearby Events
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                After <span className="text-[#00D4FF]">Midnight Monsoon</span>?
              </h2>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
                Walk to <span className="text-white font-bold">'The Sky Lounge'</span>
              </p>

              {/* Offer */}
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-[#00D4FF]/30 rounded-full px-8 py-4 mb-8">
                <Star className="text-[#00D4FF]" size={24} />
                <span className="text-2xl font-bold text-[#00D4FF]">10% OFF</span>
                <span className="text-gray-400">with our stamp</span>
              </div>

              {/* Additional Info */}
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                Extend your night out with our exclusive partnership. Show your Midnight Monsoon stamp at The Sky Lounge and enjoy special discounts.
              </p>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-[#00D4FF] rounded-full blur-[100px] opacity-20" />
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-white rounded-full blur-[100px] opacity-20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vibe Section */}
      <section className="relative py-24 bg-[#0F0F0F] overflow-hidden">
        {/* High Quality Background Layers */}
        <div className="absolute inset-0">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />
          
          {/* Quality Pattern Overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
          
          {/* Diagonal Lines Pattern */}
          <div className="absolute inset-0 opacity-3" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px)'
          }} />
        </div>
        
        {/* Ambient Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF] rounded-full blur-[150px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[150px] opacity-10" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF] rounded-full blur-[200px] opacity-5" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}>
              
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
              className="relative">
              
              <div className="aspect-square rounded-3xl overflow-hidden neon-border-blue">
                <img 
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80" 
                  className="w-full h-full object-cover" 
                  alt="DJ Vibe"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-8 max-w-[200px]">
                <p className="text-4xl font-black text-[#00D4FF] mb-1">95%</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">Capacity Tonight</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
