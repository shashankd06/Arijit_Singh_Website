const express = require('express');
const router = express.Router();
const Album = require('../models/Album');

// Get all albums
router.get('/', async (req, res) => {
  try {
    const albums = await Album.find().populate('songs').sort({ releaseDate: -1 });
    res.json(albums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single album
router.get('/:id', async (req, res) => {
  try {
    const album = await Album.findById(req.params.id).populate('songs');
    if (!album) {
      return res.status(404).json({ message: 'Album not found' });
    }
    res.json(album);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create album
router.post('/', async (req, res) => {
  try {
    const album = new Album(req.body);
    const savedAlbum = await album.save();
    res.status(201).json(savedAlbum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update album
router.put('/:id', async (req, res) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!album) {
      return res.status(404).json({ message: 'Album not found' });
    }
    res.json(album);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete album
router.delete('/:id', async (req, res) => {
  try {
    const album = await Album.findByIdAndDelete(req.params.id);
    if (!album) {
      return res.status(404).json({ message: 'Album not found' });
    }
    res.json({ message: 'Album deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

