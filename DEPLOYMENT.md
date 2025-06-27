# LaunchLayer - Vercel Deployment Guide

## 🚀 Deploying to Vercel

### Prerequisites
- Vercel account (free at [vercel.com](https://vercel.com))
- GitHub/GitLab/Bitbucket repository with your code
- Node.js 18+ installed locally

### Step 1: Prepare Your Repository

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Ensure all files are committed:**
   - `vercel.json` (root directory)
   - `client/vercel.json`
   - `package.json` (root and client)
   - All source code files

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your repository
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (root of project)
   - **Build Command**: `npm run build`
   - **Output Directory**: `client/build`
   - **Install Command**: `npm run install-all`

#### Option B: Deploy via Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

### Step 3: Configure Environment Variables

In your Vercel dashboard, go to Project Settings > Environment Variables and add:

```
NODE_ENV=production
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

### Step 4: Configure Domain (Optional)

1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain
3. Update CORS settings in `server/index.js` with your domain

### Step 5: Test Your Deployment

1. Visit your Vercel URL (e.g., `https://launchlayer.vercel.app`)
2. Test all functionality:
   - Contact form
   - Portfolio loading
   - Blog posts
   - Order system
   - All pages navigation

## 🔧 Configuration Files

### Root `vercel.json`
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.js",
      "use": "@vercel/node"
    },
    {
      "src": "client/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.js"
    },
    {
      "src": "/(.*)",
      "dest": "/client/build/$1"
    }
  ]
}
```

### Client `vercel.json`
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check if all dependencies are in `package.json`
   - Ensure Node.js version is 18+
   - Check build logs in Vercel dashboard

2. **API Routes Not Working**
   - Verify `vercel.json` routing configuration
   - Check CORS settings in `server/index.js`
   - Ensure API endpoints are prefixed with `/api/`

3. **Static Files Not Loading**
   - Check if `client/build` directory exists
   - Verify `client/vercel.json` configuration
   - Ensure build process completes successfully

4. **Environment Variables Not Working**
   - Check Vercel environment variables settings
   - Ensure variable names match your code
   - Redeploy after adding environment variables

### Debug Commands

```bash
# Check build locally
npm run build

# Test server locally
npm run server

# Test client locally
npm run client

# Install all dependencies
npm run install-all
```

## 📝 Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Portfolio data loads
- [ ] Blog posts display
- [ ] Order system functions
- [ ] Navigation works on all pages
- [ ] Mobile responsiveness
- [ ] SEO meta tags working
- [ ] Performance optimized
- [ ] SSL certificate active

## 🔄 Continuous Deployment

Once deployed, Vercel will automatically:
- Deploy on every push to main branch
- Create preview deployments for pull requests
- Handle SSL certificates
- Provide CDN distribution

## 📊 Monitoring

- Use Vercel Analytics for performance monitoring
- Check Function Logs for API errors
- Monitor build times and success rates

## 🆘 Support

If you encounter issues:
1. Check Vercel documentation
2. Review build logs in dashboard
3. Test locally first
4. Check environment variables
5. Verify all configuration files 