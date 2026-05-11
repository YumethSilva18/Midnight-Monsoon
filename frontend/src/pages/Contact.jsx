
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Lazy Map Component
const LazyMapFrame = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '100px'
  });

  return (
    <div ref={ref} className="w-full h-full">
      {inView ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798511757672!2d79.8485!3d6.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259410ef5d6d9%3A0x1d3065101f3d76ff!2sGalle%20Rd%2C%20Colombo!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
          allowFullScreen=""
          loading="lazy"
          title="Midnight Monsoon Location">
        </iframe>
      ) : (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00D4FF] mx-auto mb-4"></div>
            <p className="text-gray-400">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export function Contact() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const popUpVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const slideInRight = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const dropDownVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const iconHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow: "0 20px 40px rgba(0, 212, 255, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ willChange: 'opacity, transform' }}
      className="pt-32 pb-24 min-h-screen">
      
      <div className="container mx-auto px-6">
        {/* Header Section with Drop Down Animation */}
        <motion.div
          variants={dropDownVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16">
          <motion.h1 
            className="text-6xl font-black mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 150,
              damping: 15,
              delay: 0.1
            }}>
            VISIT <motion.span 
              className="text-[#00D4FF]"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(0, 212, 255, 0.5)",
                  "0 0 40px rgba(0, 212, 255, 0.8)",
                  "0 0 20px rgba(0, 212, 255, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}>
              US
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}>
            Experience the perfect blend of luxury, entertainment, and unforgettable moments at Midnight Monsoon
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column with Stagger Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8">
            
            {/* About Section with Slide In */}
            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              className="glass-card p-10">
              <motion.h2 
                className="text-3xl font-bold mb-6 text-[#00D4FF]"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}>
                About Midnight Monsoon
              </motion.h2>
              <motion.p 
                className="text-gray-300 leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}>
                Midnight Monsoon is Colombo's premier destination for those seeking an extraordinary nightlife experience. 
                Nestled in the heart of the city, we offer a sophisticated atmosphere where luxury meets entertainment.
              </motion.p>
              <motion.p 
                className="text-gray-300 leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}>
                Our venue features world-class mixology, curated entertainment, and an ambiance designed to create 
                unforgettable memories. Whether you're celebrating a special occasion or enjoying a night out with friends, 
                Midnight Monsoon delivers an unparalleled experience.
              </motion.p>
              <motion.p 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}>
                From our signature cocktails crafted by expert mixologists to our carefully selected music and entertainment, 
                every detail is designed to exceed your expectations. Join us for electric nights filled with energy, 
                elegance, and excitement.
              </motion.p>
            </motion.div>

            {/* Contact Information with Pop Up */}
            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              className="glass-card p-10 space-y-6">
              <motion.h3 
                className="text-2xl font-bold mb-6"
                variants={popUpVariants}>
                Contact Information
              </motion.h3>
              
              <motion.div 
                className="flex items-start space-x-6"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: 10 }}>
                <motion.div 
                  className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0"
                  variants={iconHoverVariants}
                  whileHover="hover">
                  <MapPin size={26} />
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Our Location</h4>
                  <p className="text-gray-300 leading-relaxed">
                    42 Galle Road, Colombo 03<br />
                    Sri Lanka
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-6"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: 10 }}>
                <motion.div 
                  className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0"
                  variants={iconHoverVariants}
                  whileHover="hover">
                  <Phone size={26} />
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Phone</h4>
                  <p className="text-gray-300">+94 77 123 4567</p>
                  <p className="text-gray-400 text-sm mt-1">Available during business hours</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-6"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 10 }}>
                <motion.div 
                  className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0"
                  variants={iconHoverVariants}
                  whileHover="hover">
                  <Mail size={26} />
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Email</h4>
                  <p className="text-gray-300">hello@midnightmonsoon.lk</p>
                  <p className="text-gray-400 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Reservations with Scale Animation */}
            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              className="glass-card p-10 space-y-6">
              <motion.h3 
                className="text-2xl font-bold mb-6"
                variants={popUpVariants}>
                Reservations
              </motion.h3>
              
              <motion.div 
                className="flex items-start space-x-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}>
                <motion.div 
                  className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0"
                  variants={iconHoverVariants}
                  whileHover="hover">
                  <Calendar size={26} />
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Book Your Table</h4>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    For table reservations and private event bookings, please call us directly at 
                    <span className="text-[#00D4FF] font-bold"> +94 77 123 4567</span> or email us at 
                    <span className="text-[#00D4FF] font-bold"> hello@midnightmonsoon.lk</span>
                  </p>
                  <p className="text-gray-400 text-sm">
                    We recommend booking in advance, especially for weekends and special events.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Operating Hours with Stagger */}
            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              className="glass-card p-10">
              <div className="flex items-center space-x-4 mb-6">
                <motion.div 
                  className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0"
                  variants={iconHoverVariants}
                  whileHover="hover">
                  <Clock size={26} />
                </motion.div>
                <h3 className="text-2xl font-bold">Operating Hours</h3>
              </div>
              
              <motion.div 
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <motion.div 
                  className="flex justify-between items-center py-3 border-b border-white/10"
                  variants={itemVariants}
                  whileHover={{ x: 5, backgroundColor: "rgba(0, 212, 255, 0.05)" }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <span className="text-gray-300 font-medium">Monday - Thursday</span>
                  <span className="text-[#00D4FF] font-bold">6:00 PM - 2:00 AM</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center py-3 border-b border-white/10"
                  variants={itemVariants}
                  whileHover={{ x: 5, backgroundColor: "rgba(0, 212, 255, 0.05)" }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <span className="text-gray-300 font-medium">Friday - Saturday</span>
                  <span className="text-[#00D4FF] font-bold">6:00 PM - 4:00 AM</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center py-3"
                  variants={itemVariants}
                  whileHover={{ x: 5, backgroundColor: "rgba(0, 212, 255, 0.05)" }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <span className="text-gray-300 font-medium">Sunday</span>
                  <span className="text-[#00D4FF] font-bold">7:00 PM - 1:00 AM</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column with Slide In */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8">
            
            {/* Map with Pop Up Animation and Lazy Loading */}
            <motion.div 
              className="rounded-3xl overflow-hidden h-[440px] neon-border-blue"
              initial={{ scale: 0.9, opacity: 0, rotateX: 10 }}
              whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 212, 255, 0.3)"
              }}>
              <LazyMapFrame />
            </motion.div>

            {/* Reservations Info with Slide In */}
            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              className="glass-card p-10">
              <div className="flex items-center space-x-4 mb-6">
                <motion.div 
                  className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0"
                  variants={iconHoverVariants}
                  whileHover="hover">
                  <Calendar size={26} />
                </motion.div>
                <h3 className="text-2xl font-bold">Reservations</h3>
              </div>
              <motion.p 
                className="text-gray-300 leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}>
                For table reservations and private event bookings, please call us directly at 
                <span className="text-[#00D4FF] font-bold"> +94 77 123 4567</span> or email us at 
                <span className="text-[#00D4FF] font-bold"> hello@midnightmonsoon.lk</span>
              </motion.p>
              <motion.p 
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}>
                We recommend booking in advance, especially for weekends and special events.
              </motion.p>
            </motion.div>

            {/* Private Events with Drop Down */}
            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              className="glass-card p-10">
              <div className="flex items-center space-x-4 mb-6">
                <motion.div 
                  className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0"
                  variants={iconHoverVariants}
                  whileHover="hover">
                  <Users size={26} />
                </motion.div>
                <h3 className="text-2xl font-bold">Private Events</h3>
              </div>
              <motion.p 
                className="text-gray-300 leading-relaxed mb-4"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}>
                Host your special occasions at Midnight Monsoon. We offer exclusive venue hire for:
              </motion.p>
              <motion.ul 
                className="space-y-2 text-gray-300"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <motion.li 
                  className="flex items-center"
                  variants={itemVariants}
                  whileHover={{ x: 10, color: "#00D4FF" }}>
                  <motion.span 
                    className="w-2 h-2 bg-[#00D4FF] rounded-full mr-3"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}></motion.span>
                  Corporate Events & Celebrations
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  variants={itemVariants}
                  whileHover={{ x: 10, color: "#00D4FF" }}>
                  <motion.span 
                    className="w-2 h-2 bg-[#00D4FF] rounded-full mr-3"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}></motion.span>
                  Birthday Parties & Anniversaries
                </motion.li>
                <motion.li 
                  className="flex items-center"
                  variants={itemVariants}
                  whileHover={{ x: 10, color: "#00D4FF" }}>
                  <motion.span 
                    className="w-2 h-2 bg-[#00D4FF] rounded-full mr-3"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}></motion.span>
                  Private Gatherings & VIP Experiences
                </motion.li>
              </motion.ul>
              <motion.p 
                className="text-gray-400 text-sm mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}>
                Contact us to discuss your event requirements and custom packages.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
