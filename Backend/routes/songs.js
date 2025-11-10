const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

// Get all songs
router.get('/', async (req, res) => {
  try {
    const songs = await Song.find().populate('album').sort({ popularity: -1, releaseDate: -1 });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single song
router.get('/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id).populate('album');
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create song
router.post('/', async (req, res) => {
  try {
    const song = new Song(req.body);
    const savedSong = await song.save();
    res.status(201).json(savedSong);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update song
router.put('/:id', async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.json(song);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete song
router.delete('/:id', async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.json({ message: 'Song deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

