import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaGlobe, 
  FaPalette, 
  FaChartLine, 
  FaShoppingCart, 
  FaMobileAlt, 
  FaArrowRight,
  FaRocket,
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: FaGlobe,
      title: "Custom Web Development",
      description: "Modern, scalable websites and web apps tailored to your business."
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that engage and convert users."
    },
    {
      icon: FaChartLine,
      title: "SEO & Analytics",
      description: "Optimized for search engines and actionable insights."
    },
    {
      icon: FaRocket,
      title: "Fast Launch",
      description: "Quick delivery and seamless integration for your business."
    },
    {
      icon: FaShoppingCart,
      title: "E-Commerce",
      description: "Secure, scalable online stores with payment integration."
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
      icon: FaGlobe,
      title: "SaaS Platforms",
      description: "Cloud-based business tools and dashboards."
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Modern, intuitive interfaces for web and mobile."
    },
    {
      icon: FaChartLine,
      title: "SEO & Marketing",
      description: "Grow your audience and reach more customers."
    }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Co. Founder',
      avatar: '/sumaiya.png',
      bio: 'Web visionary with 10+ years in digital strategy and business growth.'
    },
    {
      name: 'Brooklyn Simmons',
      role: 'Marketing Director',
      avatar: '/jasmin.png',
      bio: 'Digital marketing expert specializing in web campaigns.'
    },
    {
      name: 'Ralph Edwards',
      role: 'Lead Developer',
      avatar: '/sumon.jpg',
      bio: 'Full-stack developer with expertise in scalable web apps.'
    },
    {
      name: 'Marvin Mckinney',
      role: 'UI/UX Designer',
      avatar: '/halima.png',
      bio: 'Experienced designer focused on modern, user-friendly interfaces.'
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
        <title>About Us - LaunchLayer | Web Development Agency</title>
        <meta name="description" content="Learn about LaunchLayer - your trusted partner in web development, SaaS, e-commerce, and digital solutions. We build modern websites and apps that help businesses grow." />
        <link rel="canonical" href="https://launchlayer.com/about" />
      </Helmet>

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
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
                <span className="text-white">About Us</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Us</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Driven by innovation, powered by web technology—we build digital solutions that help businesses grow, engage, and succeed online.
              </p>
              <p className="text-lg text-gray-400 mt-4">
                Join hundreds of businesses worldwide and experience the impact of modern web development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Shaping Tomorrow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Modern Web</span> Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We believe that the most powerful web solutions are born from collaboration. By working closely with our clients, we align technology with real business needs to create transformative results.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-gray-600">
                      Our mission is to deliver cutting-edge web solutions that empower businesses to automate, innovate, and grow. 
                      We aim to bridge the gap between technology and real-world applications.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-gray-600">
                      Our vision is to deliver cutting-edge web solutions that empower businesses to automate, innovate, and grow. 
                      We aim to bridge the gap between technology and real-world applications.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Goal</h3>
                    <p className="text-gray-600">
                      Our goal is to deliver cutting-edge web solutions that empower businesses to automate, innovate, and grow. 
                      We aim to bridge the gap between technology and real-world applications.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Unlock growth with powerful web features</h3>
                  <p className="text-blue-100 mb-8">
                    Explore our web-focused features designed to boost your business, engage users, and drive results.
                  </p>
                  <a href="/contact" className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Contact Us
                    <FaArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Web Features */}
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
                Advanced Web Development for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Business Growth</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4">Advanced Web Development Model Development</h3>
                <p className="text-blue-100">
                  We design digital solutions that learn from data and automate complex processes—enhancing efficiency, 
                  accuracy, and scalability across industries.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4">Web Development Competitive Advantage</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Edge Web for Smarter Devices</li>
                  <li>• Secure and Ethical Web Practices</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
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

        {/* Who We Are */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Expert web solutions with real impact
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We are a modern web development agency specializing in custom websites, SaaS, e-commerce, and digital solutions. Whether you're a startup or a global enterprise, our mission is simple: build digital tools that solve real-world problems.
                </p>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                    <div className="text-gray-600">Web Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
                    <div className="text-gray-600">Industries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                    <div className="text-gray-600">Client Satisfied Rate</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Driven by Data, Inspired by Impact</h3>
                  <p className="text-gray-600">
                    We design digital solutions that learn from data and automate complex processes—enhancing efficiency, 
                    accuracy, and scalability across industries. Our expert team leverages cutting-edge web development technologies.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Experts in Web Development & Automation</h3>
                  <p className="text-gray-600">
                    We design digital solutions that learn from data and automate complex processes—enhancing efficiency, 
                    accuracy, and scalability across industries. Our expert team leverages cutting-edge web development technologies.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cutting-Edge Research & Development</h3>
                  <p className="text-gray-600">
                    We design digital solutions that learn from data and automate complex processes—enhancing efficiency, 
                    accuracy, and scalability across industries. Our expert team leverages cutting-edge web development technologies.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team */}
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
                Dedicated experts committed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">intelligent progress</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 overflow-hidden">
                    {member.avatar ? (
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      member.name.split(' ').map(n => n[0]).join('')
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
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
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
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
                We are a modern web development agency specializing in custom websites, SaaS, e-commerce, and digital solutions 
                to build digital tools that solve real-world problems.
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
                <div className="text-xl text-gray-300">Client Satisfaction Rate in Our Agency</div>
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
                  <div className="text-sm text-gray-600">Airbnb 5 star reviews</div>
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
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">web?</span>
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

export default About;