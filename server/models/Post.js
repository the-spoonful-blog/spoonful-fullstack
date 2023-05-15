const { sequelize } = require("../db");
const { Sequelize } = require("sequelize");

const Post = sequelize.define("post", {
  title: Sequelize.STRING,
  image: Sequelize.STRING,
  body: Sequelize.STRING,
});

module.exports = { Post };
