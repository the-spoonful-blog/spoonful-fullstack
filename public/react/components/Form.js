import React from "react";
import apiURL from "../api";
import { useState } from "react";

// Function and state to handle creating the new post
export function Form({
  posts,
  setPosts,
  isAddingPost,
  setIsAddingPost,
  postObjectTitle,
  setPostObjectTitle,
  fetchPosts,
}) {
  const [newPost, setNewPost] = useState({
    title: "",
    image: "",
    body: "",
  });

  // Creating the new post in React
  const createNewPost = async (postData) => {
    try {
      await fetch(`${apiURL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
    } catch (error) {
      console.log(error);
    }
  };
  //Event handler on the submit button
  const handleSubmit = (ev) => {
    ev.preventDefault();
    createNewPost(newPost);
    setNewPost({
      title: "",
      image: "",
      body: "",
    });
  };

  // Here is where return all of the form fields
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3> Create a New Post</h3>
        <input
          value={newPost.title}
          onChange={(ev) => setNewPost({ ...newPost, title: ev.target.value })}
          placeholder="Add post title here..."
          type="text"
          name="titles"
          required
        ></input>
        <br></br>
        <input
          value={newPost.image}
          onChange={(ev) => setNewPost({ ...newPost, image: ev.target.value })}
          placeholder="Insert your image URL here..."
          type="text"
          name="image"
          required
        ></input>
        <br></br>
        <input
          value={newPost.body}
          onChange={(ev) => setNewPost({ ...newPost, body: ev.target.value })}
          placeholder="Type your review here..."
          type="text"
          name="body"
          required
        ></input>
        <br></br>
        <button type="submit">Add New Post</button>
      </form>
    </>
  );
}
