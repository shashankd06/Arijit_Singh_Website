const express = require('express');
const router = express.Router();
const Merchandise = require('../models/Merchandise');

// Get all merchandise
router.get('/', async (req, res) => {
  try {
    const { category, featured } = req.query;
    let query = {};
    if (category) query.category = category;
    if (featured === 'true') query.featured = true;
    const merchandise = await Merchandise.find(query).sort({ createdAt: -1 });
    res.json(merchandise);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single merchandise item
router.get('/:id', async (req, res) => {
  try {
    const item = await Merchandise.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Merchandise not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create merchandise
router.post('/', async (req, res) => {
  try {
    const merchandise = new Merchandise(req.body);
    const savedMerchandise = await merchandise.save();
    res.status(201).json(savedMerchandise);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update merchandise
router.put('/:id', async (req, res) => {
  try {
    const merchandise = await Merchandise.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!merchandise) {
      return res.status(404).json({ message: 'Merchandise not found' });
    }
    res.json(merchandise);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete merchandise
router.delete('/:id', async (req, res) => {
  try {
    const merchandise = await Merchandise.findByIdAndDelete(req.params.id);
    if (!merchandise) {
      return res.status(404).json({ message: 'Merchandise not found' });
    }
    res.json({ message: 'Merchandise deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

