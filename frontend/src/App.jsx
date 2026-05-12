import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Import pages directly (no lazy loading for now to debug)
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

// Simple loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#0A0A0A]">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-[#00D4FF] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-white text-sm animate-pulse">Loading...</p>
    </div>
  </div>
);

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}