import c from "./ProfileInfo.module.css";
import { ProfileStatus } from "./ProfileStatus";
import React from 'react'
import defaultSmallUserPhoto from './../../../assets/img/imageuser.png'



const ProfileInfo = (props:any) => {
  return (
    <div className={c.content}>
    <div className={c.content2}>

      {/* <div className={c.img}>
        <img  alt="NO PIC" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxsa6Bi3ZEuSNlEpOJv9nu_HRNqCKMUAoGxasmY1kuvbmIgKy6csAGQ2Hfolit1f4LQs&usqp=CAU" />
      </div> */}
      <div className={c.img}>
       <img src={
                    props.profile.photos.large !== null
                        ? props.profile.photos.large
                        :  defaultSmallUserPhoto 
                }/>
      </div>
      <h2>{props.profile.fullName}</h2>
      <div className={c.status}><ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>
      
      <div>Description: {props.profile.aboutMe}</div>
    </div>
    </div>
  );
};

export default ProfileInfo;
