import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: any) => {
  return (
    <div>
      <ProfileInfo store={props.store} />
      <MyPosts store={props.store} 
               addPost={props.addPost}  
               updateNewPostText={props.updateNewPostText}
               newPostText={props.newPostText}/>
    </div>
  );
};

export default Profile;
