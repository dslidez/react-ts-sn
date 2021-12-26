import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, this is react-app", likesCount: 12 },
    { id: 2, message: "Hi, this is TypeScript", likesCount: 2 },
    { id: 2, message: "TS HELLO", likesCount: 23 },
  ];

  let postsElements = posts.map( p =>  <Post message={p.message} likesCount={p.likesCount} /> )

  return (
    <div className={c.content}>
      <h3>
        My posts
        <h3>
          <textarea></textarea>
          <button>ADD POST</button>
        </h3>
      </h3>
      {postsElements}
    </div>
  );
};

export default MyPosts;
