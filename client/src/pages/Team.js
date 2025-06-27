import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaEnvelope, 
  FaGlobe,
  FaStar,
  FaCode,
  FaShieldAlt,
  FaPalette,
  FaUsers,
  FaRocket,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: 'Nazat Hossain',
    role: 'CEO',
    department: 'Full Stack Developer || Cyber Security Expert',
    experience: '5+ years',
    location: 'Dhaka, Bangladesh',
    joinDate: 'January 2022',
    avatar: 'NH',
    avatarImg: '/ceo.png',
    bio: 'Passionate full-stack developer with expertise in modern web technologies. Leads our development team and ensures code quality across all projects.',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker', 'GraphQL'],
    expertise: ['Full-Stack Development', 'System Architecture', 'Team Leadership', 'Code Review'],
    education: 'HSC',
    certifications: ['AWS Certified Developer', 'MongoDB Certified Developer'],
    projects: ['E-commerce Platform', 'Healthcare Dashboard', 'FinTech Application'],
    achievements: ['Led 15+ successful projects', 'Mentored 10+ junior developers', '99.9% client satisfaction'],
    social: {
      linkedin: 'https://www.linkedin.com/in/nazat-mern-stack/',
      github: '#',
      twitter: '#',
      website: 'https://nhportfolio.vercel.app/'
    },
    contact: {
      email: 'hossainnazat55@gmail.com',
      phone: '+880-132-9478744'
    },
    availability: 'Available for new projects',
    languages: ['English', 'Bengali'],
    interests: ['Open Source', 'AI/ML', 'Blockchain', 'Hiking']
  },
  {
    id: 2,
    name: 'Halima Khatun',
    role: 'UI/UX Designer',
    department: 'UI/UX Designer',
    experience: '2+ years',
    location: 'Dhaka, Bangladesh',
    joinDate: 'January 2025',
    avatar: 'HK',
    avatarImg: '/halima.png',
    bio: 'UI/UX Designer specializing in creating intuitive and visually appealing user interfaces for web and mobile applications.',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems', 'Accessibility'],
    expertise: ['User Experience Design', 'Visual Design', 'Design Strategy', 'User Testing'],
    education: 'BSc in Computer Science, BUET',
    certifications: ['Figma Certified Designer', 'Adobe Certified Expert'],
    projects: ['E-commerce Platform', 'Healthcare Dashboard', 'FinTech Application'],
    achievements: ['Led 15+ successful projects', 'Mentored 10+ junior developers', '99.9% client satisfaction'],
    social: {
      linkedin: 'https://www.linkedin.com/in/halimakhatun/',
      github: '#',
      twitter: '#'
    },
    contact: {
      email: 'halimakhatun123@gmail.com',
      phone: '+880-132-9478744'
    },
    availability: 'Available for design projects',
    languages: ['English', 'Bengali'],
    interests: ['Design Systems', 'Typography', 'Photography', 'Travel']
  },
  {
    id: 3,
    name: 'Marufa Akter',
    role: 'UI/UX Designer',
    department: 'UI/UX Designer',
    experience: '2+ years',
    location: 'Dhaka, Bangladesh',
    joinDate: 'January 2025',
    avatar: 'MA',
    avatarImg: '/team/marufa.jpg',
    bio: 'UI/UX Designer specializing in creating intuitive and visually appealing user interfaces for web and mobile applications.',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems', 'Accessibility'],
    expertise: ['User Experience Design', 'Visual Design', 'Design Strategy', 'User Testing'],
    education: 'BSc in Computer Science, BUET',
    certifications: ['Figma Certified Designer', 'Adobe Certified Expert'],
    projects: ['E-commerce Platform', 'Healthcare Dashboard', 'FinTech Application'],
    achievements: ['Led 15+ successful projects', 'Mentored 10+ junior developers', '99.9% client satisfaction'],
    social: {
      linkedin: 'https://www.linkedin.com/in/marufa-akter-0000000000/',
      behance: '#',
      dribbble: '#'
    },
    contact: {
      email: 'marufaakter123@gmail.com',
      phone: '+880-132-9478744'
    },
    availability: 'Available for design projects',
    languages: ['English', 'Bengali'],
    interests: ['Design Systems', 'Typography', 'Photography', 'Travel', 'Reading']
  },
  {
    id: 4,
    name: 'Nure Jannat Mim',
    role: 'Digital Marketer',
    department: 'Digital Marketer',
    experience: '2+ years',
    location: 'Dhaka, Bangladesh',
    joinDate: 'January 2025',
    avatar: 'NJ',
    avatarImg: '/jannat.jpeg',
    bio: 'Digital Marketer specializing in creating and implementing digital marketing strategies to increase brand awareness and drive sales.',
    skills: ['SEO', 'Social Media Marketing', 'Content Strategy', 'Google Ads', 'Analytics', 'Email Marketing'],
    expertise: ['Brand Strategy', 'Lead Generation', 'Conversion Optimization', 'Market Research'],
    education: 'BSc in Computer Science, BUET',
    certifications: ['Google Ads Certified', 'HubSpot Inbound Marketing', 'Facebook Blueprint'],
    projects: ['E-commerce Marketing', 'B2B Lead Generation', 'Brand Awareness Campaigns'],
    achievements: ['Increased organic traffic by 200%', 'Generated 500+ qualified leads', 'Improved conversion rate by 150%'],
    social: {
      linkedin: 'https://www.linkedin.com/in/nure-jannat-mim-0000000000/',
      twitter: '#'
    },
    contact: {
      email: 'nurejannatmim123@gmail.com',
      phone: '+880-132-9478744'
    },
    availability: 'Available for marketing projects',
    languages: ['English', 'Bengali'],
    interests: ['Content Creation', 'Social Media Trends', 'Photography', 'Travel', 'Reading']
  },
  {
    id: 5,
    name: 'Saima Tanzim Rickty',
    role: 'Sales Manager',
    department: 'Sales Manager',
    experience: '2+ years',
    location: 'Dhaka, Bangladesh',
    joinDate: 'January 2025',
    avatar: 'ST',
    avatarImg: '/team/saima.jpg',
    bio: 'Sales Manager specializing in building and maintaining strong client relationships to drive business growth.',
    skills: ['Sales', 'Marketing', 'Customer Service', 'Negotiation', 'CRM', 'Sales Strategy'],
    expertise: ['Sales Management', 'Sales Strategy', 'Customer Relationship Management', 'Sales Training'],
    education: 'BSc in Computer Science, BUET',
    certifications: ['Sales Management', 'Sales Strategy', 'Customer Relationship Management', 'Sales Training'],
    projects: ['E-commerce Sales', 'B2B Lead Generation', 'Brand Awareness Campaigns'],
    achievements: ['Increased sales by 200%', 'Generated 500+ qualified leads', 'Improved conversion rate by 150%'],
    social: {
      linkedin: 'https://www.linkedin.com/in/saima-tanzim-rickty-0000000000/',
      github: '#'
    },
    contact: {
      email: 'saimatanzimrickty123@gmail.com',
      phone: '+880-132-9478744'
    },
    availability: 'Available for sales projects',
    languages: ['English', 'Bengali'],
    interests: ['Sales', 'Marketing', 'Customer Service', 'Negotiation', 'CRM', 'Sales Strategy']
  },
  {
    id: 6,
    name: 'Tafroza Tofaz',
    role: 'Sales Manager',
    department: 'Sales Manager',
    experience: '2+ years',
    location: 'Dhaka, Bangladesh',
    joinDate: 'January 2025',
    avatar: 'TT',
    avatarImg: '/team/tafroza.jpg',
    bio: 'Sales Manager specializing in building and maintaining strong client relationships to drive business growth.',
    skills: ['Sales', 'Marketing', 'Customer Service', 'Negotiation', 'CRM', 'Sales Strategy'],
    expertise: ['Sales Management', 'Sales Strategy', 'Customer Relationship Management', 'Sales Training'],
    education: 'BSc in Computer Science, BUET',
    certifications: ['Sales Management', 'Sales Strategy', 'Customer Relationship Management', 'Sales Training'],
    projects: ['E-commerce Sales', 'B2B Lead Generation', 'Brand Awareness Campaigns'],
    achievements: ['Increased sales by 200%', 'Generated 500+ qualified leads', 'Improved conversion rate by 150%'],
    social: {
      linkedin: 'https://www.linkedin.com/in/tafroza-tofaz-0000000000/',
      twitter: '#'
    },
    contact: {
      email: 'tafrozatofaz123@gmail.com',
      phone: '+880-132-9478744'
    },
    availability: 'Available for sales projects',
    languages: ['English', 'Bengali'],
    interests: ['Sales', 'Marketing', 'Customer Service', 'Negotiation', 'CRM', 'Sales Strategy']
  },
  {
    id: 7,
    name: 'Sumaiya Amin Prova',
    role: 'Frontend Developer',
    department: 'Frontend Developer',
    experience: '2+ years',
    location: 'Dhaka, Bangladesh',
    joinDate: 'January 2025',
    avatar: 'SP',
    avatarImg: '/sumaiya.png',
    bio: 'Frontend Developer specializing in building and maintaining strong client relationships to drive business growth.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'GraphQL'],
    expertise: ['Frontend Development', 'System Architecture', 'Team Leadership', 'Code Review'],
    education: 'BSc in Computer Science, BUET',
    certifications: ['AWS Certified Developer', 'MongoDB Certified Developer'],
    projects: ['E-commerce Platform', 'Healthcare Dashboard', 'FinTech Application'],
    achievements: ['Led 15+ successful projects', 'Mentored 10+ junior developers', '99.9% client satisfaction'],
    social: {
      linkedin: 'https://www.linkedin.com/in/sumaiya-amin-prova-0000000000/',
      twitter: '#'
    },
    contact: {
      email: 'sumaiyaaminprova123@gmail.com',
      phone: '+880-132-9478744'
    },
    availability: 'Available for frontend projects',
    languages: ['English', 'Bengali'],
    interests: ['Frontend Development', 'System Architecture', 'Team Leadership', 'Code Review']
  },
  {
    id: 8,
    name: 'Mustafizur Rahman',
    role: 'Full Stack Developer',
    department: 'Full Stack Developer',
    experience: '2+ years',
    location: 'Dhaka, Bangladesh',
    joinDate: 'January 2025',
    avatar: 'MS',
    avatarImg: '/sumon.jpg',
    bio: 'Full Stack Developer specializing in building and maintaining strong client relationships to drive business growth.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'GraphQL'],
    expertise: ['Full Stack Development', 'System Architecture', 'Team Leadership', 'Code Review'],
    education: 'BSc in Computer Science, BUET',
    certifications: ['AWS Certified Developer', 'MongoDB Certified Developer'],
    projects: ['E-commerce Sales', 'B2B Lead Generation', 'Brand Awareness Campaigns'],
    achievements: ['Increased sales by 200%', 'Generated 500+ qualified leads', 'Improved conversion rate by 150%'],
    social: {
      linkedin: 'https://www.linkedin.com/in/mustafizur-rahman-sumon-0000000000/',
      twitter: '#'
    },
    contact: {
      email: 'mustafizurrahmansumon123@gmail.com',
      phone: '+880-132-9478744'
    },
    availability: 'Available for full stack projects',
    languages: ['English', 'Bengali'],
    interests: ['Full Stack Development', 'System Architecture', 'Team Leadership', 'Code Review']
  },
  {
    id: 9,
    name: 'Soraya Akter',
    role: 'Frontend Developer',
    department: 'Frontend Developer',
    experience: '2+ years',
    location: 'Dhaka, Bangladesh',
    joinDate: 'January 2025',
    avatar: 'SA',
    avatarImg: '/team/soraya.jpg',
    bio: 'Frontend Developer specializing in building and maintaining strong client relationships to drive business growth.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'GraphQL'],
    expertise: ['Frontend Development', 'System Architecture', 'Team Leadership', 'Code Review'],
    education: 'BSc in Computer Science, BUET',
    certifications: ['AWS Certified Developer', 'MongoDB Certified Developer'],
    projects: ['E-commerce Sales', 'B2B Lead Generation', 'Brand Awareness Campaigns'],
    achievements: ['Increased sales by 200%', 'Generated 500+ qualified leads', 'Improved conversion rate by 150%'],
    social: {
      linkedin: 'https://www.linkedin.com/in/soraya-akter-0000000000/',
      twitter: '#'
    },
    contact: {
      email: 'sorayaakter123@gmail.com',
      phone: '+880-132-9478744'
    },
    availability: 'Available for frontend projects',
    languages: ['English', 'Bengali'],
    interests: ['Frontend Development', 'System Architecture', 'Team Leadership', 'Code Review']
  },
  {
    id: 10,
    name: 'Jasmin Ara Mim',
    role: 'Frontend Developer',
    department: 'Frontend Developer',
    experience: '2+ years',
    location: 'Dhaka, Bangladesh',
    joinDate: 'January 2025',
    avatar: 'JA',
    avatarImg: '/jasmin.png',
    bio: 'Frontend Developer specializing in building and maintaining strong client relationships to drive business growth.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'GraphQL'],
    expertise: ['Frontend Development', 'System Architecture', 'Team Leadership', 'Code Review'],
    education: 'BSc in Computer Science, BUET',
    certifications: ['AWS Certified Developer', 'MongoDB Certified Developer'],
    projects: ['E-commerce Sales', 'B2B Lead Generation', 'Brand Awareness Campaigns'],
    achievements: ['Increased sales by 200%', 'Generated 500+ qualified leads', 'Improved conversion rate by 150%'],
    social: {
      linkedin: 'https://www.linkedin.com/in/jasmin-ara-mim-0000000000/',
      twitter: '#'
    },
    contact: {
      email: 'jasminara123@gmail.com',
      phone: '+880-132-9478744'
    },
    availability: 'Available for frontend projects',
    languages: ['English', 'Bengali'],
    interests: ['Frontend Development', 'System Architecture', 'Team Leadership', 'Code Review']
  },
];

const Avatar = ({ src, alt, initials, size = 16 }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div
      className={`w-${size} h-${size} bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold overflow-hidden`}
      style={{ fontSize: size === 20 ? '2rem' : '1.25rem' }}
    >
      {!imgError && src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        initials
      )}
    </div>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [filterDepartment, setFilterDepartment] = useState('all');

  const departments = ['all', ...new Set(teamMembers.map(member => member.department))];
  const filteredMembers = filterDepartment === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === filterDepartment);

  const getDepartmentIcon = (department) => {
    switch (department) {
      case 'Engineering': return FaCode;
      case 'Security': return FaShieldAlt;
      case 'Design': return FaPalette;
      case 'Project Management': return FaUsers;
      case 'Marketing': return FaRocket;
      default: return FaUsers;
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Team - LaunchLayer | Meet Our Experts</title>
        <meta name="description" content="Meet the LaunchLayer team: experts in web development, cybersecurity, UI/UX design, project management, DevOps, and digital marketing." />
        <link rel="canonical" href="https://launchlayer.com/team" />
      </Helmet>
      <main className="pt-16 md:pt-20">
        <section className="section-padding gradient-bg text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our <span className="text-secondary-300">Team</span></h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in development, design, security, and project management.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setFilterDepartment(dept)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    filterDepartment === dept
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {dept === 'all' ? 'All Departments' : dept}
                </button>
              ))}
            </div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar src={member.avatarImg} alt={member.name} initials={member.avatar} size={16} />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-primary-600 font-medium">{member.role}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          {React.createElement(getDepartmentIcon(member.department), { className: "w-4 h-4 mr-1" })}
                          {member.department}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-500">
                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                        {member.experience} experience
                      </div>
                      <div className="flex items-center text-gray-500">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                        {member.location}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <FaAward className="w-4 h-4 mr-2" />
                        {member.availability}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-primary-50 text-primary-600 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 3 && (
                        <span className="text-xs text-gray-500">+{member.skills.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Member Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl max-w-full w-full sm:max-w-4xl max-h-[90vh] overflow-y-auto mx-3 sm:mx-4 my-4"
            >
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0">
                    <Avatar src={selectedMember.avatarImg} alt={selectedMember.name} initials={selectedMember.avatar} size={20} />
                    <div className="min-w-0">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">{selectedMember.name}</h2>
                      <p className="text-primary-600 font-medium text-sm sm:text-base lg:text-lg break-words">{selectedMember.role}</p>
                      <p className="text-gray-500 text-xs sm:text-sm break-words">{selectedMember.department}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="text-gray-400 hover:text-gray-600 text-xl sm:text-2xl flex-shrink-0 self-start sm:self-auto"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 break-words">About</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 break-words">{selectedMember.bio}</p>

                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 break-words">Skills</h3>
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {selectedMember.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-primary-50 text-primary-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm break-words"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 break-words">Expertise</h3>
                    <ul className="space-y-1 mb-4 sm:mb-6">
                      {selectedMember.expertise.map((exp, index) => (
                        <li key={index} className="text-gray-600 text-sm sm:text-base flex items-start">
                          <FaStar className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="break-words">{exp}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 break-words">Education & Certifications</h3>
                    <div className="space-y-2 mb-4 sm:mb-6">
                      <p className="text-gray-600 text-sm sm:text-base break-words"><strong>Education:</strong> {selectedMember.education}</p>
                      <div>
                        <strong className="text-sm sm:text-base">Certifications:</strong>
                        <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base ml-4">
                          {selectedMember.certifications.map((cert, index) => (
                            <li key={index} className="break-words">{cert}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 break-words">Contact Information</h3>
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <div className="flex items-center text-gray-600 text-sm sm:text-base">
                        <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0" />
                        <a href={`mailto:${selectedMember.contact.email}`} className="hover:text-primary-600 break-words">
                          {selectedMember.contact.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm sm:text-base">
                        <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="break-words">{selectedMember.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm sm:text-base">
                        <FaCalendarAlt className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="break-words">Joined {selectedMember.joinDate}</span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 break-words">Social Links</h3>
                    <div className="flex space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                      {selectedMember.social.linkedin && (
                        <a
                          href={selectedMember.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors flex-shrink-0"
                        >
                          <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      )}
                      {selectedMember.social.github && (
                        <a
                          href={selectedMember.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors flex-shrink-0"
                        >
                          <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      )}
                      {selectedMember.social.twitter && (
                        <a
                          href={selectedMember.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors flex-shrink-0"
                        >
                          <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      )}
                      {selectedMember.social.website && (
                        <a
                          href={selectedMember.social.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors flex-shrink-0"
                        >
                          <FaGlobe className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 break-words">Key Projects</h3>
                    <ul className="space-y-1 mb-4 sm:mb-6">
                      {selectedMember.projects.map((project, index) => (
                        <li key={index} className="text-gray-600 text-sm sm:text-base flex items-start">
                          <FaRocket className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="break-words">{project}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 break-words">Achievements</h3>
                    <ul className="space-y-1 mb-4 sm:mb-6">
                      {selectedMember.achievements.map((achievement, index) => (
                        <li key={index} className="text-gray-600 text-sm sm:text-base flex items-start">
                          <FaAward className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="break-words">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base break-words">Languages</h4>
                        <div className="flex flex-wrap gap-1">
                          {selectedMember.languages.map((lang, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded break-words">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base break-words">Interests</h4>
                        <div className="flex flex-wrap gap-1">
                          {selectedMember.interests.map((interest, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded break-words">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </main>
    </>
  );
};

export default Team; 