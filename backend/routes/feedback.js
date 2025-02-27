const express = require('express');
const Feedback = require('../models/feedback'); // Import Feedback model

const router = express.Router();

// POST route to submit feedback
router.post('/submit', async (req, res) => {
    try {
        const { user, email, message} = req.body;

        // Validate required fields
        if (!user || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create a new feedback entry
        const feedback = new Feedback({ user, email, message});
        await feedback.save();

        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        console.error('Error submitting feedback:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
