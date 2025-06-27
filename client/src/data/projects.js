// Project data shared by Portfolio and ProjectDetail pages
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    longDescription: "This comprehensive e-commerce solution provides a complete online shopping experience with advanced features like real-time inventory management, multi-payment gateway integration, and sophisticated analytics dashboard. The platform supports multiple vendors, automated order processing, and seamless mobile experience.",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/launchlayer/ecommerce",
    image: "https://picsum.photos/800/400?random=1",
    imageAlt: "E-commerce Platform Interface",
    gallery: [
      "https://picsum.photos/800/400?random=11",
      "https://picsum.photos/800/400?random=12",
      "https://picsum.photos/800/400?random=13",
      "https://picsum.photos/800/400?random=14"
    ],
    features: [
      "User Authentication & Authorization",
      "Product Catalog Management",
      "Shopping Cart & Checkout",
      "Payment Gateway Integration",
      "Order Management System",
      "Admin Dashboard",
      "Inventory Management",
      "Customer Reviews & Ratings",
      "Email Notifications",
      "Analytics & Reporting"
    ],
    challenges: [
      "Implementing secure payment processing",
      "Optimizing database queries for large catalogs",
      "Ensuring mobile responsiveness",
      "Managing real-time inventory updates"
    ],
    solutions: [
      "Integrated Stripe with webhook verification",
      "Implemented MongoDB aggregation pipelines",
      "Used CSS Grid and Flexbox for responsive design",
      "Implemented Redis caching for inventory"
    ],
    duration: "3 months",
    teamSize: "4 developers",
    client: "TechStart Inc.",
    industry: "E-commerce",
    status: "Completed",
    rating: 4.8,
    views: 1250,
    downloads: 89
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Secure healthcare management system with HIPAA compliance, patient records, appointment scheduling, and telemedicine features.",
    longDescription: "A comprehensive healthcare management system designed to streamline medical operations while maintaining the highest security standards. The system includes patient portal, doctor dashboard, appointment scheduling, telemedicine integration, and compliance reporting features.",
    category: "Healthcare",
    technologies: ["React", "Python", "Django", "PostgreSQL", "Docker"],
    liveUrl: "https://healthcare-system.com",
    githubUrl: "https://github.com/launchlayer/healthcare",
    image: "https://picsum.photos/800/400?random=2",
    imageAlt: "Healthcare Management Dashboard",
    gallery: [
      "https://picsum.photos/800/400?random=21",
      "https://picsum.photos/800/400?random=22",
      "https://picsum.photos/800/400?random=23",
      "https://picsum.photos/800/400?random=24"
    ],
    features: [
      "HIPAA Compliant Patient Records",
      "Appointment Scheduling System",
      "Telemedicine Integration",
      "Doctor Dashboard",
      "Patient Portal",
      "Prescription Management",
      "Medical History Tracking",
      "Billing & Insurance",
      "Lab Results Management",
      "Compliance Reporting"
    ],
    challenges: [
      "Ensuring HIPAA compliance",
      "Implementing secure telemedicine",
      "Managing complex patient data",
      "Integrating with existing systems"
    ],
    solutions: [
      "Implemented end-to-end encryption",
      "Used WebRTC for secure video calls",
      "Designed normalized database schema",
      "Created RESTful API for integrations"
    ],
    duration: "6 months",
    teamSize: "6 developers",
    client: "MedCare Hospital",
    industry: "Healthcare",
    status: "Completed",
    rating: 4.9,
    views: 2100,
    downloads: 156
  },
  {
    id: 3,
    title: "Food Delivery App",
    description: "Cross-platform food delivery application with real-time tracking, payment integration, and restaurant management system.",
    longDescription: "A feature-rich food delivery application that connects customers with restaurants, providing real-time order tracking, multiple payment options, and comprehensive restaurant management tools. The app supports both iOS and Android platforms.",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Google Maps", "Stripe", "Node.js"],
    liveUrl: "https://food-delivery-app.com",
    githubUrl: "https://github.com/launchlayer/food-delivery",
    image: "https://picsum.photos/800/400?random=3",
    imageAlt: "Food Delivery Mobile App",
    gallery: [
      "https://picsum.photos/800/400?random=31",
      "https://picsum.photos/800/400?random=32",
      "https://picsum.photos/800/400?random=33",
      "https://picsum.photos/800/400?random=34"
    ],
    features: [
      "Cross-platform Mobile App",
      "Real-time Order Tracking",
      "Restaurant Management System",
      "Multiple Payment Options",
      "Push Notifications",
      "Rating & Review System",
      "Menu Management",
      "Delivery Partner App",
      "Analytics Dashboard",
      "Multi-language Support"
    ],
    challenges: [
      "Implementing real-time tracking",
      "Managing multiple payment gateways",
      "Optimizing app performance",
      "Handling offline functionality"
    ],
    solutions: [
      "Used WebSocket for real-time updates",
      "Integrated multiple payment providers",
      "Implemented lazy loading and caching",
      "Used React Native offline storage"
    ],
    duration: "4 months",
    teamSize: "5 developers",
    client: "FoodExpress",
    industry: "Food & Beverage",
    status: "Completed",
    rating: 4.7,
    views: 1800,
    downloads: 234
  },
  {
    id: 4,
    title: "Cybersecurity Dashboard",
    description: "Real-time cybersecurity monitoring dashboard with threat detection, incident response, and compliance reporting.",
    longDescription: "An advanced cybersecurity monitoring platform that provides real-time threat detection, automated incident response, and comprehensive compliance reporting. The system integrates with various security tools and provides actionable insights.",
    category: "Cybersecurity",
    technologies: ["React", "Python", "TensorFlow", "AWS", "Elasticsearch"],
    liveUrl: "https://security-dashboard.com",
    githubUrl: "https://github.com/launchlayer/security",
    image: "https://picsum.photos/800/400?random=4",
    imageAlt: "Cybersecurity Dashboard Interface",
    gallery: [
      "https://picsum.photos/800/400?random=41",
      "https://picsum.photos/800/400?random=42",
      "https://picsum.photos/800/400?random=43",
      "https://picsum.photos/800/400?random=44"
    ],
    features: [
      "Real-time Threat Detection",
      "Automated Incident Response",
      "Compliance Reporting",
      "Security Analytics",
      "Vulnerability Assessment",
      "SIEM Integration",
      "Threat Intelligence",
      "Security Orchestration",
      "Dashboard Customization",
      "Alert Management"
    ],
    challenges: [
      "Processing large volumes of security data",
      "Implementing real-time threat detection",
      "Ensuring data security",
      "Integrating with existing security tools"
    ],
    solutions: [
      "Used Elasticsearch for data processing",
      "Implemented ML-based threat detection",
      "Applied encryption at rest and in transit",
      "Created flexible API integrations"
    ],
    duration: "5 months",
    teamSize: "7 developers",
    client: "SecureCorp",
    industry: "Cybersecurity",
    status: "Completed",
    rating: 4.9,
    views: 1650,
    downloads: 98
  },
  {
    id: 5,
    title: "SaaS Analytics Platform",
    description: "Comprehensive analytics platform for SaaS businesses with user behavior tracking, revenue analytics, and custom reporting.",
    longDescription: "A powerful analytics platform designed specifically for SaaS businesses, providing deep insights into user behavior, revenue metrics, and business performance. The platform includes customizable dashboards and automated reporting.",
    category: "SaaS",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    liveUrl: "https://analytics-platform.com",
    githubUrl: "https://github.com/launchlayer/analytics",
    image: "https://picsum.photos/800/400?random=5",
    imageAlt: "Analytics Dashboard with Charts",
    gallery: [
      "https://picsum.photos/800/400?random=51",
      "https://picsum.photos/800/400?random=52",
      "https://picsum.photos/800/400?random=53",
      "https://picsum.photos/800/400?random=54"
    ],
    features: [
      "User Behavior Analytics",
      "Revenue Tracking",
      "Custom Dashboard Builder",
      "Automated Reporting",
      "Data Visualization",
      "API Integration",
      "Real-time Metrics",
      "A/B Testing Tools",
      "Cohort Analysis",
      "Export & Sharing"
    ],
    challenges: [
      "Handling large datasets efficiently",
      "Creating flexible dashboard builder",
      "Ensuring data accuracy",
      "Optimizing query performance"
    ],
    solutions: [
      "Implemented data warehousing",
      "Created drag-and-drop dashboard builder",
      "Applied data validation rules",
      "Used query optimization techniques"
    ],
    duration: "4 months",
    teamSize: "5 developers",
    client: "AnalyticsPro",
    industry: "Technology",
    status: "Completed",
    rating: 4.8,
    views: 1950,
    downloads: 167
  },
  {
    id: 6,
    title: "Educational Learning Management System",
    description: "Modern LMS platform with course creation, student progress tracking, video conferencing, and assessment tools.",
    longDescription: "A comprehensive learning management system that empowers educators to create engaging online courses, track student progress, conduct virtual classes, and assess learning outcomes. The platform supports various content types and learning methodologies.",
    category: "Education",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS"],
    liveUrl: "https://learning-platform.com",
    githubUrl: "https://github.com/launchlayer/lms",
    image: "https://picsum.photos/800/400?random=6",
    imageAlt: "Online Learning Platform Interface",
    gallery: [
      "https://picsum.photos/800/400?random=61",
      "https://picsum.photos/800/400?random=62",
      "https://picsum.photos/800/400?random=63",
      "https://picsum.photos/800/400?random=64"
    ],
    features: [
      "Course Creation & Management",
      "Student Progress Tracking",
      "Video Conferencing",
      "Assessment Tools",
      "Content Library",
      "Discussion Forums",
      "Grade Management",
      "Mobile Learning",
      "Analytics Dashboard",
      "Certificate Generation"
    ],
    challenges: [
      "Implementing real-time video conferencing",
      "Managing large file uploads",
      "Creating engaging assessment tools",
      "Ensuring platform scalability"
    ],
    solutions: [
      "Integrated WebRTC for video calls",
      "Used AWS S3 for file storage",
      "Created interactive quiz builder",
      "Implemented microservices architecture"
    ],
    duration: "5 months",
    teamSize: "6 developers",
    client: "EduTech Solutions",
    industry: "Education",
    status: "Completed",
    rating: 4.7,
    views: 2200,
    downloads: 189
  }
];

export default projects; 