
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, Users } from 'lucide-react';

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ willChange: 'opacity, transform' }}
      className="pt-32 pb-24 min-h-screen">
      
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16">
          <h1 className="text-6xl font-black mb-6">
            VISIT <span className="text-[#00D4FF]">US</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the perfect blend of luxury, entertainment, and unforgettable moments at Midnight Monsoon
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: About & Contact Info */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8">
            
            {/* About Section */}
            <div className="glass-card p-10">
              <h2 className="text-3xl font-bold mb-6 text-[#00D4FF]">About Midnight Monsoon</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Midnight Monsoon is Colombo's premier destination for those seeking an extraordinary nightlife experience. 
                Nestled in the heart of the city, we offer a sophisticated atmosphere where luxury meets entertainment.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our venue features world-class mixology, curated entertainment, and an ambiance designed to create 
                unforgettable memories. Whether you're celebrating a special occasion or enjoying a night out with friends, 
                Midnight Monsoon delivers an unparalleled experience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From our signature cocktails crafted by expert mixologists to our carefully selected music and entertainment, 
                every detail is designed to exceed your expectations. Join us for electric nights filled with energy, 
                elegance, and excitement.
              </p>
            </div>

            {/* Contact Information */}
            <div className="glass-card p-10 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                  <MapPin size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Our Location</h4>
                  <p className="text-gray-300 leading-relaxed">
                    42 Galle Road, Colombo 03<br />
                    Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                  <Phone size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Phone</h4>
                  <p className="text-gray-300">+94 77 123 4567</p>
                  <p className="text-gray-400 text-sm mt-1">Available during business hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                  <Mail size={26} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Email</h4>
                  <p className="text-gray-300">hello@midnightmonsoon.lk</p>
                  <p className="text-gray-400 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Reservations Info */}
            <div className="glass-card p-10 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Reservations</h3>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                  <Calendar size={26} />
                </div>
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
              </div>
            </div>

            {/* Operating Hours */}
            <div className="glass-card p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                  <Clock size={26} />
                </div>
                <h3 className="text-2xl font-bold">Operating Hours</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300 font-medium">Monday - Thursday</span>
                  <span className="text-[#00D4FF] font-bold">6:00 PM - 2:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300 font-medium">Friday - Saturday</span>
                  <span className="text-[#00D4FF] font-bold">6:00 PM - 4:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300 font-medium">Sunday</span>
                  <span className="text-[#00D4FF] font-bold">7:00 PM - 1:00 AM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Map & Additional Info */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8">
            
            {/* Map */}
            <div className="rounded-3xl overflow-hidden h-full min-h-[600px] neon-border-blue">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798511757672!2d79.8485!3d6.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259410ef5d6d9%3A0x1d3065101f3d76ff!2sGalle%20Rd%2C%20Colombo!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                title="Midnight Monsoon Location">
              </iframe>
            </div>

            {/* Reservations Info */}
            <div className="glass-card p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                  <Calendar size={26} />
                </div>
                <h3 className="text-2xl font-bold">Reservations</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                For table reservations and private event bookings, please call us directly at 
                <span className="text-[#00D4FF] font-bold"> +94 77 123 4567</span> or email us at 
                <span className="text-[#00D4FF] font-bold"> hello@midnightmonsoon.lk</span>
              </p>
              <p className="text-gray-400 text-sm">
                We recommend booking in advance, especially for weekends and special events.
              </p>
            </div>

            {/* Private Events */}
            <div className="glass-card p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                  <Users size={26} />
                </div>
                <h3 className="text-2xl font-bold">Private Events</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Host your special occasions at Midnight Monsoon. We offer exclusive venue hire for:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#00D4FF] rounded-full mr-3"></span>
                  Corporate Events & Celebrations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#00D4FF] rounded-full mr-3"></span>
                  Birthday Parties & Anniversaries
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#00D4FF] rounded-full mr-3"></span>
                  Private Gatherings & VIP Experiences
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-4">
                Contact us to discuss your event requirements and custom packages.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}