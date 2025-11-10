const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Get all contact messages
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single contact message by ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });

    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new contact message (save to database)
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message, type } = req.body;

    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
      type
    });

    const savedContact = await newContact.save();

    res.status(201).json({
      message: 'Your message has been received. We will get back to you soon!',
      contact: savedContact
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update contact (mostly used for updating status)
router.put('/:id', async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: 'Contact not found' });

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete contact message
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);

    if (!deleted) return res.status(404).json({ message: 'Contact not found' });

    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
