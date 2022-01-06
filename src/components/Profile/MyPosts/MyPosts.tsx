import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props: any) => {
  const state = props.store.getState()
  let postsElements = state.profilePage.posts.map((p: any) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  };

  let onPostChange = () => {
    let text = newPostElement.current?.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text })

  }



  return (
    <div className={c.content}>
      <h3>
        My posts
        <h3>
          <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement}></textarea>
          <button onClick={addPost}>ADD POST</button>
        </h3>
      </h3>
      {postsElements}
    </div>
  );
};

export default MyPosts;
