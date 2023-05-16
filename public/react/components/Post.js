import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export const Post = ({
  post,
  isSinglePageView,
  setSinglePageView,
  setPostObjectTitle,
}) => {
  const handlePostClick = () => {
    setSinglePageView(!isSinglePageView);
    setPostObjectTitle(post.title);
  };

  const handleBackButton = async () => {
    setSinglePageView(!isSinglePageView);
  };

  return (
    <>
      <div className="App">
        <div>
          <Card style={{ color: "#000" }} className="blog-Post">
            <Card.Title className="title text-dark fs-1 fw-bold ">
              {post.title}
            </Card.Title>
            <Card.Img
              src={post.image}
              alt={post.title}
              className="blog-Post_Img"
            />
            <Card.Text>{post.body}</Card.Text>
            <button
              className="button"
              onClick={!isSinglePageView ? handlePostClick : handleBackButton}
            >
              {!isSinglePageView ? `Go to post` : "Back To List"}
            </button>
          </Card>
        </div>
      </div>
    </>
  );
};
