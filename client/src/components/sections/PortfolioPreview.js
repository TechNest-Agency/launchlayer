import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaShoppingCart, FaChartLine, FaPalette } from 'react-icons/fa';
import axios from 'axios';

const PortfolioPreview = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/portfolio?limit=3');
        if (response.data.success) {
          setProjects(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching portfolio:', error);
        // Fallback to web development sample data
        setProjects([
          {
            id: 1,
            title: "E-Commerce Website",
            category: "Web Development",
            description: "A scalable online store with secure payments, inventory management, and a seamless shopping experience.",
            technologies: ["React", "Node.js", "Stripe", "MongoDB", "AWS"],
            image: "/images/portfolio/ecommerce.jpg",
            liveUrl: "https://ecommerce-demo.launchlayer.com",
            githubUrl: "https://github.com/launchlayer/ecommerce-platform",
            icon: FaShoppingCart,
            color: "from-orange-500 to-red-500"
          },
          {
            id: 2,
            title: "SaaS Dashboard",
            category: "SaaS Platform",
            description: "A modern SaaS dashboard for managing users, analytics, and subscriptions with real-time updates.",
            technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Socket.io"],
            image: "/images/portfolio/saas.jpg",
            liveUrl: "https://saas-demo.launchlayer.com",
            githubUrl: "https://github.com/launchlayer/saas-dashboard",
            icon: FaChartLine,
            color: "from-blue-500 to-cyan-500"
          },
          {
            id: 3,
            title: "Portfolio Website",
            category: "UI/UX Design",
            description: "A creative portfolio site with smooth animations, responsive design, and a CMS for easy updates.",
            technologies: ["React", "Framer Motion", "Netlify CMS", "TailwindCSS"],
            image: "/images/portfolio/portfolio.jpg",
            liveUrl: "https://portfolio-demo.launchlayer.com",
            githubUrl: "https://github.com/launchlayer/portfolio-site",
            icon: FaPalette,
            color: "from-pink-500 to-yellow-500"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="section-padding bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container-custom">
          <div className="text-center">
            <div className="spinner mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading web projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
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
            Showcasing our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              web solutions
            </span>{' '}
            & success projects
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our web development projects that demonstrate our expertise in e-commerce, SaaS, UI/UX, and digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  {/* Project Header */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative text-center text-white">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                        {IconComponent && typeof IconComponent === 'function' ? (
                          <IconComponent className="w-10 h-10" />
                        ) : (
                          <FaShoppingCart className="w-10 h-10" />
                        )}
                      </div>
                      <p className="text-sm font-medium">Web Solution</p>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                          >
                            <FaExternalLinkAlt className="w-5 h-5 text-white" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                          >
                            <FaGithub className="w-5 h-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-sm font-semibold text-transparent bg-gradient-to-r ${project.color} bg-clip-text px-3 py-1 rounded-full border border-gray-200`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* View Details Link */}
                    <Link
                      to={`/portfolio/${project.id}`}
                      className={`inline-flex items-center text-transparent bg-gradient-to-r ${project.color} bg-clip-text font-semibold hover:scale-105 transition-all duration-200 group-hover:translate-x-1`}
                    >
                      View Details
                      <FaArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Impressive stats backing our web solutions
            </h3>
            <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
              We are a forward-thinking web development agency specializing in cutting-edge web development solutions to build web-powered tools that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "200+", label: "Web Development Project Complete" },
                { number: "98%", label: "Client Satisfaction Rate in Our Agency" },
                { number: "150+", label: "Custom Web Solutions Delivered" },
                { number: "24/7", label: "Web Support Available" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>View All Web Projects</span>
            <FaArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview; 