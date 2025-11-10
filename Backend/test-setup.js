// Simple test script to verify backend setup
const mongoose = require('mongoose');
require('dotenv').config();

console.log('🔍 Testing Backend Setup...\n');

// Check environment variables
console.log('1. Checking environment variables:');
console.log('   MONGO_URI:', process.env.MONGO_URI ? '✓ Set' : '✗ Not set');
console.log('   PORT:', process.env.PORT || '5000 (default)');
console.log('   JWT_SECRET:', process.env.JWT_SECRET ? '✓ Set' : '✗ Not set');
console.log('');

// Test MongoDB connection
console.log('2. Testing MongoDB connection:');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/arijit-singh';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('   ✓ MongoDB connection successful!');
  console.log('');
  console.log('✅ Backend setup is complete!');
  console.log('');
  console.log('Next steps:');
  console.log('   1. Start the server: npm run dev');
  console.log('   2. (Optional) Seed data: npm run seed');
  console.log('   3. Test API: http://localhost:5000/api/albums');
  mongoose.connection.close();
  process.exit(0);
})
.catch(err => {
  console.log('   ✗ MongoDB connection failed!');
  console.log('   Error:', err.message);
  console.log('');
  console.log('⚠️  Please make sure MongoDB is running:');
  console.log('   - Install MongoDB: https://www.mongodb.com/try/download/community');
  console.log('   - Or use MongoDB Atlas: https://www.mongodb.com/cloud/atlas');
  console.log('   - Update MONGO_URI in .env file if using Atlas');
  process.exit(1);
});

