import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram,
  FaGithub
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'All Services', path: '/services' },
      { name: 'Web Development', path: '/services#web-development' },
      { name: 'Cybersecurity', path: '/services#cybersecurity' },
      { name: 'App Development', path: '/services#app-development' },
      { name: 'Software Solutions', path: '/services#software-solutions' },
      { name: 'UI/UX Design', path: '/services#ui-ux-design' },
      { name: 'SEO & Marketing', path: '/services#seo-marketing' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'Careers', path: '/careers' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Events', path: '/events' },
      { name: 'Contact', path: '/contact' }
    ],
    support: [
      { name: 'Support Center', path: '/support' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Documentation', path: '/support' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' }
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Webinars', path: '/events' },
      { name: 'Community', path: '/events' }
    ]
  };

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61577194005964', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/launchlayers/?viewAsMember=true', label: 'LinkedIn' },
    { icon: FaInstagram, href: '/', label: 'Instagram' },
    { icon: FaGithub, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-8 sm:py-12 md:py-16">
        {/* Company Info - Full Width */}
        <div className="mb-8 sm:mb-12">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <img src="/logo.png" alt="LaunchLayer Logo" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain flex-shrink-0" />
            <span className="break-words" style={{ fontFamily: 'Garamond, serif', fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '2rem' }}>
              <span style={{ color: '#4477a6' }}>Launch</span>
              <span style={{ color: '#4579a7' }}>Layer</span>
            </span>
          </Link>
          <p className="text-gray-300 mb-4 sm:mb-6 max-w-sm leading-relaxed text-sm sm:text-base break-words">
            Empowering businesses with innovative technology solutions to help them thrive in the digital age.
          </p>
          <div className="flex space-x-3 sm:space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 flex-shrink-0"
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 break-words">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 py-1 block text-xs sm:text-sm lg:text-base break-words"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 break-words">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 py-1 block text-xs sm:text-sm lg:text-base break-words"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 break-words">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 py-1 block text-xs sm:text-sm lg:text-base break-words"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 break-words">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 py-1 block text-xs sm:text-sm lg:text-base break-words"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left break-words">
              © {currentYear} LaunchLayer. All rights reserved. Built with 💙 in Bangladesh.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 break-words">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 break-words">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 