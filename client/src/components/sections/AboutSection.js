import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaGlobe, 
  FaPalette, 
  FaCogs, 
  FaRocket, 
  FaArrowRight,
  FaCheckCircle,
  FaChartLine,
  FaUsers
} from 'react-icons/fa';

const AboutSection = () => {
  const features = [
    {
      icon: FaGlobe,
      title: "Driven by Design, Focused on Results",
      description: "We craft custom websites and apps that help businesses grow and stand out online."
    },
    {
      icon: FaPalette,
      title: "Experts in Web & App Development",
      description: "Our team delivers modern, scalable solutions using the latest technologies and best practices."
    },
    {
      icon: FaCogs,
      title: "Modern UI/UX & Performance",
      description: "We prioritize user experience, speed, and accessibility in every project."
    }
  ];

  const stats = [
    { number: "200+", label: "Web Projects Delivered" },
    { number: "30+", label: "Industries Served" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <section className="section-padding bg-transparent">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <FaGlobe className="w-4 h-4 mr-2" />
              About Us
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Driven by innovation, powered by{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                web technology
              </span>{' '}
              we build digital solutions that help businesses grow, engage, and succeed online.
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join hundreds of businesses worldwide and experience the impact of modern web development. We are a forward-thinking web agency specializing in custom websites, SaaS, e-commerce, and digital solutions. Whether you're a startup or a global enterprise, our mission is simple: build web tools that solve real-world problems.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Learn More About Us</span>
              <FaArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>

          {/* Stats & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-6 border border-gray-200"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Who We Are */}
            <div className="bg-gradient-to-br from-slate-900 to-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Expert web solutions with real impact
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We are a modern web development agency specializing in custom websites, SaaS, e-commerce, and digital solutions. Whether you're a startup or a global enterprise, our mission is simple: build digital tools that solve real-world problems.
              </p>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">200+</div>
                  <div className="text-sm text-gray-400">Web Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">30+</div>
                  <div className="text-sm text-gray-400">Industries Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">98%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* Web Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Unlock growth with powerful web features
              </h3>
              <p className="text-gray-600 mb-6">
                Explore our web-focused features designed to boost your business, engage users, and drive results.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FaGlobe, title: "Responsive Design", color: "from-blue-500 to-purple-500" },
                  { icon: FaPalette, title: "Modern UI/UX", color: "from-pink-500 to-yellow-500" },
                  { icon: FaChartLine, title: "SEO & Analytics", color: "from-green-500 to-emerald-500" },
                  { icon: FaCogs, title: "Performance", color: "from-orange-500 to-red-500" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {feature.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 