import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendar, FaUser } from 'react-icons/fa';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Static blog posts as fallback
  const staticPosts = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt: "Explore the latest trends in web development, from AI-powered tools to advanced frameworks that are shaping the future of the web.",
      category: "Web Development",
      author: "LaunchLayer Team",
      date: "2024-01-15",
      slug: "future-web-development-2024"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Applications",
      excerpt: "Learn essential security practices to protect your applications from common vulnerabilities and cyber threats.",
      category: "Cybersecurity",
      author: "Security Expert",
      date: "2024-01-10",
      slug: "cybersecurity-best-practices"
    },
    {
      id: 3,
      title: "Building Scalable SaaS Applications with React",
      excerpt: "A comprehensive guide to building scalable SaaS applications using React, Node.js, and modern cloud technologies.",
      category: "SaaS Development",
      author: "Tech Lead",
      date: "2024-01-05",
      slug: "scalable-saas-react"
    },
    {
      id: 4,
      title: "UI/UX Design Trends That Drive User Engagement",
      excerpt: "Discover the latest UI/UX design trends that can significantly improve user engagement and conversion rates.",
      category: "Design",
      author: "Design Team",
      date: "2024-01-01",
      slug: "ui-ux-design-trends"
    },
    {
      id: 5,
      title: "Digital Marketing Strategies for Tech Companies",
      excerpt: "Effective digital marketing strategies specifically tailored for technology companies and SaaS businesses.",
      category: "Marketing",
      author: "Marketing Expert",
      date: "2023-12-28",
      slug: "digital-marketing-tech"
    },
    {
      id: 6,
      title: "Performance Optimization Techniques for Web Apps",
      excerpt: "Advanced techniques to optimize your web application performance and improve user experience.",
      category: "Performance",
      author: "Performance Engineer",
      date: "2023-12-25",
      slug: "performance-optimization-web-apps"
    }
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/blog');
        if (response.data.success) {
          setPosts(response.data.data);
        } else {
          setPosts(staticPosts);
        }
      } catch (error) {
        console.log('Using static blog posts');
        setPosts(staticPosts);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  },);

  return (
    <>
      <Helmet>
        <title>Blog - LaunchLayer | Insights & Updates</title>
        <meta name="description" content="Read the latest articles, insights, and updates from LaunchLayer. Stay informed on web development, cybersecurity, and tech trends." />
        <link rel="canonical" href="https://launchlayer.com/blog" />
      </Helmet>
      <main className="pt-16 md:pt-20">
        <section className="section-padding gradient-bg text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-secondary-300">Blog</span></h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Insights, tips, and updates on web development, cybersecurity, and digital innovation.
            </p>
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Articles</h2>
            {loading ? (
              <div className="text-center">
                <div className="spinner mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading blog posts...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-12">
                {posts.map((post, idx) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 32, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.12, type: 'spring', stiffness: 80 }}
                    className="group relative bg-gradient-to-br from-primary-50 via-secondary-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/60 hover:ring-4 hover:ring-blue-500/10 transition-all duration-300 flex flex-col focus-within:ring-2 focus-within:ring-blue-400"
                    tabIndex={0}
                    aria-label={`Blog post: ${post.title}`}
                    as="article"
                  >
                    {/* Prominent Icon/Avatar */}
                    <div className="h-40 flex items-center justify-center rounded-t-3xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900">
                      <span className="text-4xl font-extrabold text-primary-600 dark:text-blue-300 drop-shadow-lg">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-primary-600 dark:text-blue-300 bg-primary-50 dark:bg-blue-900/40 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <FaCalendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <FaUser className="w-3 h-3 mr-1" />
                          {post.author}
                        </div>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-primary-600 dark:text-blue-300 hover:text-primary-700 dark:hover:text-blue-400 font-medium group-hover:translate-x-1 transition-transform duration-200 animate-pulse focus:outline-none focus:ring-2 focus:ring-blue-400"
                          aria-label={`Read more: ${post.title}`}
                        >
                          Read More
                          <FaArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog; 