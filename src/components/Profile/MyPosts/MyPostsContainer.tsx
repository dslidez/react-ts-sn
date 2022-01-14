import React from "react";
import { connect } from "react-redux";
import { addPostAC, updateNewPosTextAC } from "../../../redux/store";
import MyPosts from "./MyPosts";
import Post from "./Post/Post";

let mapStateToProps = (state: any) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {
    updateNewPostText: (text: string) => {
      let action = updateNewPosTextAC(text)
      dispatch(action)
    },
    addPost:  () => {
     dispatch(addPostAC());
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;
