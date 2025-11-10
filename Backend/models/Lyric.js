const mongoose = require('mongoose');

const lyricSchema = new mongoose.Schema({
  song: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song',
    required: true
  },
  lyrics: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'Hindi'
  },
  translation: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Lyric', lyricSchema);

