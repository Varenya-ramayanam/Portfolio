const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
