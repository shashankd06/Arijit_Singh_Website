const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/arijit-singh';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/albums', require('./routes/albums'));
app.use('/api/songs', require('./routes/songs'));
app.use('/api/lyrics', require('./routes/lyrics'));
app.use('/api/concerts', require('./routes/concerts'));
app.use('/api/merchandise', require('./routes/merchandise'));
app.use('/api/news', require('./routes/news'));
app.use('/api/gallery', require('./routes/gallery'));
app.use('/api/contact', require('./routes/contact'));

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'Arijit Singh API Server' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

