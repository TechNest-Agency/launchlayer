import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const events = [
  {
    id: 1,
    title: "Web Security Best Practices",
    type: "Webinar",
    date: "June 15, 2024",
    time: "2:00 PM GMT+6",
    location: "Online",
    description: "Learn the latest web security practices and how to protect your applications from common vulnerabilities.",
    attendees: 150,
    status: "upcoming"
  },
  {
    id: 2,
    title: "React Development Workshop",
    type: "Workshop",
    date: "June 22, 2024",
    time: "10:00 AM GMT+6",
    location: "Dhaka, Bangladesh",
    description: "Hands-on workshop covering React best practices, performance optimization, and modern development techniques.",
    attendees: 25,
    status: "upcoming"
  },
  {
    id: 3,
    title: "Digital Marketing Strategies",
    type: "Meetup",
    date: "July 5, 2024",
    time: "6:00 PM GMT+6",
    location: "Dhaka, Bangladesh",
    description: "Network with fellow marketers and learn about the latest digital marketing trends and strategies.",
    attendees: 40,
    status: "upcoming"
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals",
    type: "Webinar",
    date: "May 20, 2024",
    time: "3:00 PM GMT+6",
    location: "Online",
    description: "Understanding the basics of cybersecurity and how to implement security measures in your projects.",
    attendees: 200,
    status: "past"
  }
];

const Events = () => {
  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const pastEvents = events.filter(event => event.status === 'past');

  return (
    <>
      <Helmet>
        <title>Events - LaunchLayer | Webinars, Workshops & Meetups</title>
        <meta name="description" content="Join LaunchLayer events: webinars, workshops, and meetups on web development, cybersecurity, and digital marketing." />
        <link rel="canonical" href="https://launchlayer.com/events" />
      </Helmet>
      <main className="pt-16 md:pt-20">
        <section className="section-padding gradient-bg text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & <span className="text-secondary-300">Community</span></h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Join our community events, webinars, and workshops to learn, network, and stay updated with the latest in technology.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/30 bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg hover:scale-105 hover:shadow-3xl transition-all duration-300 group"
                >
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="w-full h-full bg-gradient-to-br from-blue-200/30 via-purple-200/20 to-cyan-200/10 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-cyan-900/10 rounded-2xl" />
                  </div>
                  <div className="relative z-10">
                    <div className="h-32 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center rounded-t-2xl">
                      <FaCalendar className="w-8 h-8 text-white" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                          {event.type}
                        </span>
                        <span className="text-sm text-gray-500">{event.attendees} attendees</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors duration-200">{event.title}</h3>
                      <p className="text-gray-600 dark:text-gray-200 mb-4">{event.description}</p>
                      <div className="space-y-2 text-sm text-gray-500 dark:text-gray-300">
                        <div className="flex items-center">
                          <FaCalendar className="w-4 h-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <FaClock className="w-4 h-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                      <button className="w-full mt-4 btn-primary">
                        Register Now
                      </button>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -bottom-2 w-32 h-8 bg-gradient-to-r from-blue-400/30 via-purple-400/20 to-cyan-400/10 blur-xl opacity-60 -translate-x-1/2 group-hover:opacity-90 transition-all duration-300" />
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Past Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/30 bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg opacity-75 group"
                >
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="w-full h-full bg-gradient-to-br from-blue-200/30 via-purple-200/20 to-cyan-200/10 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-cyan-900/10 rounded-2xl" />
                  </div>
                  <div className="relative z-10">
                    <div className="h-32 bg-gray-400 flex items-center justify-center rounded-t-2xl">
                      <FaCalendar className="w-8 h-8 text-white" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                          {event.type}
                        </span>
                        <span className="text-sm text-gray-500">{event.attendees} attendees</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{event.title}</h3>
                      <p className="text-gray-600 dark:text-gray-200 mb-4">{event.description}</p>
                      <div className="space-y-2 text-sm text-gray-500 dark:text-gray-300">
                        <div className="flex items-center">
                          <FaCalendar className="w-4 h-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <FaClock className="w-4 h-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                      <button className="w-full mt-4 btn-outline" disabled>
                        Event Completed
                      </button>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -bottom-2 w-32 h-8 bg-gradient-to-r from-blue-400/30 via-purple-400/20 to-cyan-400/10 blur-xl opacity-60 -translate-x-1/2 group-hover:opacity-90 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get notified about upcoming events, webinars, and community meetups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary px-6 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Events; 