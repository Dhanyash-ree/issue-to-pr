let users = [];

exports.getAllUsers = () => {
  return users;
};

exports.createUser = (name) => {
  const user = { id: users.length + 1, name };
  users.push(user);
  return user;
};