import React from "react";

export const Post = ({post, isSinglePageView, setSinglePageView, setPostObjectTitle}) => {
  const handlePostClick = () => {
    setSinglePageView(!isSinglePageView);
  }
}