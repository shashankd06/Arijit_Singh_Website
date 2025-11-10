const express = require('express');
const router = express.Router();
const Concert = require('../models/Concert');

// Get all concerts
router.get('/', async (req, res) => {
  try {
    const { upcoming } = req.query;
    let query = {};
    if (upcoming === 'true') {
      query.isUpcoming = true;
      query.date = { $gte: new Date() };
    }
    const concerts = await Concert.find(query).sort({ date: 1 });
    res.json(concerts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single concert
router.get('/:id', async (req, res) => {
  try {
    const concert = await Concert.findById(req.params.id);
    if (!concert) {
      return res.status(404).json({ message: 'Concert not found' });
    }
    res.json(concert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create concert
router.post('/', async (req, res) => {
  try {
    const concert = new Concert(req.body);
    const savedConcert = await concert.save();
    res.status(201).json(savedConcert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update concert
router.put('/:id', async (req, res) => {
  try {
    const concert = await Concert.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!concert) {
      return res.status(404).json({ message: 'Concert not found' });
    }
    res.json(concert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete concert
router.delete('/:id', async (req, res) => {
  try {
    const concert = await Concert.findByIdAndDelete(req.params.id);
    if (!concert) {
      return res.status(404).json({ message: 'Concert not found' });
    }
    res.json({ message: 'Concert deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

