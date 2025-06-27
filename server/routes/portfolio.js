const express = require('express');
const router = express.Router();

// Sample portfolio data
const portfolioData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-stack e-commerce platform with secure payment integration, inventory management, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    image: "/images/portfolio/ecommerce.jpg",
    features: [
      "Secure payment processing",
      "Real-time inventory tracking",
      "Admin dashboard with analytics",
      "Mobile responsive design",
      "SEO optimized"
    ],
    client: "TechStart Inc.",
    duration: "3 months",
    status: "Completed",
    liveUrl: "https://demo-ecommerce.launchlayer.com",
    githubUrl: "https://github.com/launchlayer/ecommerce-demo",
    testimonial: {
      text: "LaunchLayer delivered an exceptional e-commerce platform that exceeded our expectations. The security features and performance are outstanding.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc."
    }
  },
  {
    id: 2,
    title: "Cybersecurity Dashboard",
    category: "Cybersecurity",
    description: "A comprehensive security monitoring dashboard for enterprise-level threat detection and response.",
    technologies: ["React", "Python", "Django", "PostgreSQL", "Docker"],
    image: "/images/portfolio/security-dashboard.jpg",
    features: [
      "Real-time threat monitoring",
      "Automated incident response",
      "Compliance reporting",
      "Multi-factor authentication",
      "API security testing"
    ],
    client: "SecureCorp",
    duration: "4 months",
    status: "Completed",
    liveUrl: "https://security-demo.launchlayer.com",
    githubUrl: "https://github.com/launchlayer/security-dashboard",
    testimonial: {
      text: "The security dashboard has significantly improved our threat detection capabilities. LaunchLayer's expertise in cybersecurity is unmatched.",
      author: "Michael Chen",
      position: "CTO, SecureCorp"
    }
  },
  {
    id: 3,
    title: "Food Delivery App",
    category: "App Development",
    description: "A cross-platform food delivery application with real-time tracking, payment integration, and restaurant management.",
    technologies: ["React Native", "Firebase", "Google Maps API", "Stripe", "Node.js"],
    image: "/images/portfolio/food-delivery.jpg",
    features: [
      "Real-time order tracking",
      "In-app payments",
      "Restaurant management portal",
      "Push notifications",
      "Offline functionality"
    ],
    client: "FoodExpress",
    duration: "5 months",
    status: "Completed",
    liveUrl: "https://food-delivery-demo.launchlayer.com",
    githubUrl: "https://github.com/launchlayer/food-delivery-app",
    testimonial: {
      text: "The app has revolutionized our delivery service. LaunchLayer's attention to detail and user experience is remarkable.",
      author: "David Rodriguez",
      position: "Founder, FoodExpress"
    }
  },
  {
    id: 4,
    title: "ERP System",
    category: "Software Solutions",
    description: "Custom ERP system for manufacturing company with inventory, HR, and financial management modules.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Docker"],
    image: "/images/portfolio/erp-system.jpg",
    features: [
      "Inventory management",
      "HR and payroll system",
      "Financial reporting",
      "Supply chain tracking",
      "Custom workflows"
    ],
    client: "ManufacturePro",
    duration: "6 months",
    status: "Completed",
    liveUrl: "https://erp-demo.launchlayer.com",
    githubUrl: "https://github.com/launchlayer/erp-system",
    testimonial: {
      text: "The ERP system has streamlined our entire operation. LaunchLayer understood our business needs perfectly.",
      author: "Lisa Thompson",
      position: "Operations Director, ManufacturePro"
    }
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Web Development",
    description: "A modern real estate platform with property listings, virtual tours, and agent management system.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS S3", "Stripe"],
    image: "/images/portfolio/real-estate.jpg",
    features: [
      "Property search and filtering",
      "Virtual tour integration",
      "Agent dashboard",
      "Lead management",
      "Payment processing"
    ],
    client: "RealEstateHub",
    duration: "4 months",
    status: "Completed",
    liveUrl: "https://real-estate-demo.launchlayer.com",
    githubUrl: "https://github.com/launchlayer/real-estate-platform",
    testimonial: {
      text: "The platform has transformed how we showcase properties. LaunchLayer's modern approach and technical expertise are outstanding.",
      author: "Robert Wilson",
      position: "Managing Director, RealEstateHub"
    }
  },
  {
    id: 6,
    title: "Healthcare Management System",
    category: "Software Solutions",
    description: "HIPAA-compliant healthcare management system with patient records, appointment scheduling, and billing.",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
    image: "/images/portfolio/healthcare.jpg",
    features: [
      "Patient record management",
      "Appointment scheduling",
      "Billing and insurance",
      "HIPAA compliance",
      "Telemedicine integration"
    ],
    client: "HealthCare Plus",
    duration: "7 months",
    status: "Completed",
    liveUrl: "https://healthcare-demo.launchlayer.com",
    githubUrl: "https://github.com/launchlayer/healthcare-system",
    testimonial: {
      text: "The healthcare system has improved our patient care significantly. LaunchLayer's commitment to security and compliance is exceptional.",
      author: "Dr. Emily Brown",
      position: "Medical Director, HealthCare Plus"
    }
  }
];

// Get all portfolio items
router.get('/', (req, res) => {
  try {
    const { category, limit } = req.query;
    
    let filteredData = portfolioData;
    
    // Filter by category if provided
    if (category) {
      filteredData = portfolioData.filter(item => 
        item.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Limit results if provided
    if (limit) {
      filteredData = filteredData.slice(0, parseInt(limit));
    }
    
    res.json({
      success: true,
      data: filteredData,
      total: filteredData.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch portfolio data'
    });
  }
});

// Get portfolio item by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const item = portfolioData.find(project => project.id === parseInt(id));
    
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      });
    }
    
    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch portfolio item'
    });
  }
});

// Get portfolio categories
router.get('/categories/list', (req, res) => {
  try {
    const categories = [...new Set(portfolioData.map(item => item.category))];
    
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories'
    });
  }
});

// Get portfolio statistics
router.get('/stats/overview', (req, res) => {
  try {
    const stats = {
      totalProjects: portfolioData.length,
      completedProjects: portfolioData.filter(item => item.status === 'Completed').length,
      categories: portfolioData.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      }, {}),
      averageDuration: Math.round(
        portfolioData.reduce((sum, item) => sum + parseInt(item.duration), 0) / portfolioData.length
      )
    };
    
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch portfolio statistics'
    });
  }
});

module.exports = router; 