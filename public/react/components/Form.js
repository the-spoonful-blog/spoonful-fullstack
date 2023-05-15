import React from "react";
import apiURL from "../api";

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
  
    </>
  )
}
