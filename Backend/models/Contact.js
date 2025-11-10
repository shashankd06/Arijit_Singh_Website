const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    default: ''
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Booking', 'General', 'Media', 'Collaboration'],
    default: 'General'
  },
  status: {
    type: String,
    enum: ['Pending', 'Replied', 'Resolved'],
    default: 'Pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', contactSchema);

