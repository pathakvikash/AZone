const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { default: mongoose } = require('mongoose');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database by their email address
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the provided password matches the stored password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If the user is found and the password matches, generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    // Return the token and the user's information
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'Email already taken' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const user = new User({ email, password: hashedPassword });

    // Save the user to the database
    await user.save();

    // Generate a JWT token for the user
    const secretKey = 'secret_key'; // Replace with your actual secret key
    const token = jwt.sign({ id: user._id }, secretKey, {
      expiresIn: '7d',
    });

    // Return the token and the user's information
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
