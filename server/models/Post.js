const { sequelize } = require("../db");
const { Sequelize } = require("sequelize");

const Post = sequelize.define("post", {
  title: Sequelize.STRING,
  image: Sequelize.STRING,
  body: Sequelize.TEXT,
});

module.exports = { Post };
