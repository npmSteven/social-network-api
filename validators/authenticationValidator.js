const Joi = require('joi'); 

const username = Joi.string().trim().min(3).max(32).required();
const password = Joi.string().trim().min(6).max(255).required();

const signUpValidation = Joi.object({
  email: Joi.string().trim().email({ tlds: { allow: false } }).required(),
  username,
  password,
});

const signInValidation = Joi.object({
  username,
  password,
});

module.exports = {
  signInValidation,
  signUpValidation,
};
