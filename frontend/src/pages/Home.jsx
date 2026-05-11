import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Calendar, Music } from 'lucide-react';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#0A0A0A]">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Homepage-mainbanner2.jpg"
            className="w-full h-full object-cover"
            alt="Midnight Monsoon Nightlife Background"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0A]" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-8 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              MIDNIGHT <span className="text-[#00D4FF]">MONSOON</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}>
              Where the night comes alive with <span className="text-[#00D4FF] font-semibold">electric energy</span>, 
              <br />premium drinks, and <span className="text-[#FFC857] font-semibold">unforgettable moments</span>
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}>
              
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
            </motion.div>
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

      {/* Featured Services Section */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            
            <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              EXPERIENCE THE <span className="text-[#00D4FF]">MONSOON</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Immerse yourself in our world of premium entertainment, exquisite dining, and electric nightlife
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Drinks */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 text-center group hover:bg-white/10 transition-all duration-300">
              
              <div className="w-16 h-16 bg-[#F59E0B]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star className="text-[#F59E0B]" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[#F59E0B]">Premium Drinks</h3>
              <p className="text-gray-300 leading-relaxed">
                Signature cocktails, craft beers, and premium spirits crafted by expert mixologists
              </p>
            </motion.div>

            {/* Entertainment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 text-center group hover:bg-white/10 transition-all duration-300">
              
              <div className="w-16 h-16 bg-[#A855F7]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Music className="text-[#A855F7]" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[#A855F7]">Live Entertainment</h3>
              <p className="text-gray-300 leading-relaxed">
                Electric nights with live DJs, music performances, and an energetic dance floor
              </p>
            </motion.div>

            {/* VIP Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 text-center group hover:bg-white/10 transition-all duration-300">
              
              <div className="w-16 h-16 bg-[#00D4FF]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="text-[#00D4FF]" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[#00D4FF]">VIP Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Exclusive VIP booths, bottle service, and personalized attention for unforgettable nights
              </p>
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
            
            <h2 className="text-4xl md:text-6xl font-black mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
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