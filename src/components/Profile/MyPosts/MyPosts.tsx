import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props: any) => {
  
  let postsElements = props.posts.map((p: any) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let onAddPost = () => {
      props.addPost()
  };

  let onPostChange = () => {
    let text = newPostElement.current?.value;
    props.updateNewPostText(text)
  }

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        onAddPost();
    }
}


  return (
    <div className={c.content}>
      <h3>
        My posts
        <h3>
          <textarea 
                  value={props.newPostText} 
                  onChange={onPostChange} 
                  ref={newPostElement}  
                  rows={3} cols={40} 
                  placeholder={"Write something..."} 
                  onKeyPress={onKeyPressHandler}
                  >
          </textarea>
          <div className={c.addpostbut} onClick={onAddPost}>ADD POST</div>
        </h3>
      </h3>
      {postsElements}
    </div>
  );
};

export default MyPosts;
