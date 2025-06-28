import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const openPositions = [
  {
    title: 'Full Stack Developer',
    type: 'Full Time',
    location: 'Remote',
    description: 'Work with React, Node.js, and MongoDB to build secure, scalable web apps.'
  },
  {
    title: 'UI/UX Designer',
    type: 'Part Time',
    location: 'Dhaka, Bangladesh',
    description: 'Design beautiful, user-friendly interfaces and collaborate with developers.'
  },
  {
    title: 'Cybersecurity Analyst',
    type: 'Contract',
    location: 'Remote',
    description: 'Perform security audits, pen-testing, and help secure client applications.'
  }
];

const Careers = () => {
  const [form, setForm] = useState({ name: '', email: '', position: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', position: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Careers - Join LaunchLayer</title>
        <meta name="description" content="Join the LaunchLayer team! See open positions and apply to work with a leading IT firm." />
        <link rel="canonical" href="https://launchlayer.com/careers" />
      </Helmet>
      <main className="pt-16 md:pt-20">
        <section className="section-padding gradient-bg text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join <span className="text-secondary-300">Our Team</span></h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We're always looking for talented, passionate people to join LaunchLayer and help us build the future of secure, smart technology.
            </p>
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {openPositions.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/30 bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg hover:scale-105 hover:shadow-3xl transition-all duration-300 group p-6"
                >
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="w-full h-full bg-gradient-to-br from-blue-200/30 via-purple-200/20 to-cyan-200/10 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-cyan-900/10 rounded-2xl" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2 group-hover:text-primary-500 transition-colors duration-200">{job.title}</h3>
                    <div className="text-sm text-gray-500 dark:text-gray-300 mb-2">{job.type} | {job.location}</div>
                    <p className="text-gray-700 dark:text-gray-200 mb-4">{job.description}</p>
                    <span className="inline-block bg-primary-100/80 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-full text-xs font-medium">Apply Below</span>
                  </div>
                  <div className="absolute left-1/2 -bottom-2 w-32 h-8 bg-gradient-to-r from-blue-400/30 via-purple-400/20 to-cyan-400/10 blur-xl opacity-60 -translate-x-1/2 group-hover:opacity-90 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
            <div className="max-w-xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Apply Now</h2>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center"
                >
                  <FaCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-green-700">Thank you for applying! We'll be in touch soon.</span>
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className="form-input" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="form-input" required />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">Position Interested In *</label>
                  <select id="position" name="position" value={form.position} onChange={handleChange} className="form-select" required>
                    <option value="">Select a position</option>
                    {openPositions.map((job, idx) => (
                      <option key={idx} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Why do you want to join us?</label>
                  <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className="form-textarea" placeholder="Tell us about yourself, your experience, and why you'd be a great fit!" />
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg">Submit Application</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Careers; 