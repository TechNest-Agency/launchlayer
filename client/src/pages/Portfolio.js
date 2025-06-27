import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import projects from '../data/projects';

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects - LaunchLayer Web Agency</title>
        <meta name="description" content="Explore our web development projects: e-commerce, SaaS dashboards, portfolios, booking systems, and more." />
        <link rel="canonical" href="/portfolio" />
      </Helmet>
      <main className="pt-16 md:pt-20 bg-[#111112] min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative">
          <div className="container-custom relative z-10 text-center">
            <nav className="flex justify-center mb-6 text-sm">
              <span className="text-gray-300">Home</span>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-white">Our Projects</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
            </h1>
          </div>
        </section>
        {/* Projects Grid */}
        <section className="py-24 bg-[#111112]">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
              {projects.map((project, idx) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 32, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.12, type: 'spring', stiffness: 80 }}
                  className="relative bg-gradient-to-br from-[#18181b] via-[#232336] to-[#18181b] rounded-3xl p-0 shadow-xl hover:shadow-2xl border border-gray-800 hover:border-blue-500/70 hover:ring-4 hover:ring-blue-500/10 transition-all duration-300 text-white min-h-[340px] flex flex-col group overflow-hidden focus-within:ring-2 focus-within:ring-blue-400"
                  tabIndex={0}
                  aria-label={`Project: ${project.title}`}
                  as="article"
                >
                  {/* Project Image */}
                  <div className="h-44 w-full overflow-hidden rounded-t-3xl bg-[#222]">
                    <img
                      src={project.image || '/images/portfolio/default.jpg'}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110 group-hover:brightness-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col flex-1">
                    <h3 className="text-2xl font-extrabold mb-3 leading-tight tracking-tight font-display">
                      {project.title}
                    </h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-6 group-hover:w-20 transition-all duration-300"></div>
                    <p className="text-gray-300 text-base leading-relaxed mb-6 md:mb-8">
                      {project.description}
                    </p>
                    {/* Tech stack badge */}
                    {project.tech && Array.isArray(project.tech) && project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-auto">
                      <a
                        href={`/portfolio/${idx + 1}`}
                        className="inline-block px-6 py-2 rounded-lg bg-white/10 text-white font-semibold tracking-wide border border-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 shadow group-hover:scale-105 animate-pulse focus:outline-none focus:ring-2 focus:ring-blue-400"
                        aria-label={`View project: ${project.title}`}
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  {/* Glassmorphism effect */}
                  <div className="absolute inset-0 pointer-events-none rounded-3xl bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio; 