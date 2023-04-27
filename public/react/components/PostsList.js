import React from 'react';
import { Post} from './Post';

export const PostList = ({posts, isSinglePageView, setSinglePageView, postObjectTitle, setPostObjectTitle}) => {

  return (
    <>
      {
        isSinglePageView
        ? posts.filter(post => post.title === postObjectTitle).map((post1, idx) =>
            <Post post={post1} key={idx} setPostObjectTitle={setPostObjectTitle} isSinglePageView={isSinglePageView} setSinglePageView={setSinglePageView}/>
          )
        : posts.map((post, idx) => <post post={post} key={idx} setPostObjectTitle={setPostObjectTitle} isSinglePageView={isSinglePageView} setSinglePageView={setSinglePageView}/>)
      }
    </>
  )
}
