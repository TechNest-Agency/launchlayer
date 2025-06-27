const mongoose = require('mongoose');
require('dotenv').config();

console.log('🔧 Setting up LaunchLayer Database...\n');

// Test database connection
async function testDatabaseConnection() {
  try {
    console.log('📡 Testing database connection...');
    
    // Use a test connection string for now
    const testUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/launchlayer';
    
    await mongoose.connect(testUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ Database connection successful!');
    console.log(`📍 Connected to: ${mongoose.connection.host}`);
    
    // Test creating a collection
    const testCollection = mongoose.connection.collection('test');
    await testCollection.insertOne({ 
      test: true, 
      timestamp: new Date(),
      message: 'Database setup successful'
    });
    
    console.log('✅ Database write test successful!');
    
    // Clean up test data
    await testCollection.deleteOne({ test: true });
    console.log('✅ Database cleanup successful!');
    
    await mongoose.connection.close();
    console.log('✅ Database connection closed successfully!\n');
    
    console.log('🎉 Database setup completed successfully!');
    console.log('\n📝 Next steps:');
    console.log('1. Update .env file with your MongoDB Atlas connection string');
    console.log('2. Run: npm run server');
    console.log('3. Test API: http://localhost:5000/api/health');
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check if MongoDB is installed and running');
    console.log('2. Verify MONGODB_URI in .env file');
    console.log('3. For MongoDB Atlas: Make sure IP is whitelisted');
    console.log('4. For local MongoDB: Start MongoDB service');
  }
}

// Run the setup
testDatabaseConnection(); 