const { sequelize } = require("../../db");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  image: Sequelize.STRING,
  postBody: Sequelize.TEXT,
});

module.exports = { Post };
