import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaGlobe, 
  FaMobileAlt, 
  FaPalette, 
  FaShoppingCart, 
  FaSearch, 
  FaCloud, 
  FaCogs, 
  FaArrowRight 
} from 'react-icons/fa';

const ServicesOverview = () => {
  const services = [
    {
      icon: FaGlobe,
      title: "Web Development",
      description: "Custom, high-performance websites built for your business goals.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure Code"],
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App Development",
      description: "iOS & Android apps with seamless user experience and robust functionality.",
      features: ["Cross-Platform", "App Store Launch", "Push Notifications", "API Integration"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Modern, intuitive interfaces that delight users and drive engagement.",
      features: ["Wireframing", "Prototyping", "User Testing", "Brand Consistency"],
      color: "from-pink-500 to-yellow-500",
      bgColor: "from-pink-50 to-yellow-50"
    },
    {
      icon: FaShoppingCart,
      title: "E-Commerce Solutions",
      description: "Scalable online stores with secure payments and easy management.",
      features: ["Shopify & WooCommerce", "Custom Carts", "Payment Integration", "Inventory Management"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      icon: FaSearch,
      title: "SEO & Digital Marketing",
      description: "Boost your online presence and attract more customers with proven strategies.",
      features: ["On-Page SEO", "Content Marketing", "Analytics", "Ad Campaigns"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50"
    },
    {
      icon: FaCogs,
      title: "Website Maintenance",
      description: "Ongoing support, updates, and security for peace of mind.",
      features: ["24/7 Monitoring", "Regular Backups", "Performance Optimization", "Bug Fixes"],
      color: "from-teal-500 to-blue-500",
      bgColor: "from-teal-50 to-blue-50"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Web development services for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              digital success
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We build high-impact websites, apps, and digital solutions that help businesses grow and thrive online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12, type: 'spring', stiffness: 80 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl dark:shadow-blue-900/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 dark:border-gray-800 ring-0 group-hover:ring-4 group-hover:ring-blue-200/40 dark:group-hover:ring-blue-700/30">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300 shadow-xl`}>
                  <service.icon className="w-9 h-9 text-white drop-shadow-lg" />
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Learn More Link */}
                <Link
                  to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`inline-flex items-center text-transparent bg-gradient-to-r ${service.color} bg-clip-text hover:scale-110 font-semibold transition-all duration-200 group-hover:translate-x-1`}
                >
                  Read More
                  <FaArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.bgColor} rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl`}></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's build your next web project together
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to elevate your business? Get a free consultation and discover how our web solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>Get Free Quote</span>
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <span>View All Services</span>
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview; 