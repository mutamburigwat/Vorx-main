import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import ServicesHub from './pages/ServicesHub';
import ServicePage from './pages/ServicePage';
import GraphicDesign from './pages/GraphicDesign';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Quote from './pages/Quote';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, search, hash]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="flex-grow"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow overflow-x-clip">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
