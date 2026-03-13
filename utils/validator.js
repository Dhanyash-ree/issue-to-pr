
// repos\issue-to-pr\utils\validator.js
const Joi = require('joi');

module.exports = {
  createUser: {
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
};
