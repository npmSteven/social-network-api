module.exports.sanitiesUser = (user) => ({
  id: user.id,
  email: user.email,
  username: user.username,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});