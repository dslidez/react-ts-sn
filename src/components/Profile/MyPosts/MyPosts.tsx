import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props: any) => {
 

  let postsElements = props.state.profilePage.posts.map( (p: any) =>  <Post message={p.message} likesCount={p.likesCount} /> )

  let newPostElement = React.createRef()

  let addPost = () => {
    let text = newPostElement.current.value
  }

  return (
    <div className={c.content}>
      <h3>
        My posts
        <h3>
          <textarea ref={newPostElement}></textarea>
          <button onClick={ addPost }>ADD POST</button>
        </h3>
      </h3>
      {postsElements}
    </div>
  );
};

export default MyPosts;
