import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Team from './pages/Team';
import Support from './pages/Support';
import CaseStudies from './pages/CaseStudies';
import Events from './pages/Events';
import Order from './pages/Order';
import Terms from './pages/Terms';

// Context
import { ContactProvider } from './context/ContactContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <HelmetProvider>
      <ContactProvider>
        <CartProvider>
          <Router>
            <div className="App min-h-screen bg-gray-50">
              <Navbar />
              
              <AnimatePresence mode="wait">
                <Routes>
                  <Route 
                    path="/" 
                    element={
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Home />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/about" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <About />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/services" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Services />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/portfolio" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Portfolio />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/portfolio/:id" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProjectDetail />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/blog" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Blog />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/blog/:slug" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Blog />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/contact" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Contact />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/careers" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Careers />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/faq" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FAQ />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/privacy" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Privacy />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/team" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Team />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/support" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Support />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/case-studies" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CaseStudies />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/events" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Events />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/order" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Order />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="/terms" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Terms />
                      </motion.div>
                    } 
                  />
                  <Route 
                    path="*" 
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <NotFound />
                      </motion.div>
                    } 
                  />
                </Routes>
              </AnimatePresence>
              
              <Footer />
              <ScrollToTop />
            </div>
          </Router>
        </CartProvider>
      </ContactProvider>
    </HelmetProvider>
  );
}

export default App;