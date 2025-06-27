const express = require('express');
const router = express.Router();

// Sample blog data
const blogData = [
  {
    id: 1,
    title: "Why Secure Development is No Longer Optional",
    slug: "why-secure-development-is-no-longer-optional",
    excerpt: "In today's digital landscape, security isn't just a feature—it's a fundamental requirement. Learn why secure development practices are crucial for every business.",
    content: `
      <h2>The Growing Threat Landscape</h2>
      <p>With cyberattacks becoming more sophisticated and frequent, businesses can no longer afford to treat security as an afterthought. In 2023 alone, cybercrime costs are expected to reach $8 trillion globally.</p>
      
      <h2>Why Traditional Security Approaches Fail</h2>
      <p>Many companies still rely on reactive security measures—fixing vulnerabilities after they're discovered. This approach is not only costly but also puts customer data and business reputation at risk.</p>
      
      <h2>The Secure Development Lifecycle</h2>
      <p>At LaunchLayer, we implement security at every stage of development:</p>
      <ul>
        <li><strong>Planning:</strong> Security requirements and threat modeling</li>
        <li><strong>Design:</strong> Secure architecture and design patterns</li>
        <li><strong>Development:</strong> Secure coding practices and code reviews</li>
        <li><strong>Testing:</strong> Automated security testing and penetration testing</li>
        <li><strong>Deployment:</strong> Secure deployment practices and monitoring</li>
      </ul>
      
      <h2>Key Security Practices We Implement</h2>
      <p>Our development process includes:</p>
      <ul>
        <li>Input validation and sanitization</li>
        <li>Authentication and authorization</li>
        <li>Data encryption (at rest and in transit)</li>
        <li>Regular security audits</li>
        <li>Vulnerability scanning</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Secure development is not just about protecting your application—it's about protecting your users, your business, and your reputation. At LaunchLayer, we make security a priority from day one.</p>
    `,
    author: "LaunchLayer Team",
    category: "Cybersecurity",
    tags: ["Security", "Development", "Best Practices", "Cybersecurity"],
    publishedAt: "2024-01-15T10:00:00Z",
    readTime: "5 min read",
    image: "/images/blog/secure-development.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Top 5 Tools We Use at LaunchLayer",
    slug: "top-5-tools-we-use-at-launchlayer",
    excerpt: "Discover the essential tools and technologies that power our development process and help us deliver exceptional results for our clients.",
    content: `
      <h2>1. React & Next.js</h2>
      <p>For frontend development, we rely on React and Next.js to build fast, scalable, and SEO-friendly web applications. These tools enable us to create dynamic user experiences while maintaining excellent performance.</p>
      
      <h2>2. Node.js & Express</h2>
      <p>Our backend development is powered by Node.js and Express, allowing us to build robust APIs and server-side applications. This stack provides excellent performance and a vast ecosystem of packages.</p>
      
      <h2>3. MongoDB & PostgreSQL</h2>
      <p>We use both MongoDB and PostgreSQL depending on project requirements. MongoDB for flexible document storage and PostgreSQL for complex relational data with ACID compliance.</p>
      
      <h2>4. Docker & AWS</h2>
      <p>For deployment and infrastructure, we use Docker for containerization and AWS for cloud hosting. This combination ensures scalable, reliable, and cost-effective solutions.</p>
      
      <h2>5. Figma & Framer Motion</h2>
      <p>For design and animations, we use Figma for collaborative design and Framer Motion for smooth, performant animations that enhance user experience.</p>
      
      <h2>Why These Tools Matter</h2>
      <p>Our tool selection is based on:</p>
      <ul>
        <li>Performance and scalability</li>
        <li>Community support and documentation</li>
        <li>Security and reliability</li>
        <li>Developer productivity</li>
        <li>Client requirements</li>
      </ul>
    `,
    author: "LaunchLayer Team",
    category: "Development",
    tags: ["Tools", "Technology", "Development", "Best Practices"],
    publishedAt: "2024-01-10T14:30:00Z",
    readTime: "4 min read",
    image: "/images/blog/development-tools.jpg",
    featured: false
  },
  {
    id: 3,
    title: "Web vs App: What Your Business Really Needs?",
    slug: "web-vs-app-what-your-business-really-needs",
    excerpt: "Choosing between a web application and a mobile app can be challenging. We break down the factors to consider when making this crucial decision for your business.",
    content: `
      <h2>Understanding the Differences</h2>
      <p>Before making a decision, it's important to understand the key differences between web applications and mobile apps:</p>
      
      <h3>Web Applications</h3>
      <ul>
        <li>Accessible on any device with a browser</li>
        <li>Easier to maintain and update</li>
        <li>Lower development costs</li>
        <li>Better for SEO and discoverability</li>
        <li>No app store approval process</li>
      </ul>
      
      <h3>Mobile Apps</h3>
      <ul>
        <li>Better performance and user experience</li>
        <li>Access to device features (camera, GPS, etc.)</li>
        <li>Offline functionality</li>
        <li>Push notifications</li>
        <li>Higher user engagement</li>
      </ul>
      
      <h2>Factors to Consider</h2>
      <p>When choosing between web and app, consider:</p>
      
      <h3>Target Audience</h3>
      <p>Who are your users? What devices do they primarily use? Understanding your audience's behavior is crucial.</p>
      
      <h3>Business Goals</h3>
      <p>What are you trying to achieve? Revenue generation, user engagement, or brand awareness?</p>
      
      <h3>Budget and Timeline</h3>
      <p>Web applications are generally faster and cheaper to develop, while mobile apps require more investment.</p>
      
      <h3>Features Required</h3>
      <p>Do you need device-specific features like camera access or offline functionality?</p>
      
      <h2>Our Recommendation</h2>
      <p>For most businesses, we recommend starting with a responsive web application. You can always add a mobile app later based on user feedback and business growth.</p>
    `,
    author: "LaunchLayer Team",
    category: "Strategy",
    tags: ["Web Development", "App Development", "Strategy", "Business"],
    publishedAt: "2024-01-05T09:15:00Z",
    readTime: "6 min read",
    image: "/images/blog/web-vs-app.jpg",
    featured: true
  },
  {
    id: 4,
    title: "The Future of E-Commerce: Trends to Watch in 2024",
    slug: "future-of-ecommerce-trends-2024",
    excerpt: "E-commerce is evolving rapidly. Discover the key trends that will shape the future of online shopping and how businesses can adapt to stay competitive.",
    content: `
      <h2>1. AI-Powered Personalization</h2>
      <p>Artificial intelligence is revolutionizing how we shop online. From personalized product recommendations to AI-powered chatbots, businesses are leveraging AI to enhance customer experience.</p>
      
      <h2>2. Voice Commerce</h2>
      <p>With the rise of smart speakers and voice assistants, voice commerce is becoming increasingly popular. Businesses need to optimize their platforms for voice search and voice-activated shopping.</p>
      
      <h2>3. Augmented Reality (AR)</h2>
      <p>AR technology allows customers to visualize products in their environment before purchasing. This is particularly valuable for furniture, fashion, and beauty products.</p>
      
      <h2>4. Social Commerce</h2>
      <p>Social media platforms are becoming shopping destinations. Instagram Shopping, Facebook Marketplace, and TikTok Shop are changing how consumers discover and purchase products.</p>
      
      <h2>5. Sustainability and Ethical Shopping</h2>
      <p>Consumers are increasingly conscious about sustainability. E-commerce businesses need to highlight their environmental practices and offer eco-friendly options.</p>
      
      <h2>How to Adapt</h2>
      <p>To stay competitive, businesses should:</p>
      <ul>
        <li>Invest in AI and machine learning</li>
        <li>Optimize for voice search</li>
        <li>Integrate AR features</li>
        <li>Develop social commerce strategies</li>
        <li>Embrace sustainable practices</li>
      </ul>
    `,
    author: "LaunchLayer Team",
    category: "E-Commerce",
    tags: ["E-Commerce", "AI", "Technology", "Trends", "2024"],
    publishedAt: "2024-01-01T12:00:00Z",
    readTime: "7 min read",
    image: "/images/blog/ecommerce-trends.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Building Scalable APIs: Best Practices for 2024",
    slug: "building-scalable-apis-best-practices-2024",
    excerpt: "APIs are the backbone of modern applications. Learn the best practices for building scalable, secure, and maintainable APIs that can grow with your business.",
    content: `
      <h2>API Design Principles</h2>
      <p>Good API design is crucial for scalability and maintainability. Follow these principles:</p>
      
      <h3>RESTful Design</h3>
      <p>Use standard HTTP methods and status codes. Design intuitive endpoints that follow REST conventions.</p>
      
      <h3>Versioning</h3>
      <p>Implement API versioning from the start. This allows you to make changes without breaking existing clients.</p>
      
      <h2>Performance Optimization</h2>
      <p>Scalable APIs need to handle high traffic efficiently:</p>
      
      <h3>Caching</h3>
      <p>Implement caching strategies using Redis or similar technologies. Cache frequently accessed data to reduce database load.</p>
      
      <h3>Pagination</h3>
      <p>Use pagination for large datasets. This improves performance and reduces memory usage.</p>
      
      <h3>Rate Limiting</h3>
      <p>Implement rate limiting to prevent abuse and ensure fair usage of your API resources.</p>
      
      <h2>Security Best Practices</h2>
      <p>Security should be a top priority:</p>
      <ul>
        <li>Use HTTPS for all communications</li>
        <li>Implement proper authentication and authorization</li>
        <li>Validate and sanitize all inputs</li>
        <li>Use API keys or OAuth tokens</li>
        <li>Implement request logging and monitoring</li>
      </ul>
      
      <h2>Monitoring and Documentation</h2>
      <p>Monitor your API performance and maintain comprehensive documentation:</p>
      <ul>
        <li>Use tools like Swagger for API documentation</li>
        <li>Implement logging and error tracking</li>
        <li>Monitor response times and error rates</li>
        <li>Set up alerts for critical issues</li>
      </ul>
    `,
    author: "LaunchLayer Team",
    category: "Development",
    tags: ["API", "Development", "Best Practices", "Scalability"],
    publishedAt: "2023-12-28T16:45:00Z",
    readTime: "8 min read",
    image: "/images/blog/api-development.jpg",
    featured: true
  }
];

// Get all blog posts
router.get('/', (req, res) => {
  try {
    const { category, tag, limit, featured } = req.query;
    
    let filteredData = blogData;
    
    // Filter by category
    if (category) {
      filteredData = filteredData.filter(post => 
        post.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Filter by tag
    if (tag) {
      filteredData = filteredData.filter(post => 
        post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
      );
    }
    
    // Filter featured posts
    if (featured === 'true') {
      filteredData = filteredData.filter(post => post.featured);
    }
    
    // Sort by published date (newest first)
    filteredData.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    
    // Limit results
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
      message: 'Failed to fetch blog posts'
    });
  }
});

// Get blog post by slug
router.get('/:slug', (req, res) => {
  try {
    const { slug } = req.params;
    const post = blogData.find(post => post.slug === slug);
    
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }
    
    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blog post'
    });
  }
});

// Get blog categories
router.get('/categories/list', (req, res) => {
  try {
    const categories = [...new Set(blogData.map(post => post.category))];
    
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

// Get blog tags
router.get('/tags/list', (req, res) => {
  try {
    const allTags = blogData.flatMap(post => post.tags);
    const uniqueTags = [...new Set(allTags)];
    
    res.json({
      success: true,
      data: uniqueTags
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch tags'
    });
  }
});

// Get featured posts
router.get('/featured/list', (req, res) => {
  try {
    const featuredPosts = blogData.filter(post => post.featured);
    
    res.json({
      success: true,
      data: featuredPosts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch featured posts'
    });
  }
});

module.exports = router; 