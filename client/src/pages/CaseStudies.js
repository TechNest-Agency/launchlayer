import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Platform Transformation",
    client: "TechStart Inc.",
    industry: "E-Commerce",
    challenge: "Legacy system causing 40% cart abandonment and poor mobile experience",
    solution: "Built modern React-based platform with secure payment integration and mobile-first design",
    results: [
      "300% increase in sales within first month",
      "Cart abandonment reduced by 60%",
      "Mobile conversion rate improved by 150%",
      "99.9% uptime achieved"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    duration: "3 months"
  },
  {
    id: 2,
    title: "Healthcare Security Dashboard",
    client: "HealthCare Plus",
    industry: "Healthcare",
    challenge: "HIPAA compliance issues and manual security monitoring",
    solution: "Developed automated security monitoring system with real-time threat detection",
    results: [
      "100% HIPAA compliance achieved",
      "Security incidents reduced by 80%",
      "Automated monitoring saves 20 hours/week",
      "Real-time threat detection implemented"
    ],
    technologies: ["React", "Python", "Django", "PostgreSQL", "Docker"],
    duration: "4 months"
  },
  {
    id: 3,
    title: "Food Delivery App Revolution",
    client: "FoodExpress",
    industry: "Food & Delivery",
    challenge: "Inefficient delivery routing and poor customer experience",
    solution: "Cross-platform app with real-time tracking and AI-powered route optimization",
    results: [
      "Delivery time reduced by 35%",
      "Customer satisfaction increased by 200%",
      "Driver efficiency improved by 40%",
      "App store rating: 4.8/5"
    ],
    technologies: ["React Native", "Firebase", "Google Maps API", "Stripe", "Node.js"],
    duration: "5 months"
  }
];

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - LaunchLayer | Success Stories</title>
        <meta name="description" content="Explore our case studies and success stories. See how LaunchLayer helped clients achieve remarkable results." />
        <link rel="canonical" href="https://launchlayer.com/case-studies" />
      </Helmet>
      <main className="pt-16 md:pt-20">
        <section className="section-padding gradient-bg text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case <span className="text-secondary-300">Studies</span></h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Real projects, real results. See how we've helped our clients achieve remarkable success through innovative technology solutions.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="card overflow-hidden"
                >
                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                            {study.industry}
                          </span>
                          <span className="text-sm text-gray-500">{study.duration}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h2>
                        <p className="text-lg text-gray-600 mb-6">
                          <strong>Client:</strong> {study.client}
                        </p>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">The Challenge</h3>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Our Solution</h3>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <FaChartLine className="w-5 h-5 text-secondary-500 mr-2" />
                          Results Achieved
                        </h3>
                        <ul className="space-y-3">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start">
                              <FaShieldAlt className="w-4 h-4 text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Start Your Success Story?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseStudies; 