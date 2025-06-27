import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useContact } from '../context/ContactContext';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';

const Contact = () => {
  const {
    formData,
    loading,
    success,
    error,
    updateFormField,
    submitContactForm,
    clearError
  } = useContact();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitContactForm(formData);
  };

  const handleInputChange = (field, value) => {
    updateFormField(field, value);
    if (error) clearError();
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "hello@launchlayer.agency",
      link: "mailto:hello@launchlayer.com"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+880-132-2695162",
      link: "tel:+880-132-2695162"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      value: "Dhaka, Bangladesh",
      link: null
    },
    {
      icon: FaClock,
      title: "Working Hours",
      value: "Sun-Thu: 9AM-6PM (GMT+6)",
      link: null
    }
  ];

  const services = [
    "Web Development",
    "Cybersecurity",
    "App Development", 
    "Software Solutions",
    "UI/UX Design",
    "SEO & Marketing",
    "Other"
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - LaunchLayer | Get in Touch</title>
        <meta name="description" content="Get in touch with LaunchLayer for your next project. We're here to help you build secure, scalable, and smart solutions." />
        <link rel="canonical" href="https://launchlayer.com/contact" />
      </Helmet>

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="section-padding gradient-bg text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Build Something <span className="text-secondary-300">Amazing</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Ready to transform your business with cutting-edge technology? 
                Get in touch with our team of experts and let's discuss your project.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="contact-form bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 p-6 md:p-10 transition-all duration-300 focus-within:ring-4 focus-within:ring-blue-400/20"
                tabIndex={0}
                aria-label="Contact form section"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send us a Message
                </h2>

                {/* Success/Error Messages */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg flex items-center"
                  >
                    <FaCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-green-700 dark:text-green-300">
                      Thank you for your message! We'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg flex items-center"
                  >
                    <FaTimesCircle className="w-5 h-5 text-red-500 mr-3" />
                    <span className="text-red-700 dark:text-red-300">{error}</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                  <fieldset className="grid md:grid-cols-2 gap-6" aria-label="Contact details">
                    <legend className="sr-only">Contact details</legend>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="form-input dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                        required
                        aria-label="Full Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="form-input dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                        required
                        aria-label="Email Address"
                      />
                    </div>
                  </fieldset>

                  <fieldset className="grid md:grid-cols-2 gap-6" aria-label="Company and service">
                    <legend className="sr-only">Company and service</legend>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="form-input dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                        aria-label="Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        className="form-select dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                        aria-label="Service Interested In"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="form-textarea dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                      rows={5}
                      required
                      aria-label="Message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 animate-pulse"
                    disabled={loading}
                    aria-label="Send message"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <div className="flex flex-col gap-6">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex items-center gap-5 bg-gradient-to-r from-blue-50 via-purple-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 group"
                    tabIndex={0}
                    aria-label={info.title}
                  >
                    <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-primary-600 dark:text-blue-300 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                          aria-label={info.value}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-600 dark:text-gray-300">{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact; 