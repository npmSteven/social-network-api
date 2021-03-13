const { signUpValidation } = require("../../validators/authenticationValidator");

module.exports.validateSignUp = (req, res, next) => {
  const { value, error } = signUpValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ success: false, payload: { message: error.message } });
  }
  req.value = value;
  next();
};
