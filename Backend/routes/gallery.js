const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');

// Get all gallery items
router.get('/', async (req, res) => {
  try {
    const { category, featured } = req.query;
    let query = {};
    if (category) query.category = category;
    if (featured === 'true') query.featured = true;
    const gallery = await Gallery.find(query).sort({ createdAt: -1 });
    res.json(gallery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single gallery item
router.get('/:id', async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create gallery item
router.post('/', async (req, res) => {
  try {
    const galleryItem = new Gallery(req.body);
    const savedItem = await galleryItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update gallery item
router.put('/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.json(galleryItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete gallery item
router.delete('/:id', async (req, res) => {
  try {
    const galleryItem = await Gallery.findByIdAndDelete(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.json({ message: 'Gallery item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

