const express = require('express');
const router = express.Router();
const Scholarship = require('../models/Scholarship');

// Get all scholarships
router.get('/', async (req, res) => {
  try {
    const scholarships = await Scholarship.find();
    res.json(scholarships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new scholarship
router.post('/', async (req, res) => {
  const scholarship = new Scholarship({
    name: req.body.name,
    description: req.body.description,
    country: req.body.country,
    eligibility: req.body.eligibility,
    deadline: req.body.deadline,
  });

  try {
    const newScholarship = await scholarship.save();
    res.status(201).json(newScholarship);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
