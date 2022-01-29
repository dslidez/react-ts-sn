import React from "react";
import styles from "./users.module.css";
import UserPhoto from "./../../assets/img/images.png";
import { NavLink } from "react-router-dom";


export let Users = (props: any) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
      pages.push(i)
    }


  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span onClick={(e) => {  props.onPageChanged(p); }}
                  className={
                props.currentPage === p ? styles.selectedPage : ""
              }
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
              <NavLink to={'/profile/' + u.id}>
              <img
                src={u.photos.small != null ? u.photos.small : UserPhoto}
                className={styles.userPhoto}
              />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  {" "}
                  Unfollow{" "}
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  {" "}
                  Follow{" "}
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
