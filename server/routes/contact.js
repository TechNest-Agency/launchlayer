const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact form submission
router.post('/submit', async (req, res) => {
  try {
    const { name, email, company, service, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E40AF;">🚀 New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #111827; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border-left: 4px solid #1E40AF; margin: 20px 0;">
            <h3 style="color: #111827; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          <div style="text-align: center; margin-top: 30px; color: #6b7280;">
            <p>This message was sent from the LaunchLayer contact form</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to customer
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting LaunchLayer! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E40AF;">Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for contacting LaunchLayer. We've received your message and our team will get back to you within 24 hours.</p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #111827; margin-top: 0;">What happens next?</h3>
            <ul style="line-height: 1.8;">
              <li>Our team will review your requirements</li>
              <li>We'll schedule a consultation call</li>
              <li>You'll receive a detailed proposal</li>
              <li>We'll start building your solution</li>
            </ul>
          </div>
          <p>In the meantime, feel free to explore our <a href="https://launchlayer.com/portfolio" style="color: #1E40AF;">portfolio</a> or check out our <a href="https://launchlayer.com/services" style="color: #1E40AF;">services</a>.</p>
          <p>Best regards,<br>The LaunchLayer Team</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <div style="text-align: center; color: #6b7280; font-size: 14px;">
            <p><strong>LaunchLayer</strong> - Secure Code. Smart Solutions.</p>
            <p>Web Development • Cybersecurity • App Development • Software Solutions</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(autoReplyOptions);

    res.json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Get contact information
router.get('/info', (req, res) => {
  res.json({
    success: true,
    data: {
      email: 'hello@launchlayer.com',
      phone: '+880-XXX-XXXXXXX',
      address: 'Dhaka, Bangladesh',
      workingHours: 'Mon-Fri: 9AM-6PM (GMT+6)',
      responseTime: 'Within 24 hours'
    }
  });
});

module.exports = router; 