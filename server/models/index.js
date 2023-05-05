const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const { User } = require("./User");
const { Post } = require("./Post");

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Post,
};
