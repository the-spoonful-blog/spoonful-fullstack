const { sequelize } = require("../db");
const { Post } = require("../models/index");
const { User } = require("../models/index");
const { posts, users } = require("../seedData");

describe("User, Post models", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  // Create User & Post
  test("can create a User", async () => {
    // TODO - test creating a user
    const user = await User.create(users[0]);
    expect(user.username).toBe("Hamburger Queen");
    expect(user.password).toBe("Food123");
  });

  test("can create a Post", async () => {
    // TODO - test creating a post
    const post = await Post.create(posts[0]);
    expect(post.image).toBe(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrYJG8gMULY0LvR9Q_kdl1ZDLu6zVdFDt0WclA070RPN_wamdHiE7TNuwmdBoZPRmP0h0&usqp=CAU"
    );
    expect(post.body).toBe(
      "This cheesy double patty hamburger is so juicy I want to eat three of them. Totally Recommend. 10/10"
    );
  });

  // Read User & Post
  test("can find a User", async () => {
    // TODO - test finding a user
    const foundUser = await User.findAll();
    expect(foundUser[0].username).toBe("Hamburger Queen");
    expect(foundUser[0].password).toBe("Food123");
  });

  test("can find a Post", async () => {
    // TODO - test finding a post
    const foundPost = await Post.findAll();
    expect(foundPost[0].image).toBe(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrYJG8gMULY0LvR9Q_kdl1ZDLu6zVdFDt0WclA070RPN_wamdHiE7TNuwmdBoZPRmP0h0&usqp=CAU"
    );
    expect(foundPost[0].body).toBe(
      "This cheesy double patty hamburger is so juicy I want to eat three of them. Totally Recommend. 10/10"
    );
  });
});

// Update User & Post
test("can update a User", async () => {
  // TODO - test updating a user
  const user = await User.findAll();
  const updatedUser = await user[0].update({
    username: "Food Forever",
    password: "Recipes246",
  });
  expect(updatedUser.username).toBe("Food Forever");
  expect(updatedUser.password).toBe("Recipes246");
});

test("can update a Post", async () => {
  // TODO - test updating a post
  const post = await Post.findAll();
  const updatedPost = await post[0].update({
    image: "https://pics.com",
    body: "This is an updated post",
  });
  expect(updatedPost.image).toBe("https://pics.com");
  expect(updatedPost.body).toBe("This is an updated post");
});

// Delete User & Post
test("can delete a User", async () => {
  // TODO - test deleting a user
  const foundUser = await User.findAll();
  const destroyUser = await foundUser[0].destroy();
  expect(destroyUser.username).toBe("Food Forever");
  expect(destroyUser.password).toBe("Recipes246");
});

test("can delete a Post", async () => {
  // TODO - test deleting a post
  const foundPost = await Post.findAll();
  const destroyPost = await foundPost[0].destroy();
  expect(destroyPost.image).toBe("https://pics.com");
  expect(destroyPost.body).toBe("This is an updated post");
});
