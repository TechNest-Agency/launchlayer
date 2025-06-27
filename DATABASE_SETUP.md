# Database Setup Guide for LaunchLayer

## 🗄️ MongoDB Setup

### Option 1: Local MongoDB Installation

#### Windows:
1. **Download MongoDB Community Server**
   - Go to: https://www.mongodb.com/try/download/community
   - Download MongoDB Community Server for Windows
   - Install with default settings

2. **Start MongoDB Service**
   ```bash
   # Open Command Prompt as Administrator
   net start MongoDB
   ```

3. **Verify Installation**
   ```bash
   mongosh
   # Should connect to MongoDB shell
   ```

#### macOS:
```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb/brew/mongodb-community
```

#### Linux (Ubuntu):
```bash
# Import MongoDB public GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Create list file for MongoDB
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Update package database
sudo apt-get update

# Install MongoDB
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod
```

### Option 2: MongoDB Atlas (Cloud Database)

1. **Create MongoDB Atlas Account**
   - Go to: https://www.mongodb.com/atlas
   - Sign up for free account

2. **Create Cluster**
   - Click "Build a Database"
   - Choose "FREE" tier
   - Select cloud provider & region
   - Click "Create"

3. **Setup Database Access**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Create username & password
   - Select "Read and write to any database"
   - Click "Add User"

4. **Setup Network Access**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database"
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string

## 🔧 Environment Configuration

### 1. Create .env file
```bash
# Copy from env.example
cp env.example .env
```

### 2. Update .env with your database settings

#### For Local MongoDB:
```env
MONGODB_URI=mongodb://localhost:27017/launchlayer
```

#### For MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/launchlayer
```

### 3. Other Required Environment Variables
```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
ORDER_RECEIVER=orders@launchlayer.com

# Base URL
BASE_URL=http://localhost:5000

# Payment Gateway Keys (for real integration)
PAYONEER_CLIENT_ID=your-payoneer-client-id
PAYONEER_CLIENT_SECRET=your-payoneer-client-secret
BKASH_APP_KEY=your-bkash-app-key
BKASH_APP_SECRET=your-bkash-app-secret
NAGAD_MERCHANT_ID=your-nagad-merchant-id
BINANCE_API_KEY=your-binance-api-key
```

## 🚀 Start Backend Server

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run server
```

### 3. Verify Database Connection
- Check console output for: "MongoDB Connected: localhost"
- Visit: http://localhost:5000/api/health
- Should show database status as "connected"

## 📊 Database Verification

### 1. Check Collections
```bash
# Connect to MongoDB shell
mongosh

# Switch to database
use launchlayer

# Check collections
show collections
# Should show: orders, transactions
```

### 2. Test API Endpoints
```bash
# Test health endpoint
curl http://localhost:5000/api/health

# Test order creation
curl -X POST http://localhost:5000/api/order \
  -H "Content-Type: application/json" \
  -d '{
    "formData": {
      "firstName": "Test",
      "lastName": "User",
      "email": "test@example.com",
      "phone": "1234567890",
      "country": "US"
    },
    "cart": [{
      "service": "Web Development",
      "package": "Basic",
      "price": 1000,
      "quantity": 1
    }],
    "total": 1000,
    "tax": 100
  }'
```

## 🔍 Troubleshooting

### Common Issues:

1. **MongoDB Connection Failed**
   - Check if MongoDB service is running
   - Verify connection string in .env
   - Check firewall settings

2. **Port Already in Use**
   - Change PORT in .env file
   - Kill existing process: `lsof -ti:5000 | xargs kill -9`

3. **Email Not Sending**
   - Check email credentials in .env
   - Enable "Less secure app access" for Gmail
   - Use App Password instead of regular password

4. **Payment Gateway Errors**
   - Verify API keys in .env
   - Check gateway documentation for correct endpoints
   - Use mock responses for development

## 📝 Next Steps

1. **Setup Payment Gateways**
   - Create accounts with Payoneer, bKash, Nagad, Binance
   - Get API keys and credentials
   - Update .env with real credentials

2. **Configure Email**
   - Setup Gmail or other SMTP service
   - Test email notifications

3. **Deploy to Production**
   - Setup production MongoDB (Atlas recommended)
   - Configure production environment variables
   - Setup SSL certificates for callbacks

## 🎯 Success Indicators

✅ MongoDB connection established  
✅ Health endpoint returns database status  
✅ Orders can be created and saved  
✅ Payment processing works (mock mode)  
✅ Email notifications sent  
✅ Logs created in logs/ directory 