import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";

const Profile: React.FC<any> = (props: any) => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxsa6Bi3ZEuSNlEpOJv9nu_HRNqCKMUAoGxasmY1kuvbmIgKy6csAGQ2Hfolit1f4LQs&usqp=CAU" />
      </div>
      <div>ava+description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
