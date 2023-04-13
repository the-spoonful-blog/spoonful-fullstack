const { sequelize } = require("../../db")
const { Sequelize } = require("sequelize")

const Post = sequelize.define( "post" , {
  image: Sequelize.STRING,
  postBody: Sequelize.TEXT
});

module.exports = { Post }