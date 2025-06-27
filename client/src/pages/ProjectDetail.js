import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaArrowLeft, 
  FaGlobe, 
  FaMobile, 
  FaShieldAlt,
  FaCalendarAlt,
  FaUsers,
  FaCode,
  FaDatabase,
  FaCloud,
  FaRocket,
  FaCheckCircle,
  FaStar,
  FaEye,
  FaDownload
} from 'react-icons/fa';
import projects from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [galleryModal, setGalleryModal] = useState({ open: false, img: null });

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(id));
    setProject(foundProject);
    setLoading(false);
  }, [id]);

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'web development':
        return <FaGlobe className="w-6 h-6" />;
      case 'mobile app':
        return <FaMobile className="w-6 h-6" />;
      case 'cybersecurity':
        return <FaShieldAlt className="w-6 h-6" />;
      default:
        return <FaGlobe className="w-6 h-6" />;
    }
  };

  if (loading) {
    return (
      <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="spinner mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
          <Link to="/portfolio" className="btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - LaunchLayer | Project Details</title>
        <meta name="description" content={project.description} />
        <link rel="canonical" href={`https://launchlayer.com/portfolio/${project.id}`} />
      </Helmet>
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[400px] flex items-end w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-[#232336cc] to-transparent z-10" />
          <div className="container-custom relative z-20 pb-12 pt-32 flex flex-col md:flex-row md:items-end md:justify-between w-full">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-4 mb-4"
              >
                <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 text-white">
                  {getCategoryIcon(project.category)}
                  <span className="ml-2">{project.category}</span>
                </span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {project.status}
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-white/80 max-w-2xl mb-6"
              >
                {project.longDescription}
              </motion.p>
              <div className="flex flex-wrap gap-4 mb-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center">
                    <FaExternalLinkAlt className="w-4 h-4 mr-2" /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center">
                    <FaGithub className="w-4 h-4 mr-2" /> View Code
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 md:items-end mt-8 md:mt-0">
              <div className="flex gap-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="bg-white/10 px-4 py-2 rounded-lg text-white text-sm font-semibold flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="text-lg font-bold animate-pulse">{project.rating}</span>/5.0
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="bg-white/10 px-4 py-2 rounded-lg text-white text-sm font-semibold flex items-center gap-2">
                  <FaEye className="text-blue-400" />
                  <span className="text-lg font-bold animate-pulse">{project.views.toLocaleString()}</span> Views
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="bg-white/10 px-4 py-2 rounded-lg text-white text-sm font-semibold flex items-center gap-2">
                  <FaDownload className="text-green-400" />
                  <span className="text-lg font-bold animate-pulse">{project.downloads}</span> Downloads
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* Divider */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40" />
        {/* Main Content & Sidebar */}
        <main className="container-custom py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Gallery */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => setGalleryModal({ open: true, img: image })}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Screenshot ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
              {/* Modal/Lightbox */}
              {galleryModal.open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setGalleryModal({ open: false, img: null })}>
                  <img src={galleryModal.img} alt="Gallery Large" className="max-w-3xl max-h-[80vh] rounded-2xl shadow-2xl border-4 border-white/10" />
                </div>
              )}
            </div>
            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
                  >
                    <FaCheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Challenges & Solutions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges & Solutions</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge {index + 1}</h3>
                    <p className="text-gray-600 mb-3">{challenge}</p>
                    <h4 className="font-medium text-primary-600 mb-1">Solution:</h4>
                    <p className="text-gray-700">{project.solutions[index]}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <aside className="sticky top-32 space-y-8 h-fit">
            {/* Technologies */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/30">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-medium shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Project Info */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/30">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Client:</span>
                  <span className="font-medium">{project.client}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Industry:</span>
                  <span className="font-medium">{project.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{project.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Team Size:</span>
                  <span className="font-medium">{project.teamSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium text-green-600">{project.status}</span>
                </div>
              </div>
            </div>
            {/* Stats */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/30">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaStar className="w-4 h-4 text-yellow-500 mr-2" />
                    <span className="text-gray-600">Rating</span>
                  </div>
                  <span className="font-medium">{project.rating}/5.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaEye className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="text-gray-600">Views</span>
                  </div>
                  <span className="font-medium">{project.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaDownload className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-600">Downloads</span>
                  </div>
                  <span className="font-medium">{project.downloads}</span>
                </div>
              </div>
            </div>
            {/* CTA */}
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-2xl p-6 shadow-xl border border-white/30">
              <h3 className="text-lg font-semibold mb-4">Interested in Similar Project?</h3>
              <p className="text-white/90 mb-6">Let's discuss how we can help bring your vision to life.</p>
              <Link to="/contact" className="btn-white w-full text-center">
                Get Started
              </Link>
            </div>
          </aside>
        </main>
      </main>
    </>
  );
};

export default ProjectDetail; 