import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaRocket,
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaPalette,
  FaCogs
} from 'react-icons/fa';

// Components
import HeroSection from '../components/sections/HeroSection';
import ServicesOverview from '../components/sections/ServicesOverview';
import AboutSection from '../components/sections/AboutSection';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  const howItWorks = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We learn about your business, goals, and requirements to craft the perfect web solution.",
      icon: FaGlobe,
      color: "from-blue-500 to-purple-500"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create modern, user-friendly interfaces tailored to your brand.",
      icon: FaPalette,
      color: "from-pink-500 to-yellow-500"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build robust, scalable websites and apps, ensuring quality and performance.",
      icon: FaCogs,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "After launch, we provide ongoing support, updates, and optimization for your success.",
      icon: FaRocket,
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      icon: FaGlobe,
      title: "Custom Web Development",
      description: "Tailored websites and web apps built for your unique business needs.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: FaPalette,
      title: "Modern UI/UX Design",
      description: "Beautiful, intuitive interfaces that engage and convert users.",
      color: "from-pink-500 to-yellow-500"
    },
    {
      icon: FaChartLine,
      title: "SEO & Performance",
      description: "Optimized for speed, search engines, and top rankings.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaUsers,
      title: "Ongoing Support",
      description: "We're here for you after launch with updates, fixes, and enhancements.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>LaunchLayer - Web Development Agency | Modern Websites & Apps</title>
        <meta name="description" content="LaunchLayer - Leading web development agency specializing in custom websites, SaaS, e-commerce, UI/UX, and digital solutions. Grow your business online with our expert team." />
        <meta name="keywords" content="web development, agency, SaaS, e-commerce, UI/UX, website design, app development, SEO, digital marketing" />
        <link rel="canonical" href="https://launchlayer.com" />
      </Helmet>

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Overview */}
        <ServicesOverview />

        {/* About Section */}
        <AboutSection />

        {/* How it Works Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Step-by-step approach to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  web excellence
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our proven process ensures your website or app is delivered on time, on budget, and exceeds expectations.
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
                  className="text-center group"
                >
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Design Smart Solutions
                </h3>
                <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
                  Our comprehensive approach includes launch, integration, monitoring, and continuous improvement to ensure your digital solutions deliver maximum value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Get Started</span>
                    <FaRocket className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Unlock growth with powerful{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  web features
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Explore our web-focused features designed to boost your business, engage users, and drive results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <PortfolioPreview />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  );
};

export default Home;