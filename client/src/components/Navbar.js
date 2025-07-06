import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaShoppingCart,
  FaMoon,
  FaSun
} from 'react-icons/fa';
import { useDarkMode } from '../context/DarkModeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useDarkMode();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsMoreOpen(false);
    setIsMobileMoreOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Cart state is now managed by context

  const cartCount = cart.length;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const moreItems = [
    { name: 'Support', path: '/support' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Events', path: '/events' },
    { name: 'Careers', path: '/careers' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Our Team', path: '/team' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
      isScrolled 
        ? 'bg-white/90 shadow-2xl border-b border-gray-200/60 dark:bg-gray-900/90 dark:border-gray-700' 
        : 'bg-transparent dark:bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 min-w-0">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 min-w-0 flex-shrink-0 group">
            <img src="/logo.png" alt="LaunchLayer Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            <span className="text-lg md:text-2xl font-extrabold text-gradient truncate tracking-tight group-hover:tracking-wider transition-all duration-200">
              <span style={{ fontFamily: 'Garamond, serif' }}>
                <span style={{ color: '#4477a6' }}>Launch</span><span style={{ color: '#4579a7' }}>Layer</span>
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 min-w-0">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link relative whitespace-nowrap min-w-0 px-2 py-1 rounded-lg transition-all duration-200 ${
                  isActive(item.path) ? 'nav-link-active bg-primary-50 text-primary-700 shadow-sm' : 'hover:bg-primary-100/60 hover:text-primary-700'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-primary-600 opacity-80"
                    layoutId="activeTab"
                  />
                )}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="nav-link flex items-center space-x-1 whitespace-nowrap min-w-0 px-2 py-1 rounded-lg hover:bg-primary-100/60 hover:text-primary-700 transition-all duration-200"
                aria-expanded={isMoreOpen}
                aria-haspopup="true"
              >
                <span>More</span>
                <FaChevronDown 
                  className={`w-3 h-3 transition-transform duration-200 flex-shrink-0 ${
                    isMoreOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 min-w-[200px] sm:min-w-[240px] bg-white/95 rounded-2xl shadow-2xl border border-gray-200 py-3 z-50 text-left flex flex-col gap-1 before:content-[''] before:absolute before:-top-2 before:left-8 before:w-4 before:h-4 before:bg-white before:rotate-45 before:shadow-md before:border-l before:border-t before:border-gray-200 before:z-[-1]"
                  >
                    {moreItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-5 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 hover:border-l-4 hover:border-primary-500 transition-all duration-200 text-base whitespace-nowrap rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cart Icon */}
            <Link
              to="/order"
              className="relative p-2 text-gray-700 hover:text-primary-600 hover:bg-primary-100/60 rounded-lg transition-colors duration-200 flex-shrink-0"
            >
              <FaShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 shadow-md animate-scale-in">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <FaMoon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-lg bg-white/70 shadow-md hover:bg-primary-100/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-primary-700" />
            ) : (
              <FaBars className="w-6 h-6 text-primary-700" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-white/95 shadow-2xl z-50 flex flex-col p-6 space-y-6"
          >
            <div className="flex items-center justify-between mb-4">
              <Link to="/" className="flex items-center space-x-2 min-w-0 flex-shrink-0" onClick={() => setIsOpen(false)}>
                <img src="/logo.png" alt="LaunchLayer Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                <span className="text-lg font-bold text-gradient truncate" style={{ fontFamily: 'Garamond, serif' }}>
                  <span style={{ color: '#4477a6' }}>Launch</span><span style={{ color: '#4579a7' }}>Layer</span>
                </span>
              </Link>
              <button
                className="p-2 rounded-lg hover:bg-primary-100/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes className="w-6 h-6 text-primary-700" />
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link px-4 py-3 rounded-xl text-lg font-semibold transition-all duration-200 ${
                    isActive(item.path) ? 'nav-link-active bg-primary-50 text-primary-700 shadow' : 'hover:bg-primary-100/60 hover:text-primary-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* More Dropdown for Mobile */}
              <div className="relative">
                <button
                  onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                  className="nav-link flex items-center space-x-2 px-4 py-3 rounded-xl text-lg font-semibold hover:bg-primary-100/60 hover:text-primary-700 transition-all duration-200 w-full"
                  aria-expanded={isMobileMoreOpen}
                  aria-haspopup="true"
                >
                  <span>More</span>
                  <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileMoreOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-1 mt-2"
                    >
                      {moreItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all duration-200 text-base font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Cart Icon */}
              <Link
                to="/order"
                className="relative flex items-center px-4 py-3 rounded-xl text-lg font-semibold text-gray-700 hover:bg-primary-100/60 hover:text-primary-700 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <FaShoppingCart className="w-5 h-5 mr-2" />
                Order
                {cartCount > 0 && (
                  <span className="ml-2 bg-secondary-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-md animate-scale-in">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 