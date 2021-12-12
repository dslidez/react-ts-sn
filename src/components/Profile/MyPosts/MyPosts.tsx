import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={c.content}>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>ADD POST</button>
        </div>
      </div>
        <Post message='Hi, this is react-app'/>
        <Post message='Hi, this is TypeScript'/>
    </div>
  );
};

export default MyPosts;
