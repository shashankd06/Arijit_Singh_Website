const mongoose = require('mongoose');

const concertSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    default: 'India'
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  ticketUrl: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  isUpcoming: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Concert', concertSchema);

