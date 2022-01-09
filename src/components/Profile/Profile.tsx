import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: any) => {
  return (
    <div>
      <ProfileInfo store={props.store} />
      <MyPosts store={props.store}  
               dispatch={props.dispatch}
               newPostText={props.store.getState().profilePage.newPostText}/>
    </div>
  );
};

export default Profile;
