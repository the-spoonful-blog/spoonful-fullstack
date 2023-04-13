const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { sequelize } = require("../db");

// Get all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// Get one user
router.get("/:id", async (req, res, next) => {
  try {
    const users = await User.findByPk(req.params.id);
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// Add a user
router.post("/", async (req, res, next) => {
  try {
    const addUser = await User.create(req.body);
    res.send(addUser);
  } catch (error) {
    next(error);
  }
});
// Delete a user
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedUser = await User.findByPk(req.params.id);
    await deletedUser.destroy();
    res.send(await User.findAll());
  } catch (error) {
    next(error);
  }
});

//Update User
router.put("/:id", async (req, res, next) => {
  try {
    const updatedUser = await User.update(req.body, {
      where: { id: req.params.id },
    });
    res.send(await User.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
