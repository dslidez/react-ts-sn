import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props: any) => {
 

  let postsElements = props.state.profilePage.posts.map( (p: any) =>  <Post message={p.message} likesCount={p.likesCount} /> )

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
