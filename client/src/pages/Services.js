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

const Services = () => {
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
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30px_30px,rgba(156,146,172,0.1)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <nav className="flex justify-center mb-8 text-sm">
                <span className="text-gray-300">Home</span>
                <span className="mx-2 text-gray-500">/</span>
                <span className="text-white">Our Services</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Web Services</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Web Services Grid */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {webServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <button type="button" className="inline-flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors">
                    Read More
                    <FaArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
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
                How it <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Works</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Step-by-step approach to web project success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Launch & Integration</h4>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Monitoring & Optimization</h4>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Continuous Improvement</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Web Features */}
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
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Features</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlock growth with powerful web features
              </p>
              <p className="text-lg text-gray-500 mt-4">
                Explore our web-focused features designed to boost your business, engage users, and drive results.
              </p>
              <a href="/contact" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all mt-6">
                Contact Us
                <FaArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  {feature.description && (
                    <p className="text-gray-600 mb-4 leading-relaxed">
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
                200+ Web Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Completed</span>
              </h2>
              <p className="text-xl text-gray-300">
                Transforming businesses with modern web solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-8">
              {webSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-300 text-sm">{solution.description}</p>
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
                <h3 className="text-2xl font-bold mb-4 text-blue-700">1. UI/UX Design (Figma-based)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-xl shadow divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="px-4 py-3 text-left font-semibold">Package Name</th>
                        <th className="px-4 py-3 text-left font-semibold">Description</th>
                        <th className="px-4 py-3 text-left font-semibold">Price</th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {name: 'Starter UI Pack', desc: '5 Screens (Landing, About, Contact, etc.)', price: '$80 – $120'},
                        {name: 'Business UI Pack', desc: '10–12 Screens + Prototype + Mobile Responsive', price: '$150 – $250'},
                        {name: 'SaaS UI Master Pack', desc: '15–20 Screens (Dashboard, Auth, Features)', price: '$300 – $450'},
                      ].map((row, i) => (
                        <tr key={row.name} className="hover:bg-blue-50">
                          <td className="px-4 py-3 font-medium">{row.name}</td>
                          <td className="px-4 py-3">{row.desc}</td>
                          <td className="px-4 py-3 font-semibold text-blue-700">{row.price}</td>
                          <td className="px-4 py-3">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition" aria-label={`Add ${row.name} to cart`}>
                              Add to Cart
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* 2. Frontend Web Development */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700">2. Frontend Web Development (React + Tailwind)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-xl shadow divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="px-4 py-3 text-left font-semibold">Package Name</th>
                        <th className="px-4 py-3 text-left font-semibold">Description</th>
                        <th className="px-4 py-3 text-left font-semibold">Price</th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {name: 'Landing Starter', desc: '1-page site (Static, Animated)', price: '$100 – $150'},
                        {name: 'Multi-Page Site', desc: 'Up to 5 Pages + Routing + Contact Form', price: '$200 – $300'},
                        {name: 'SaaS Frontend MVP', desc: 'Full Frontend Dashboard + Component Logic', price: '$400 – $700'},
                      ].map((row, i) => (
                        <tr key={row.name} className="hover:bg-blue-50">
                          <td className="px-4 py-3 font-medium">{row.name}</td>
                          <td className="px-4 py-3">{row.desc}</td>
                          <td className="px-4 py-3 font-semibold text-blue-700">{row.price}</td>
                          <td className="px-4 py-3">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition" aria-label={`Add ${row.name} to cart`}>
                              Add to Cart
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* 3. Full-Stack Development */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700">3. Full-Stack Development (MERN Stack)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-xl shadow divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="px-4 py-3 text-left font-semibold">Package Name</th>
                        <th className="px-4 py-3 text-left font-semibold">Description</th>
                        <th className="px-4 py-3 text-left font-semibold">Price</th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {name: 'MVP Build', desc: 'Auth, Dashboard, DB CRUD, Basic API', price: '$500 – $800'},
                        {name: 'Pro SaaS Build', desc: 'Role-based Access, Payment, Mailer', price: '$900 – $1500'},
                        {name: 'Enterprise Tier', desc: 'Scalable SaaS with Advanced Backend Logic', price: '$1800 – $3000+'},
                      ].map((row, i) => (
                        <tr key={row.name} className="hover:bg-blue-50">
                          <td className="px-4 py-3 font-medium">{row.name}</td>
                          <td className="px-4 py-3">{row.desc}</td>
                          <td className="px-4 py-3 font-semibold text-blue-700">{row.price}</td>
                          <td className="px-4 py-3">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition" aria-label={`Add ${row.name} to cart`}>
                              Add to Cart
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* 4. Digital Marketing Services */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700">4. Digital Marketing Services</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-xl shadow divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="px-4 py-3 text-left font-semibold">Service</th>
                        <th className="px-4 py-3 text-left font-semibold">Description</th>
                        <th className="px-4 py-3 text-left font-semibold">Price (Monthly)</th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {name: 'Starter Growth', desc: '8 Posts/mo + SEO Audit + Email Marketing', price: '$100'},
                        {name: 'SaaS Growth Pro', desc: '16 Posts + LinkedIn Outreach + Flippa Research', price: '$200 – $300'},
                        {name: 'Full Funnel Growth', desc: 'Ads, Analytics, Lead Magnet Setup', price: '$400 – $600'},
                      ].map((row, i) => (
                        <tr key={row.name} className="hover:bg-blue-50">
                          <td className="px-4 py-3 font-medium">{row.name}</td>
                          <td className="px-4 py-3">{row.desc}</td>
                          <td className="px-4 py-3 font-semibold text-blue-700">{row.price}</td>
                          <td className="px-4 py-3">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition" aria-label={`Add ${row.name} to cart`}>
                              Add to Cart
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* 5. Flippa-Ready Product Setup */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700">5. Flippa-Ready Product Setup</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-xl shadow divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="px-4 py-3 text-left font-semibold">Package Name</th>
                        <th className="px-4 py-3 text-left font-semibold">Description</th>
                        <th className="px-4 py-3 text-left font-semibold">Price</th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {name: 'Starter Flippa Pack', desc: '1 Website + Listing + Screenshots', price: '$150'},
                        {name: 'Pro Flippa Bundle', desc: '2 Websites + Pitch Copy + SEO Optimized', price: '$250 – $400'},
                        {name: 'Full SaaS Launch', desc: 'MVP + Docs + Landing + Listing', price: '$500 – $800+'},
                      ].map((row, i) => (
                        <tr key={row.name} className="hover:bg-blue-50">
                          <td className="px-4 py-3 font-medium">{row.name}</td>
                          <td className="px-4 py-3">{row.desc}</td>
                          <td className="px-4 py-3 font-semibold text-blue-700">{row.price}</td>
                          <td className="px-4 py-3">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition" aria-label={`Add ${row.name} to cart`}>
                              Add to Cart
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* 6. Custom Productized UI Packs */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700">6. Custom Productized UI Packs (for resale)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-xl shadow divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="px-4 py-3 text-left font-semibold">Niche</th>
                        <th className="px-4 py-3 text-left font-semibold">Description</th>
                        <th className="px-4 py-3 text-left font-semibold">Price</th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {name: 'Fitness UI Kit', desc: '10 Screens + Mobile-first + Dark Mode', price: '$50 – $80'},
                        {name: 'Startup SaaS Kit', desc: '15 Screens + CTA, Pricing, Auth', price: '$80 – $120'},
                        {name: 'Job Board UI Kit', desc: '18+ Screens + Table + Filter Logic', price: '$100 – $150'},
                      ].map((row, i) => (
                        <tr key={row.name} className="hover:bg-blue-50">
                          <td className="px-4 py-3 font-medium">{row.name}</td>
                          <td className="px-4 py-3">{row.desc}</td>
                          <td className="px-4 py-3 font-semibold text-blue-700">{row.price}</td>
                          <td className="px-4 py-3">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition" aria-label={`Add ${row.name} to cart`}>
                              Add to Cart
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* 7. Website Maintenance + Support */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700">7. Website Maintenance + Support</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-xl shadow divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="px-4 py-3 text-left font-semibold">Tier</th>
                        <th className="px-4 py-3 text-left font-semibold">Description</th>
                        <th className="px-4 py-3 text-left font-semibold">Price (Monthly)</th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {name: 'Basic', desc: 'Bug Fixes + Minor Updates (2 hrs)', price: '$50'},
                        {name: 'Standard', desc: 'Uptime Monitor + 4 hrs/mo Support', price: '$100'},
                        {name: 'Premium', desc: 'Dedicated PM + Priority Fixes', price: '$200 – $300'},
                      ].map((row, i) => (
                        <tr key={row.name} className="hover:bg-blue-50">
                          <td className="px-4 py-3 font-medium">{row.name}</td>
                          <td className="px-4 py-3">{row.desc}</td>
                          <td className="px-4 py-3 font-semibold text-blue-700">{row.price}</td>
                          <td className="px-4 py-3">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition" aria-label={`Add ${row.name} to cart`}>
                              Add to Cart
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                What our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">clients say</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
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
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Web?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss your project and see how our web solutions can help bring your vision to life.
              </p>
              <a
                href="/contact"
                className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 bg-white text-blue-600 hover:bg-gray-100 rounded-xl font-semibold"
              >
                <span>Get Started</span>
                <FaArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;