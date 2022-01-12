import React from "react";
import { addPostAC, updateNewPosTextAC } from "../../../redux/store";
import MyPosts from "./MyPosts";
import Post from "./Post/Post";

const MyPostsContainer = (props: any) => {
  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    props.store.dispatch(addPostAC());
  };

  let onPostChange = (text: string) => {
    let action = updateNewPosTextAC(text)
    props.store.dispatch(action)

  }


  return (<MyPosts store={props.store}   posts={props.posts} updateNewPostText={onPostChange} addPost={addPost} />);
};

export default MyPostsContainer;
