const userService = require("../services/userService");

exports.getUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
};

exports.createUser = (req, res) => {
  const user = userService.createUser(req.body.name);
  res.json(user);
};