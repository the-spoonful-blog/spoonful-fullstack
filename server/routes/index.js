const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const postsRouter = require("./posts");

// Router middleware
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// different model routers
router.use("/users", usersRouter);
router.use("/posts", postsRouter);

module.exports = router;
