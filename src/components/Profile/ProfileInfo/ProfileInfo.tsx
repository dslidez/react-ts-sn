import c from "./ProfileInfo.module.css";



const ProfileInfo = (props:any) => {
  return (
    <div className={c.content}>
      <div className={c.img}>
        <img  alt="NO PIC" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxsa6Bi3ZEuSNlEpOJv9nu_HRNqCKMUAoGxasmY1kuvbmIgKy6csAGQ2Hfolit1f4LQs&usqp=CAU" />
      </div>
      <div>
      <img src={props.profile.photos.large}/>
      </div>
      <h2>{props.profile.fullName}</h2>
      <div>Description: {props.profile.aboutMe}</div>
    </div>
  );
};

export default ProfileInfo;
