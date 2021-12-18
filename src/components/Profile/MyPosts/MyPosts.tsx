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
        <Post message='Hi, this is react-app' likesCount={3}/>
        <Post message='Hi, this is TypeScript' likesCount={0}/>
    </div>
  );
};

export default MyPosts;
