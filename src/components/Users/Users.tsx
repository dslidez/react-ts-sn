import  axios from 'axios'
import React from 'react'
import styles from './users.module.css'
import UserPhoto from './../../assets/img/images.png'


let Users = (props: any) => {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: any) =>{

            props.setUsers(response.data.items)
    });

    }
  


    return (
        <div>
            {
                props.users.map((u:any) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : UserPhoto } className={styles.userPhoto} />
                        </div>
                        <div>

                            { u.followed
                                ? <button onClick={ () => {props.unfollow(u.id)}}> Unfollow </button>
                                : <button onClick={ () => {props.follow(u.id)}}> Follow </button> }
                            
                        </div>
                    </span>
                    <span>
                        <span><div>{u.name}</div>{u.status}<div></div>
                        </span>

                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div> 
                        </span>
                    </span>
                     </div>)
            }
        </div>
    )
}

export default Users