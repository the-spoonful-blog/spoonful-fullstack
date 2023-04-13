const express = require("express");
const router = express.Router();
const { Post } = require("../models/Post");
const { sequelize } = require("../db");

// Get all posts
router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.send(posts);
  } catch (error) {
    next(error);
  }
});

// Get one post
router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id);
    res.send(post);
  } catch (error) {
    next(error);
  }
});

// Add a post
router.post("/", async (req, res, next) => {
  try {
    const addPost = await Post.create(req.body);
    res.send(addPost);
  } catch (error) {
    next(error);
  }
});
// Delete post
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedPost = await Post.findByPk(req.params.id);
    await deletedPost.destroy();
    res.send(await Post.findAll());
  } catch (error) {
    next(error);
  }
});

//Update Post
router.put("/:id", async (req, res, next) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: { id: req.params.id },
    });
    res.send(await Post.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
