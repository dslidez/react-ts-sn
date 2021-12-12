import React from "react";
import c from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={c.content}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxsa6Bi3ZEuSNlEpOJv9nu_HRNqCKMUAoGxasmY1kuvbmIgKy6csAGQ2Hfolit1f4LQs&usqp=CAU" />
      </div>
      <div>ava+description</div>
      <div>
        My posts
        <div>New post</div>
      </div>
      <div className={c.posts}>
        <div className={c.item}>post 1</div>
        <div className={c.item}>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
