import axios from "axios";
import React, { Props } from "react";
import styles from "./users.module.css";
import UserPhoto from "./../../assets/img/images.png";

class Users extends React.Component<any> {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response: any) => {
        this.props.setUsers(response.data.items);
      });
  }

  render(): any {
    return (
      <div>
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
