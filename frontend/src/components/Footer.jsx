
import React from 'react';
import { Instagram, Facebook, Twitter, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const socialIcons = [
  { Icon: Instagram, href: '#' },
  { Icon: Facebook, href: '#' },
  { Icon: Music2, href: '#' }, // TikTok proxy
  { Icon: Twitter, href: '#' }];


  return (
    <footer className="bg-[#111111] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6">
              MIDNIGHT <span className="text-[#00D4FF]">MONSOON</span>
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Sri Lanka's premier after-dark destination. Experience the rhythm of the rain and the pulse of the night.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Visit Us</h4>
            <p className="text-gray-300">42 Galle Road, Colombo 03</p>
            <p className="text-gray-300">Sri Lanka</p>
            <p className="text-[#FFC857] mt-4">Open Daily: 5 PM - 2 AM</p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Follow the Vibe</h4>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href }, i) =>
              <motion.a
                key={i}
                href={href}
                whileHover={{ scale: 1.2, color: '#00D4FF' }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 transition-colors">
                
                  <Icon size={20} />
                </motion.a>
              )}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center text-gray-600 text-xs">
          <p>© 2024 Midnight Monsoon Bar. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>);

}