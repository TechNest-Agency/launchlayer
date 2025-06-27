<p align="center">
  <img src="https://raw.githubusercontent.com/TechNest-Agency/launchlayer/main/client/public/logo192.png" alt="LaunchLayer Logo" width="100" />
</p>

<h1 align="center">🚀 LaunchLayer</h1>
<p align="center"><b>Secure Code. Smart Solutions.</b></p>
<p align="center">
  <a href="https://launchlayer.vercel.app" target="_blank"><img src="https://img.shields.io/badge/Live-Demo-blue?style=flat-square&logo=vercel" alt="Live Demo"></a>
  <a href="https://github.com/TechNest-Agency/launchlayer" target="_blank"><img src="https://img.shields.io/github/license/TechNest-Agency/launchlayer?style=flat-square" alt="License"></a>
  <a href="https://github.com/TechNest-Agency/launchlayer/issues" target="_blank"><img src="https://img.shields.io/github/issues/TechNest-Agency/launchlayer?style=flat-square" alt="Issues"></a>
</p>

---

## 🌟 Overview

**LaunchLayer** is a professional IT firm website template, designed for agencies and tech companies. It features a modern React frontend, secure Express backend, and all the pages/services a real IT business needs.

---

## 🖥️ Tech Stack

| Frontend         | Backend         | Styling      | Utilities         |
|------------------|----------------|-------------|-------------------|
| React.js         | Node.js        | TailwindCSS  | Framer Motion     |
| React Router     | Express.js     | PostCSS      | React Icons       |
| Axios            | Nodemailer     |              | Helmet, CORS      |

---

## ✨ Features

- Modern, responsive design
- Full-stack: React + Express
- Contact form with email integration
- Portfolio, Blog, Careers, FAQ, Team, Events, and more
- Secure API endpoints (Helmet, CORS, Rate Limiting)
- SEO optimized (meta tags, sitemap)
- Ready for Vercel deployment

---

## 📦 Project Structure

```
launchlayer/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── config/
│   └── vercel.json
├── server/                 # Express backend
│   ├── routes/
│   └── index.js
├── vercel.json             # Vercel config
├── DEPLOYMENT.md           # Deployment guide
├── deploy.bat / deploy.sh  # Deployment helpers
└── README.md
```

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/TechNest-Agency/launchlayer.git
cd launchlayer

# 2. Install dependencies
npm run install-all

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your email credentials

# 4. Run in development
npm run dev

# 5. Build for production
npm run build
npm start
```

---

## 🌐 Deployment

LaunchLayer is optimized for [Vercel](https://vercel.com):

- One-click deploy (see DEPLOYMENT.md)
- Environment variables for email/contact
- Full-stack routing (API + static frontend)

---

## 📝 Pages Included

- Home
- About
- Services (with dropdown)
- Portfolio
- Blog
- Contact
- Order
- Careers
- FAQ
- Privacy Policy
- Team
- Support
- Case Studies
- Events
- 404 Not Found

---

## 🎨 Design System

- **Primary Colors:** Blue (#1E40AF), Black (#111827), Green (#059669)
- **Typography:** Inter font
- **Icons:** React Icons
- **Animations:** Framer Motion

---

## 🔒 Security

- Helmet.js for HTTP headers
- CORS configuration
- Rate limiting on API endpoints
- Input validation

---

## 📧 Contact Form Setup

The contact form uses Nodemailer. Configure your email in `.env`:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

---

## 📱 Responsive & SEO

- Fully responsive (desktop, tablet, mobile)
- SEO meta tags and Open Graph
- Fast performance

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

[MIT](LICENSE)

---

<p align="center"><b>LaunchLayer</b> - Where Innovation Meets Security 🚀</p>
