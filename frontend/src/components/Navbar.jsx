
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Throttle function for scroll events
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

export const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Throttled scroll handler to prevent performance issues
  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      setScrolled(currentScrollY > 50);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    }, 16), // ~60fps
    [lastScrollY]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const openMenu = useCallback(() => setIsOpen(true), []);

  return (
    <>
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0)'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md py-4 border-b border-white/10' : 'py-6'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tighter z-50 relative"
            onClick={closeMenu}
          >
            <span className="text-white">MIDNIGHT</span>
            <span className="text-[#00D4FF] neon-text-blue ml-2">MONSOON</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-sm font-medium tracking-widest uppercase text-white hover:text-[#00D4FF] transition-colors duration-300"
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Always visible */}
          <button 
            className="md:hidden text-white z-50 relative p-2 hover:text-[#00D4FF] transition-colors"
            onClick={openMenu}
            aria-label="Open mobile menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] md:hidden"
            />
            
            {/* Mobile Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 200,
                mass: 1
              }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-[#111111] z-[70] p-8 flex flex-col shadow-2xl md:hidden"
            >
              {/* Close Button */}
              <button 
                className="self-end mb-12 text-[#FF007F] p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={closeMenu}
                aria-label="Close mobile menu"
              >
                <X size={32} />
              </button>
              
              {/* Navigation Links */}
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`text-2xl font-bold tracking-widest uppercase transition-colors duration-300 block py-2 ${
                        location.pathname === link.path 
                          ? 'text-[#00D4FF]' 
                          : 'text-white hover:text-[#00D4FF]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Contact Info */}
              <motion.div 
                className="mt-auto pt-10 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-gray-500 text-sm">42 Galle Road, Colombo 03</p>
                <p className="text-[#00D4FF] mt-2 font-semibold">+94 77 123 4567</p>
                <p className="text-gray-400 text-xs mt-2">Open Daily 6PM - 2AM</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

Navbar.displayName = 'Navbar';