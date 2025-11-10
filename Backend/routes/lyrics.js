const express = require('express');
const router = express.Router();
const Lyric = require('../models/Lyric');
const Song = require('../models/Song');

// Get all lyrics
router.get('/', async (req, res) => {
  try {
    const lyrics = await Lyric.find().populate('song');
    res.json(lyrics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get lyrics by song ID
router.get('/song/:songId', async (req, res) => {
  try {
    const lyrics = await Lyric.findOne({ song: req.params.songId }).populate('song');
    if (!lyrics) {
      return res.status(404).json({ message: 'Lyrics not found' });
    }
    res.json(lyrics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single lyric
router.get('/:id', async (req, res) => {
  try {
    const lyric = await Lyric.findById(req.params.id).populate('song');
    if (!lyric) {
      return res.status(404).json({ message: 'Lyric not found' });
    }
    res.json(lyric);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create lyric
router.post('/', async (req, res) => {
  try {
    const lyric = new Lyric(req.body);
    const savedLyric = await lyric.save();
    res.status(201).json(savedLyric);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update lyric
router.put('/:id', async (req, res) => {
  try {
    const lyric = await Lyric.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!lyric) {
      return res.status(404).json({ message: 'Lyric not found' });
    }
    res.json(lyric);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete lyric
router.delete('/:id', async (req, res) => {
  try {
    const lyric = await Lyric.findByIdAndDelete(req.params.id);
    if (!lyric) {
      return res.status(404).json({ message: 'Lyric not found' });
    }
    res.json({ message: 'Lyric deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

