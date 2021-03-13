const { signInValidation } = require("../../validators/authenticationValidator");

module.exports.validateSignIn = (req, res, next) => {
  const { value, error } = signInValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ success: false, payload: { message: error.message } });
  }
  req.value = value;
  next();
};
