import React from 'react';

export const Post = ({post, isSinglePageView, setSinglePageView, setItemObjectTitle}) => {

  const handlePostClick = () => {
    setSinglePageView(!isSinglePageView);
    setItemObjectTitle(post.title);
  }

  const handleBackButton = async () => {
    setSinglePageView(!isSinglePageView);
  }

  return <>

        <div id="postContainer">
          <h3 id="postTitle">{post.title}</h3>
          <img id="postImage" src={post.image} alt={post.title} />
          <p id="postBody">{post.body}</p>
          <button onClick={!isSinglePageView ? handlePostClick : handleBackButton}>{!isSinglePageView ? `Go to post` : 'Back To List'}</button>
        </div> 
    
    </>
} 
