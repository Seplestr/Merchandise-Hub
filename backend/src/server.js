const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/merchandise_portal');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Import models
const User = require('./models/user.model');
const Product = require('./models/product.model');
const Order = require('./models/order.model');

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Merchandise Portal API' });
});

// Test route to check models
app.get('/api/test', (req, res) => {
  res.json({
    models: {
      user: User.schema.obj,
      product: Product.schema.obj,
      order: Order.schema.obj
    }
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});