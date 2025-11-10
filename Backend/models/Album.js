const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  coverImage: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  songs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song'
  }],
  genre: {
    type: String,
    default: 'Bollywood'
  },
  spotifyUrl: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Album', albumSchema);

