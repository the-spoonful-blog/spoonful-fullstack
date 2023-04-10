const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const { User } = require("./User");
const { Post } = require("./Post");

module.exports = {
  sequelize,
  User,
  Post,
};
