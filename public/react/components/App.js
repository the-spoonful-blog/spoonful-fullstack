import React, { useState, useEffect } from "react";
import { PostList } from "./PostsList";
import apiURL from "../api";

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [isSinglePageView, setSinglePageView] = useState("false");
  const [postObjectTitle, setPostObjectTitle] = useState("");
  const [isAddingPost, setIsAddingPost] = useState("");

  async function fetchPosts() {
    try {
      const response = await fetch(`${apiURL}/posts`);
      const postsData = await response.json();

      setPosts(postsData);
    } catch (error) {
      console.log("Oh no! An error has occured.", error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  // Insert return statement here to show JSX and how home page will look

  return (
    <>
      {/* Here is where we would put the code for the nav bar and it's styling */}
      <main>
        {/* This is the post list so that all posts can seen on the home page  */}
        <PostList
          posts={posts}
          isSinglePageView={isSinglePageView}
          setSinglePageView={setSinglePageView}
          postObjectTitle={postObjectTitle}
          setPostObjectTitle={setPostObjectTitle}
        />
      </main>

      {/* Here is where the form component will go to create a new post */}

      <Form
        isAddingPost={isAddingPost}
        setIsAddingPost={setIsAddingPost}
        items={posts}
        setItems={setPosts}
        fetchPosts={fetchPosts}
      />
    </>
  );
};
