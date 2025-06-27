import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | LaunchLayer</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to LaunchLayer homepage." />
      </Helmet>

      <main className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaRocket className="w-16 h-16 text-white" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold text-gray-900 mb-4"
            >
              404
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4"
            >
              Page Not Found
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-md mx-auto"
            >
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <FaHome className="w-4 h-4" />
                <span>Go Home</span>
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="btn-outline inline-flex items-center space-x-2"
              >
                <FaArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </button>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound; 