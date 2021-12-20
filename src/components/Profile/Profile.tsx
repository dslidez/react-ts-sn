import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props:any) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
