import React from "react";

export const Post = ({ post, isSinglePageView, setSinglePageView, setPostObjectTitle }) => {
  const handlePostClick = () => {
    setSinglePageView(!isSinglePageView);
    setPostObjectTitle(post.title);
  };

  const handleBackButton = async () => {
    setSinglePageView(!isSinglePageView);
  };
};

//Insert return statements here with CSS styling tags and props

return (
  <div id="itemContainer">
    <h3 id="postTitle">{post.title}</h3>
    <img id="postImage" src={post.image} alt={post.title} />
    <p id="postBody">{post.postBody}</p>
    <button onClick={!isSinglePageView ? handleItemClick : handleBackButton}>
      {!isSinglePageView ? `Go to post` : "Back To List"}
    </button>
  </div>
);
