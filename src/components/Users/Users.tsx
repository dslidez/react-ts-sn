import axios from "axios";
import React, { Props } from "react";
import styles from "./users.module.css";
import UserPhoto from "./../../assets/img/images.png";

class Users extends React.Component<any> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response: any) => {
        this.props.setUsers(response.data.items);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response: any) => {
        this.props.setUsers(response.data.items);
      });
  }

  render(): any {

    let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
      pages.push(i)
    }


    return (
      <div>
        <div>
          {pages.map(p=> {
          return <span onClick={(e) => { this.onPageChanged(p)}}
          className={this.props.currentPage === p ? styles.selectedPage : ''} >{p}</span>
          })}
        </div>
        {this.props.users.map((u: any) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : UserPhoto}
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    {" "}
                    Unfollow{" "}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default Users;
