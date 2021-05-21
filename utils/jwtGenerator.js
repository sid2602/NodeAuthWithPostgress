const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtGeneratior = (user_id) => {
  const peyload = {
    user: user_id,
  };

  return jwt.sign(peyload, process.env.jwtSecret, { expiresIn: 60 * 60 * 60 });
};

module.exports = jwtGeneratior;
