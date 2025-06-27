import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaGlobe, FaPalette, FaChartLine, FaShoppingCart, FaMobileAlt } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sophia Reynolds",
      position: "Founder",
      company: "E-Shop",
      rating: 5,
      text: "LaunchLayer delivered a beautiful, high-converting e-commerce site for us. The process was smooth and the team was always responsive!",
      avatar: "SR",
      icon: FaShoppingCart,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Jacob Jones",
      position: "CEO",
      company: "SaaS Startup",
      rating: 5,
      text: "Our SaaS dashboard is fast, modern, and easy to use. LaunchLayer exceeded our expectations at every step.",
      avatar: "JJ",
      icon: FaChartLine,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Olivia Bennett",
      position: "Creative Director",
      company: "Portfolio Agency",
      rating: 5,
      text: "The new portfolio site is stunning and has helped us win more clients. Highly recommend LaunchLayer for web projects!",
      avatar: "OB",
      icon: FaPalette,
      color: "from-pink-500 to-yellow-500"
    },
    {
      name: "Marcus Chen",
      position: "CTO",
      company: "Booking System Inc.",
      rating: 5,
      text: "LaunchLayer built a robust booking system for our business. The platform is reliable and user-friendly.",
      avatar: "MC",
      icon: FaGlobe,
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Emma Thompson",
      position: "Operations Director",
      company: "Healthcare Portal",
      rating: 5,
      text: "Our healthcare portal is secure, fast, and easy for patients to use. LaunchLayer's support has been fantastic.",
      avatar: "ET",
      icon: FaMobileAlt,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Alex Rodriguez",
      position: "VP of Technology",
      company: "LMS Platform",
      rating: 5,
      text: "The learning management system LaunchLayer delivered is intuitive and scalable. Our users love it!",
      avatar: "AR",
      icon: FaChartLine,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
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
            What our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              clients say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with LaunchLayer and the web solutions we've delivered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-xl flex items-center justify-center`}>
                    <testimonial.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Icon */}
                <FaQuoteLeft className="w-8 h-8 text-gray-300 mb-4" />

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-8 leading-relaxed text-base">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className={`w-14 h-14 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-medium">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text font-semibold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-2xl -z-10 opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-xl`}></div>
            </motion.div>
          ))}
        </div>

        {/* Reviews Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Trusted by businesses worldwide
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
              Our web solutions have been trusted by companies across industries, delivering measurable results and helping them grow online.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "982+", label: "Trustpilot 4.8 star reviews" },
                { number: "487+", label: "Airbnb 5 star reviews" },
                { number: "182+", label: "Yelp 5 star reviews" },
                { number: "897+", label: "Google 5 star reviews" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-purple-200 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Overall Client Satisfaction
            </h3>
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-6 h-6 text-yellow-400" />
              ))}
              <span className="text-2xl font-bold text-gray-900 ml-2">5.0</span>
            </div>
            <p className="text-gray-600">
              Based on {testimonials.length} client reviews across AI projects
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 