import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaHeadset, 
  FaBook, 
  FaEnvelope, 
  FaPhone, 
  FaClock,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

const supportOptions = [
  {
    icon: FaHeadset,
    title: "24/7 Technical Support",
    description: "Round-the-clock technical support for all our solutions.",
    contact: "support@launchlayer.com"
  },
  {
    icon: FaBook,
    title: "Documentation",
    description: "Comprehensive guides and API documentation.",
    contact: "docs.launchlayer.com"
  },
  {
    icon: FaEnvelope,
    title: "General Inquiries",
    description: "Questions about our services or pricing.",
    contact: "hello@launchlayer.com"
  },
  {
    icon: FaPhone,
    title: "Emergency Support",
    description: "Critical issues requiring immediate attention.",
    contact: "+880-XXX-XXXXXXX"
  }
];

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Support - LaunchLayer | Help & Documentation</title>
        <meta name="description" content="Get help and support for LaunchLayer services. 24/7 technical support, documentation, and contact options." />
        <link rel="canonical" href="https://launchlayer.com/support" />
      </Helmet>
      <main className="pt-16 md:pt-20">
        <section className="section-padding gradient-bg text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support & <span className="text-secondary-300">Help</span></h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We're here to help! Get the support you need with our comprehensive help center and 24/7 technical assistance.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center rounded-2xl p-8 shadow-xl border border-white/30 bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="w-full h-full bg-gradient-to-br from-blue-200/30 via-purple-200/20 to-cyan-200/10 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-cyan-900/10 rounded-2xl" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <option.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-200">{option.title}</h3>
                    <p className="text-gray-600 dark:text-gray-200 mb-4">{option.description}</p>
                    <a
                      href={option.contact.startsWith('http') ? option.contact : `mailto:${option.contact}`}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      {option.contact}
                    </a>
                  </div>
                  <div className="absolute left-1/2 -bottom-2 w-32 h-8 bg-gradient-to-r from-blue-400/30 via-purple-400/20 to-cyan-400/10 blur-xl opacity-60 -translate-x-1/2 group-hover:opacity-90 transition-all duration-300" />
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How Can We Help?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaCheckCircle className="w-5 h-5 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Technical Issues</h3>
                      <p className="text-gray-600">Get help with bugs, performance issues, or technical problems.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="w-5 h-5 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Feature Requests</h3>
                      <p className="text-gray-600">Request new features or improvements to existing solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="w-5 h-5 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Training & Onboarding</h3>
                      <p className="text-gray-600">Get training on how to use our solutions effectively.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Response Times</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Critical Issues</span>
                    <span className="text-primary-600 font-semibold">2-4 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">General Support</span>
                    <span className="text-primary-600 font-semibold">24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Feature Requests</span>
                    <span className="text-primary-600 font-semibold">48 hours</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-gray-600">
                    <FaClock className="w-4 h-4 mr-2" />
                    <span>Available 24/7 for critical issues</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Still Need Help?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you get the answers you need.
            </p>
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Contact Support</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Support; 