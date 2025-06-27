import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What industries do you serve?',
    answer: 'We work with startups, SMBs, and enterprises across industries including e-commerce, healthcare, finance, education, and more.'
  },
  {
    question: 'How do you ensure security in your projects?',
    answer: 'We follow secure coding practices, conduct regular security audits, and use the latest tools and frameworks to protect your applications.'
  },
  {
    question: 'What is your project delivery process?',
    answer: 'We use agile methodologies, provide regular updates, and involve clients at every stage to ensure transparency and satisfaction.'
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Yes, we offer 24/7 technical support and maintenance packages for all our solutions.'
  },
  {
    question: 'How do I get a quote?',
    answer: 'Simply fill out our contact form or email us at hello@launchlayer.com. We\'ll get back to you within 24 hours.'
  },
  {
    question: 'Can you help with digital marketing?',
    answer: 'Absolutely! We offer SEO, social media growth, and ad campaign management as part of our services.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <>
      <Helmet>
        <title>FAQ - LaunchLayer | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about LaunchLayer's services, process, and support." />
        <link rel="canonical" href="https://launchlayer.com/faq" />
      </Helmet>
      <main className="pt-16 md:pt-20">
        <section className="section-padding gradient-bg text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-secondary-300">Questions</span></h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Answers to the most common questions about our services, process, and support.
            </p>
          </div>
        </section>
        <section className="section-padding bg-white dark:bg-gray-900">
          <div className="container-custom max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <FaQuestionCircle className="w-10 h-10 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">General Questions</h2>
            </div>
            <div className="space-y-6 md:space-y-8">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <motion.article
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`bg-gradient-to-br from-primary-50 via-secondary-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-blue-400 group ${isOpen ? 'ring-2 ring-blue-400' : ''}`}
                    tabIndex={0}
                    aria-expanded={isOpen}
                    aria-label={`FAQ: ${faq.question}`}
                    onClick={() => toggleFAQ(idx)}
                    onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggleFAQ(idx)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg md:text-xl font-semibold text-primary-600 dark:text-blue-300 mb-0">
                        {faq.question}
                      </h3>
                      <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <FaChevronDown className="w-5 h-5 text-primary-600 dark:text-blue-300" />
                      </span>
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-700 dark:text-gray-200 mt-4 text-base md:text-lg leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ; 