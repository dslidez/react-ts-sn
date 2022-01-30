import React from "react";
import styles from "./users.module.css";
import UserPhoto from "./../../assets/img/images.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

export let Users = (props: any) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              className={props.currentPage === p ? styles.selectedPage : ""}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u: any) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : UserPhoto}
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button disabled={props.followingInProgress.some((id:any) => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true)
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                      withCredentials: true,
                      headers: { 
                      "API-KEY" : "fc086433-a3b2-4e29-b729-0bb49b9ccb7d" }
                    })
                      .then((response: any) => {
                        if (response.data.resultCode == 0) {
                          props.unfollow(u.id);
                        }
                        props.toggleFollowingProgress(false)
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                disabled={props.followingInProgress.some((id:any) => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true)
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                      withCredentials: true,
                      headers: { 
                        "API-KEY" : "fc086433-a3b2-4e29-b729-0bb49b9ccb7d" }
                    })
                      .then((response: any) => {
                        if (response.data.resultCode == 0) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(false)
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              {u.status}
              <div></div>
            </span>

            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
