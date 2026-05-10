
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }];


  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter">
          <span className="text-white">MIDNIGHT</span>
          <span className="text-[#00D4FF] neon-text-blue ml-2">MONSOON</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) =>
          <Link
            key={link.path}
            to={link.path}
            className="relative text-sm font-medium tracking-widest uppercase hover:text-[#00D4FF] transition-colors">
            
              {link.name}
              {location.pathname === link.path &&
            <motion.div
              layoutId="underline"
              className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]" />

            }
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen &&
        <>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]" />
          
            <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-[#111111] z-[70] p-10 flex flex-col">
            
              <button className="self-end mb-12 text-[#FF007F]" onClick={() => setIsOpen(false)}>
                <X size={32} />
              </button>
              <div className="flex flex-col space-y-8">
                {navLinks.map((link) =>
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold tracking-widest uppercase hover:text-[#00D4FF]">
                
                    {link.name}
                  </Link>
              )}
              </div>
              <div className="mt-auto pt-10 border-t border-white/10">
                <p className="text-gray-500 text-sm">42 Galle Road, Colombo 03</p>
                <p className="text-[#00D4FF] mt-2">+94 77 123 4567</p>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </nav>);

}