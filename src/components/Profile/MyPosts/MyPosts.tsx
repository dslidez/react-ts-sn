import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={c.content}>
      <h3>
        My posts
        <h3>
          <textarea></textarea>
          <button>ADD POST</button>
        </h3>
      </h3>
        <Post message='Hi, this is react-app' likesCount={3}/>
        <Post message='Hi, this is TypeScript' likesCount={0}/>
    </div>
  );
};

export default MyPosts;
