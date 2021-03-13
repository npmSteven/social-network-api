const express = require('express');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const { UserModel } = require('../../models/UserModel');
const { sanitiesUser } = require('../../utils');
const {
  validateSignUp,
} = require('../../middleware/validators/validateSignUp');
const {
  validateSignIn,
} = require('../../middleware/validators/validateSignIn');
const config = require('../../config');
const { authCheck } = require('../../middleware/authCheck');

const router = express.Router();

router.post('/signUp', validateSignUp, async (req, res) => {
  try {
    const { email, username, password } = req.value;

    // Validate that the user doesn't already exist
    const foundUser = await UserModel.findOne({ username });
    if (foundUser)
      return res
        .status(409)
        .json({ success: false, payload: { message: `User already exists` } });

    // Hash and salt password
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);

    // Create user
    const newUser = await UserModel.create({
      email,
      username,
      password: hash,
    });

    // Generate token for user
    const token = jsonwebtoken.sign(
      { id: newUser.id },
      config.authentication.secret,
      { expiresIn: '24h' }
    );

    res.json({ success: true, payload: { token, user: sanitiesUser(newUser) } });
  } catch (error) {
    console.error('ERROR - authentication.js - /signUp', error);
    res
      .status(500)
      .json({ success: false, payload: { message: 'Internal server error' } });
  }
});

router.post('/signIn', validateSignIn, async (req, res) => {
  try {
    const { username, password } = req.value;
  
    // Check if the user exists
    const foundUser = await UserModel.findOne({ username });
    if (!foundUser) return res.status(401).json({ success: false, payload: { message: 'Username or password is incorrect' } });
  
    // Check if the user's password is correct
    const isMatch = await bcryptjs.compare(password, foundUser.password);
    if (!isMatch) return res.status(401).json({ success: false, payload: { message: 'Username or password is incorrect' } });
    
    // Generate token for user
    const token = jsonwebtoken.sign(
      { id: foundUser.id },
      config.authentication.secret,
      { expiresIn: '24h' }
    );
  
    res.json({ success: true, payload: { token, user: sanitiesUser(foundUser) } });
  } catch (error) {
    console.error('ERROR - authentication.js - /signIn', error);
    res
      .status(500)
      .json({ success: false, payload: { message: 'Internal server error' } });
  }
});

router.get('/test', authCheck, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
