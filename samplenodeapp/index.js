require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

connectToDB();

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const userInfo = await User.create({ name, email });
    res.status(201).json(userInfo);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
