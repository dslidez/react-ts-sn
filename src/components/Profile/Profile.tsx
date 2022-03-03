import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import preloader from './../../assets/img/WMDx.gif'
import s from './Profile.module.css'

const Profile = (props: any) => {
  if (!props.profile) {
    return <div>   <img className={s.gif} src={preloader}/>  </div>
  }

  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}  />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
