import React from "react";
import { Post } from "./Post";


// This is the Post Li
export const PostList = ({ posts, isSinglePageView, setSinglePageView, postObjectTitle, setPostObjectTitle }) => {
  return (
    <>
      {isSinglePageView
        ? posts
            .filter((post) => post.title === postObjectTitle)
            .map((post1, idx) => (
              <Post
                post={post1}
                key={idx}
                setPostObjectTitle={setPostObjectTitle}
                isSinglePageView={isSinglePageView}
                setSinglePageView={setSinglePageView}
              />
            ))
        : posts.map((post, idx) => (
            <Post
              post={post}
              key={idx}
              setPostObjectTitle={setPostObjectTitle}
              isSinglePageView={isSinglePageView}
              setSinglePageView={setSinglePageView}
            />
          ))}
    </>
  );
};
