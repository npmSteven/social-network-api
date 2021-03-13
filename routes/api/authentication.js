const express = require('express');
const bcryptjs = require('bcryptjs');

const { UserModel } = require('../../models/UserModel');

const { validateSignUp } = require('../../middleware/validators/validateSignUp');

const router = express.Router();

router.post('/signUp', validateSignUp, async (req, res) => {
  try {
    const { email, username, password } = req.value;
  
    // Validate that the user doesn't already exist
    const foundUser = await UserModel.findOne({ username });
    if (foundUser) return res.status(409).json({ success: false, payload: { message: `User already exists` }});
    
    // Hash and salt password
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);
  
    const newUser = await UserModel.create({
      email,
      username,
      password: hash,
    });
  
    res.json({ success: true, payload: newUser });
  } catch (error) {
    console.error('ERROR - authentication.js - /signUp', error);
    res.status(500).json({ success: false, payload: { message: 'Internal server error' } });
  }
});

module.exports = router;
