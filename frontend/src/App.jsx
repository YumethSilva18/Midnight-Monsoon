import { lazy, Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, ScrollRestoration } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy load pages for code splitting with better error boundaries
const Home = lazy(() => 
  import('./pages/Home').then(module => ({ default: module.Home }))
    .catch(() => ({ default: () => <div>Error loading Home page</div> }))
);
const Menu = lazy(() => 
  import('./pages/Menu').then(module => ({ default: module.Menu }))
    .catch(() => ({ default: () => <div>Error loading Menu page</div> }))
);
const Gallery = lazy(() => 
  import('./pages/Gallery').then(module => ({ default: module.Gallery }))
    .catch(() => ({ default: () => <div>Error loading Gallery page</div> }))
);
const Contact = lazy(() => 
  import('./pages/Contact').then(module => ({ default: module.Contact }))
    .catch(() => ({ default: () => <div>Error loading Contact page</div> }))
);

// Enhanced loading fallback component
const PageLoader = memo(() => (
  <div className="flex items-center justify-center min-h-screen bg-[#0A0A0A]">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-[#00D4FF] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-white text-sm animate-pulse">Loading amazing content...</p>
    </div>
  </div>
));

PageLoader.displayName = 'PageLoader';

// Memoized routes component with AnimatePresence
const AnimatedRoutes = memo(() => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
});

AnimatedRoutes.displayName = 'AnimatedRoutes';

export function App() {
  return (
    <Router>
      <ScrollRestoration />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
