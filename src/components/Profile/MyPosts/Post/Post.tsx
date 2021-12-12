import React from "react";
import c from "./Post.module.css";

type PostType = {
  message: string
}

const Post = (props: PostType) => {
  return (
    <div>
      <div className={c.item}>
        <img src="https://cdn.dribbble.com/users/1573719/screenshots/15675086/media/460a3198328726158e47eb208f46822e.png?compress=1&resize=400x300" />
        {props.message}
        <div>
          <span>LIKE</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
