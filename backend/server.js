const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./db/db');
const feedbackRoutes = require('./routes/feedback'); // Import feedback route
const countRoute = require('./routes/number');

const cors = require('cors');
const port = process.env.PORT;

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); 
 
// Connect to MongoDB
connectDB();

app.get("/",(req,res)=>{
    res.send('Hello there!!');
})

app.use('/api/feedback', feedbackRoutes);
app.use('/v1', countRoute);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
