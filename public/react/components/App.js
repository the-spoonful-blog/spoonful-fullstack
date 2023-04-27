import React, { useState, useEffect } from "react";
import { PostList } from "./PostsList";
import apiURL from "../api";

export const App = () => {
  const [posts, setPost] = useState([]);
  const [isSinglePageView, setSinglePageView] = useState("false");
  const [postObjectTitle, setPostObjectTitle] = useState('');
  const [isAddingPost, setIsAddingPost] = useState('');

  async function fetchPosts(){
    try {
      const response = await fetch(`${apiURL}/posts`);
      const postsData = await response.json();

      setPost(postsData);
    } catch (error) {
      console.log("Oh no! An error has occured.", error);
    }
  } 
};

useEffect(() => {
  fetchPosts();
}, []);

// Insert return statement here to show JSX and how home page will look 