import React from "react";
import styles from "./users.module.css";
import UserPhoto from "./../../assets/img/images.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";
import { followThunkCreator, unfollowThunkCreator } from './../../redux/users-reducer';

export let Users = (props: any) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }


  return (
    <div>
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
                onClick={() => props.unfollowThunkCreator(u.id)}>

                  Unfollow
                </button>
              ) : (
                <button
                disabled={props.followingInProgress.some((id:any) => id === u.id)}
                  onClick={() => props.followThunkCreator(u.id)}>

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
      <li></li>
       <div>
        {pages.map((p) => {
          return (
            <span
              onClick={(e) => {
                props.onPageChanged(p)
              }}
              className={props.currentPage === p ? styles.selectedPage : ""}
            >
              {p}
            </span>
          )
        })}
      </div>
    </div>
  )
}
