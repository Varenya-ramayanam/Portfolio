const express = require('express');
const Feedback = require('../models/feedback'); // Import Feedback model

const router = express.Router();

// GET route to fetch the number of feedbacks
router.get('/count', async (req, res) => {
    try {
        const feedbackCount = await Feedback.countDocuments();// Count total feedbacks
        res.status(200).json({ count: feedbackCount });
    } catch (error) {
        console.error('Error fetching feedback count:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
