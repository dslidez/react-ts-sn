import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi, this is react-app", likesCount: 12 },
    { id: 2, message: "Hi, this is TypeScript", likesCount: 2 },
  ];

  return (
    <div className={c.content}>
      <h3>
        My posts
        <h3>
          <textarea></textarea>
          <button>ADD POST</button>
        </h3>
      </h3>
      <Post message={postData[0].message} likesCount={postData[0].likesCount} />
      <Post message={postData[1].message} likesCount={postData[1].likesCount} />
    </div>
  );
};

export default MyPosts;
