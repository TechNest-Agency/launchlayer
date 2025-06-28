import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaGlobe,
  FaMobileAlt,
  FaPalette,
  FaShoppingCart,
  FaSearch,
  FaCogs,
  FaCloud
} from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Services = () => {
  const { addToCart } = useCart();
  const [added, setAdded] = React.useState(null);

  const webServices = [
    {
      icon: FaGlobe,
      title: "Web Development",
      description: "Custom, high-performance websites built for your business goals."
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App Development",
      description: "iOS & Android apps with seamless user experience and robust functionality."
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Modern, intuitive interfaces that delight users and drive engagement."
    },
    {
      icon: FaShoppingCart,
      title: "E-Commerce Solutions",
      description: "Scalable online stores with secure payments and easy management."
    },
    {
      icon: FaSearch,
      title: "SEO & Digital Marketing",
      description: "Boost your online presence and attract more customers with proven strategies."
    },
    {
      icon: FaCogs,
      title: "Website Maintenance",
      description: "Ongoing support, updates, and security for peace of mind."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We learn about your business, goals, and requirements to craft the perfect web solution."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create modern, user-friendly interfaces tailored to your brand."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build robust, scalable websites and apps, ensuring quality and performance."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "After launch, we provide ongoing support, updates, and optimization for your success."
    }
  ];

  const features = [
    {
      icon: FaGlobe,
      title: "Custom Web Development",
      items: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure Code", "API Integrations"]
    },
    {
      icon: FaPalette,
      title: "Modern UI/UX Design",
      description: "Beautiful, intuitive interfaces that engage and convert users."
    },
    {
      icon: FaChartLine,
      title: "SEO & Performance",
      items: ["On-Page SEO", "Analytics", "Speed Optimization", "Accessibility"]
    }
  ];

  const webSolutions = [
    {
      icon: FaShoppingCart,
      title: "E-Commerce",
      description: "Online stores, custom carts, and secure payment integration."
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Apps",
      description: "Cross-platform mobile solutions for iOS & Android."
    },
    {
      icon: FaCloud,
      title: "SaaS Platforms",
      description: "Cloud-based business tools and dashboards."
    },
    {
      icon: FaCogs,
      title: "Automation",
      description: "Automate workflows and business processes."
    },
    {
      icon: FaSearch,
      title: "SEO & Marketing",
      description: "Grow your audience and reach more customers."
    }
  ];

  const faqs = [
    {
      question: "What types of websites do you build?",
      answer: "We build everything from business sites and portfolios to e-commerce, SaaS, and custom web applications."
    },
    {
      question: "How long does a typical project take?",
      answer: "Most projects take 4-8 weeks depending on complexity and requirements."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes! We provide maintenance, updates, and support after launch to keep your site running smoothly."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely. All our websites are fully responsive and optimized for all devices."
    },
    {
      question: "Can you help with SEO and marketing?",
      answer: "Yes, we offer SEO optimization and digital marketing services to help you grow online."
    }
  ];

  const testimonials = [
    {
      name: "Sophia Reynolds",
      role: "Founder, E-Shop",
      content: "LaunchLayer delivered a beautiful, high-converting e-commerce site for us. The process was smooth and the team was always responsive!"
    },
    {
      name: "Jacob Jones",
      role: "CEO, SaaS Startup",
      content: "Our SaaS dashboard is fast, modern, and easy to use. LaunchLayer exceeded our expectations at every step."
    },
    {
      name: "Olivia Bennett",
      role: "Creative Director, Agency",
      content: "The new portfolio site is stunning and has helped us win more clients. Highly recommend LaunchLayer for web projects!"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - NextMind AI | Intelligent Solutions for Tomorrow</title>
        <meta name="description" content="Explore our comprehensive AI services including machine learning, predictive analytics, chatbot solutions, and more. We deliver cutting-edge artificial intelligence solutions." />
        <link rel="canonical" href="https://nextmind.ai/services" />
      </Helmet>

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
      {/* Unique Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#6366f1" fillOpacity="0.15" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
          <svg className="absolute bottom-0 right-0 w-full h-32" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#06b6d4" fillOpacity="0.12" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,154.7C672,160,768,192,864,197.3C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold tracking-widest shadow-lg animate-pulse">LaunchLayer Services</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Transform Your Business</span>
              <br />with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Modern Web Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8">From design to deployment, we craft digital experiences that drive results. Explore our unique, client-focused service packages below.</p>
            <a href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all">
              Explore Services
              <FaArrowRight className="ml-3 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

        {/* Web Services Grid */}
        {/* Unique Web Services Grid Section */}
        <section id="services" className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-100 to-purple-100 opacity-40 blur-2xl pointer-events-none"></div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Our Unique Services</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">Hand-crafted digital solutions for every business need. Each service is designed to deliver maximum value and a memorable experience.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {webServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="group bg-white/80 rounded-2xl shadow-xl hover:shadow-2xl border border-blue-100 hover:border-blue-300 p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                >
                  <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-base min-h-[60px]">{service.description}</p>
                  <button type="button" className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all">
                    Read More
                    <FaArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        {/* Unique How It Works Section */}
        <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative">
          <div className="absolute top-0 right-0 w-1/2 h-32 bg-gradient-to-l from-purple-200 to-blue-100 opacity-30 blur-2xl pointer-events-none"></div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">How We Work</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">A transparent, collaborative process that ensures your project’s success at every step.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="bg-white/90 rounded-2xl shadow-xl border border-purple-100 hover:border-blue-300 p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                >
                  <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-extrabold text-white drop-shadow-lg">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base min-h-[60px]">{step.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-20 text-center"
            >
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl shadow-lg">
                  <h4 className="font-semibold text-blue-700 mb-2 text-lg">Launch & Integration</h4>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl shadow-lg">
                  <h4 className="font-semibold text-purple-700 mb-2 text-lg">Monitoring & Optimization</h4>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl shadow-lg">
                  <h4 className="font-semibold text-blue-700 mb-2 text-lg">Continuous Improvement</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Web Features */}
        {/* Unique Features Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
          <div className="absolute left-0 bottom-0 w-1/2 h-32 bg-gradient-to-r from-blue-100 to-purple-100 opacity-30 blur-2xl pointer-events-none"></div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Web Features</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">Unlock growth with powerful features designed to boost your business, engage users, and drive results.</p>
              <a href="/contact" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all mt-8">
                Contact Us
                <FaArrowRight className="ml-3 w-5 h-5" />
              </a>
            </motion.div>
            <div className="grid lg:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="bg-white/90 rounded-2xl shadow-xl border border-blue-100 hover:border-purple-300 p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                >
                  <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-lg">
                    <feature.icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  {feature.description && (
                    <p className="text-gray-600 mb-4 leading-relaxed text-base min-h-[60px]">
                      {feature.description}
                    </p>
                  )}
                  {feature.items && (
                    <ul className="space-y-2">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-600">
                          <FaCheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        {/* Unique Statistics Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white relative">
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#6366f1" fillOpacity="0.12" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">200+ Web Projects Completed</span>
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Transforming businesses with modern web solutions
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
              {webSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="bg-white/10 rounded-2xl shadow-xl border border-blue-900/20 p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                >
                  <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-lg">
                    <solution.icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white/90">{solution.title}</h3>
                  <p className="text-gray-200 text-sm">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LaunchLayer Official Service Packages */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                💼 LaunchLayer Agency — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Official Service Packages</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                All rates in USD. For USA, UK, Australia, Canada clients. Payment: Stripe, Wise, Payoneer, Upwork, Fiverr, Direct Invoice.
              </p>
            </motion.div>
            <div className="space-y-16">
              {/* 1. UI/UX Design */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-blue-700 text-center">1. UI/UX Design (Figma-based)</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {name: 'Starter UI Pack', desc: '5 Screens (Landing, About, Contact, etc.)', price: 80, priceDisplay: '$80 – $120'},
                    {name: 'Business UI Pack', desc: '10–12 Screens + Prototype + Mobile Responsive', price: 150, priceDisplay: '$150 – $250'},
                    {name: 'SaaS UI Master Pack', desc: '15–20 Screens (Dashboard, Auth, Features)', price: 300, priceDisplay: '$300 – $450'},
                  ].map((row, i) => (
                    <motion.div
                      key={row.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="bg-white rounded-2xl shadow-xl border border-blue-100 hover:border-blue-400 p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                    >
                      <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-lg">
                        <FaPalette className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{row.name}</h4>
                      <p className="text-gray-600 mb-4 min-h-[48px]">{row.desc}</p>
                      <div className="text-2xl font-extrabold text-blue-700 mb-4">{row.priceDisplay}</div>
                      <button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all"
                        aria-label={`Add ${row.name} to cart`}
                        onClick={() => {
                          addToCart({
                            id: `${row.name}-uiux`,
                            service: 'UI/UX Design',
                            package: row.name,
                            desc: row.desc,
                            price: row.price,
                            priceDisplay: row.priceDisplay
                          });
                          setAdded(row.name);
                          setTimeout(() => setAdded(null), 1200);
                        }}
                      >
                        {added === row.name ? 'Added!' : 'Add to Cart'}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* 2. Frontend Web Development */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-blue-700 text-center">2. Frontend Web Development (React + Tailwind)</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {name: 'Landing Starter', desc: '1-page site (Static, Animated)', price: 100, priceDisplay: '$100 – $150', color: 'from-blue-400 to-cyan-400'},
                    {name: 'Multi-Page Site', desc: 'Up to 5 Pages + Routing + Contact Form', price: 200, priceDisplay: '$200 – $300', color: 'from-purple-500 to-blue-500'},
                    {name: 'SaaS Frontend MVP', desc: 'Full Frontend Dashboard + Component Logic', price: 400, priceDisplay: '$400 – $700', color: 'from-cyan-500 to-blue-500'},
                  ].map((row, i) => (
                    <motion.div
                      key={row.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="bg-white rounded-2xl shadow-xl border border-blue-100 hover:border-blue-400 p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                    >
                      <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${row.color} flex items-center justify-center shadow-lg`}>
                        <FaCogs className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{row.name}</h4>
                      <p className="text-gray-600 mb-4 min-h-[48px]">{row.desc}</p>
                      <div className="text-2xl font-extrabold text-blue-700 mb-4">{row.priceDisplay}</div>
                      <button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all"
                        aria-label={`Add ${row.name} to cart`}
                        onClick={() => {
                          addToCart({
                            id: `${row.name}-frontend`,
                            service: 'Frontend Web Development',
                            package: row.name,
                            desc: row.desc,
                            price: row.price,
                            priceDisplay: row.priceDisplay
                          });
                          setAdded(row.name);
                          setTimeout(() => setAdded(null), 1200);
                        }}
                      >
                        {added === row.name ? 'Added!' : 'Add to Cart'}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* 3. Full-Stack Development */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-blue-700 text-center">3. Full-Stack Development (MERN Stack)</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {name: 'MVP Build', desc: 'Auth, Dashboard, DB CRUD, Basic API', price: 500, priceDisplay: '$500 – $800', color: 'from-blue-400 to-purple-400'},
                    {name: 'Pro SaaS Build', desc: 'Role-based Access, Payment, Mailer', price: 900, priceDisplay: '$900 – $1500', color: 'from-purple-500 to-blue-500'},
                    {name: 'Enterprise Tier', desc: 'Scalable SaaS with Advanced Backend Logic', price: 1800, priceDisplay: '$1800 – $3000+', color: 'from-cyan-500 to-blue-500'},
                  ].map((row, i) => (
                    <motion.div
                      key={row.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="bg-white rounded-2xl shadow-xl border border-blue-100 hover:border-blue-400 p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                    >
                      <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${row.color} flex items-center justify-center shadow-lg`}>
                        <FaCloud className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{row.name}</h4>
                      <p className="text-gray-600 mb-4 min-h-[48px]">{row.desc}</p>
                      <div className="text-2xl font-extrabold text-blue-700 mb-4">{row.priceDisplay}</div>
                      <button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all"
                        aria-label={`Add ${row.name} to cart`}
                        onClick={() => {
                          addToCart({
                            id: `${row.name}-fullstack`,
                            service: 'Full-Stack Development',
                            package: row.name,
                            desc: row.desc,
                            price: row.price,
                            priceDisplay: row.priceDisplay
                          });
                          setAdded(row.name);
                          setTimeout(() => setAdded(null), 1200);
                        }}
                      >
                        {added === row.name ? 'Added!' : 'Add to Cart'}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* 4. Digital Marketing Services */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-blue-700 text-center">4. Digital Marketing Services</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {name: 'Starter Growth', desc: '8 Posts/mo + SEO Audit + Email Marketing', price: 100, priceDisplay: '$100', color: 'from-blue-400 to-purple-400'},
                    {name: 'SaaS Growth Pro', desc: '16 Posts + LinkedIn Outreach + Flippa Research', price: 200, priceDisplay: '$200 – $300', color: 'from-purple-500 to-blue-500'},
                    {name: 'Full Funnel Growth', desc: 'Ads, Analytics, Lead Magnet Setup', price: 400, priceDisplay: '$400 – $600', color: 'from-cyan-500 to-blue-500'},
                  ].map((row, i) => (
                    <motion.div
                      key={row.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="bg-white rounded-2xl shadow-xl border border-blue-100 hover:border-blue-400 p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                    >
                      <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${row.color} flex items-center justify-center shadow-lg`}>
                        <FaChartLine className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{row.name}</h4>
                      <p className="text-gray-600 mb-4 min-h-[48px]">{row.desc}</p>
                      <div className="text-2xl font-extrabold text-blue-700 mb-4">{row.priceDisplay}</div>
                      <button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all"
                        aria-label={`Add ${row.name} to cart`}
                        onClick={() => {
                          addToCart({
                            id: `${row.name}-marketing`,
                            service: 'Digital Marketing',
                            package: row.name,
                            desc: row.desc,
                            price: row.price,
                            priceDisplay: row.priceDisplay
                          });
                          setAdded(row.name);
                          setTimeout(() => setAdded(null), 1200);
                        }}
                      >
                        {added === row.name ? 'Added!' : 'Add to Cart'}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* 5. Flippa-Ready Product Setup */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-blue-700 text-center">5. Flippa-Ready Product Setup</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {name: 'Starter Flippa Pack', desc: '1 Website + Listing + Screenshots', price: 150, priceDisplay: '$150', color: 'from-blue-400 to-purple-400'},
                    {name: 'Pro Flippa Bundle', desc: '2 Websites + Pitch Copy + SEO Optimized', price: 250, priceDisplay: '$250 – $400', color: 'from-purple-500 to-blue-500'},
                    {name: 'Full SaaS Launch', desc: 'MVP + Docs + Landing + Listing', price: 500, priceDisplay: '$500 – $800+', color: 'from-cyan-500 to-blue-500'},
                  ].map((row, i) => (
                    <motion.div
                      key={row.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="bg-white rounded-2xl shadow-xl border border-blue-100 hover:border-blue-400 p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                    >
                      <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${row.color} flex items-center justify-center shadow-lg`}>
                        <FaShoppingCart className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{row.name}</h4>
                      <p className="text-gray-600 mb-4 min-h-[48px]">{row.desc}</p>
                      <div className="text-2xl font-extrabold text-blue-700 mb-4">{row.priceDisplay}</div>
                      <button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all"
                        aria-label={`Add ${row.name} to cart`}
                        onClick={() => {
                          addToCart({
                            id: `${row.name}-flippa`,
                            service: 'Flippa-Ready Product Setup',
                            package: row.name,
                            desc: row.desc,
                            price: row.price,
                            priceDisplay: row.priceDisplay
                          });
                          setAdded(row.name);
                          setTimeout(() => setAdded(null), 1200);
                        }}
                      >
                        {added === row.name ? 'Added!' : 'Add to Cart'}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* 6. Custom Productized UI Packs */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-blue-700 text-center">6. Custom Productized UI Packs (for resale)</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {name: 'Fitness UI Kit', desc: '10 Screens + Mobile-first + Dark Mode', price: 50, priceDisplay: '$50 – $80', color: 'from-blue-400 to-purple-400'},
                    {name: 'Startup SaaS Kit', desc: '15 Screens + CTA, Pricing, Auth', price: 80, priceDisplay: '$80 – $120', color: 'from-purple-500 to-blue-500'},
                    {name: 'Job Board UI Kit', desc: '18+ Screens + Table + Filter Logic', price: 100, priceDisplay: '$100 – $150', color: 'from-cyan-500 to-blue-500'},
                  ].map((row, i) => (
                    <motion.div
                      key={row.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="bg-white rounded-2xl shadow-xl border border-blue-100 hover:border-blue-400 p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                    >
                      <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${row.color} flex items-center justify-center shadow-lg`}>
                        <FaPalette className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{row.name}</h4>
                      <p className="text-gray-600 mb-4 min-h-[48px]">{row.desc}</p>
                      <div className="text-2xl font-extrabold text-blue-700 mb-4">{row.priceDisplay}</div>
                      <button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all"
                        aria-label={`Add ${row.name} to cart`}
                        onClick={() => {
                          addToCart({
                            id: `${row.name}-uipack`,
                            service: 'Custom Productized UI Packs',
                            package: row.name,
                            desc: row.desc,
                            price: row.price,
                            priceDisplay: row.priceDisplay
                          });
                          setAdded(row.name);
                          setTimeout(() => setAdded(null), 1200);
                        }}
                      >
                        {added === row.name ? 'Added!' : 'Add to Cart'}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* 7. Website Maintenance + Support */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-blue-700 text-center">7. Website Maintenance + Support</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {name: 'Basic', desc: 'Bug Fixes + Minor Updates (2 hrs)', price: 50, priceDisplay: '$50', color: 'from-blue-400 to-purple-400'},
                    {name: 'Standard', desc: 'Uptime Monitor + 4 hrs/mo Support', price: 100, priceDisplay: '$100', color: 'from-purple-500 to-blue-500'},
                    {name: 'Premium', desc: 'Dedicated PM + Priority Fixes', price: 250, priceDisplay: '$200 – $300', color: 'from-cyan-500 to-blue-500'},
                  ].map((row, i) => (
                    <motion.div
                      key={row.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="bg-white rounded-2xl shadow-xl border border-blue-100 hover:border-blue-400 p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                    >
                      <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${row.color} flex items-center justify-center shadow-lg`}>
                        <FaCogs className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{row.name}</h4>
                      <p className="text-gray-600 mb-4 min-h-[48px]">{row.desc}</p>
                      <div className="text-2xl font-extrabold text-blue-700 mb-4">{row.priceDisplay}</div>
                      <button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all"
                        aria-label={`Add ${row.name} to cart`}
                        onClick={() => {
                          addToCart({
                            id: `${row.name}-maintenance`,
                            service: 'Website Maintenance + Support',
                            package: row.name,
                            desc: row.desc,
                            price: row.price,
                            priceDisplay: row.priceDisplay
                          });
                          setAdded(row.name);
                          setTimeout(() => setAdded(null), 1200);
                        }}
                      >
                        {added === row.name ? 'Added!' : 'Add to Cart'}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            {/* Legal & Client Notes */}
            <div className="mt-12 text-gray-600 text-sm max-w-2xl mx-auto text-center">
              <p className="mb-2">🧾 <b>Notes:</b> All rates in USD. Client Area: USA, UK, Australia, Canada. Payment Gateway: Stripe / Wise / Payoneer / Upwork / Fiverr / Direct Invoice.</p>
              <p>Legal Docs (on request): NDA, Proposal PDF, Invoice, Contract Template</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently asked questions on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">web services</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Impressive stats backing our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">web solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are a modern web development agency specializing in custom websites, SaaS, e-commerce, and digital solutions to help businesses grow online.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-blue-400 mb-4">200+</div>
                <div className="text-xl text-gray-300">Web Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-purple-400 mb-4">98%</div>
                <div className="text-xl text-gray-300">Client Satisfaction Rate</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {/* Unique Testimonials Section */}
        <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative">
          <div className="absolute right-0 top-0 w-1/2 h-32 bg-gradient-to-l from-purple-100 to-blue-100 opacity-30 blur-2xl pointer-events-none"></div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">What Our Clients Say</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="bg-white/90 rounded-2xl shadow-xl border border-purple-100 hover:border-blue-300 p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <FaQuoteLeft className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-center mt-16"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">982+</div>
                  <div className="text-sm text-gray-600">Trustpilot 4.8 star review</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">487+</div>
                  <div className="text-sm text-gray-600">Clutch 5 star reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">182+</div>
                  <div className="text-sm text-gray-600">Yelp 5 star reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">897+</div>
                  <div className="text-sm text-gray-600">Google 5 star reviews</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        {/* Unique CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white relative">
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#06b6d4" fillOpacity="0.12" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,154.7C672,160,768,192,864,197.3C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Ready to Transform Your Business with Web?</span>
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Let's discuss your project and see how our web solutions can help bring your vision to life.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                <span>Get Started</span>
                <FaArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;