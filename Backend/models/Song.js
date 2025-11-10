const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album'
  },
  duration: {
    type: String,
    default: '0:00'
  },
  releaseDate: {
    type: Date,
    default: Date.now
  },
  movie: {
    type: String,
    default: ''
  },
  composers: [{
    type: String
  }],
  lyricists: [{
    type: String
  }],
  audioUrl: {
    type: String,
    default: ''
  },
  coverImage: {
    type: String,
    default: ''
  },
  popularity: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Song', songSchema);

