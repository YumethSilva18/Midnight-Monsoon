
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Form */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}>
            
            <h1 className="text-5xl font-black mb-6">GET IN <span className="text-[#00D4FF]">TOUCH</span></h1>
            <p className="text-gray-400 mb-10">Planning a big night? Reserve your spot or ask us anything about our events and menu.</p>

            {submitted ?
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card p-12 text-center border-[#00D4FF]">
              
                <CheckCircle className="mx-auto text-[#00D4FF] mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you faster than a monsoon rain.</p>
              </motion.div> :

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#00D4FF] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#00D4FF] transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#00D4FF] transition-all appearance-none">
                    <option className="bg-[#111]">Table Reservation</option>
                    <option className="bg-[#111]">Private Event</option>
                    <option className="bg-[#111]">General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Your Message</label>
                  <textarea required rows="5" placeholder="Tell us about your plans..." className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#00D4FF] transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center py-5">
                  Send Message <Send className="ml-2" size={18} />
                </button>
              </form>
            }
          </motion.div>

          {/* Right: Info & Map */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-12">
            
            <div className="glass-card p-10 space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Our Location</h4>
                  <p className="text-gray-400">42 Galle Road, Colombo 03, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-[#FF007F]/10 flex items-center justify-center text-[#FF007F] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Call Us</h4>
                  <p className="text-gray-400">+94 77 123 4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-[#FFC857]/10 flex items-center justify-center text-[#FFC857] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email Us</h4>
                  <p className="text-gray-400">hello@midnightmonsoon.lk</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-80 neon-border-blue">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798511757672!2d79.8485!3d6.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259410ef5d6d9%3A0x1d3065101f3d76ff!2sGalle%20Rd%2C%20Colombo!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy">
              </iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>);

}