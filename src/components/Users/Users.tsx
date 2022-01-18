import React from 'react'
import styles from './users.module.css'


let Users = (props: any) => {
    if (props.users.length === 0) {
        props.setUsers(  [
        
            { id: 1, photoUrl: 'https://media.istockphoto.com/vectors/yin-yang-panda-cute-logo-vector-illustration-vector-id1170794027?k=20&m=1170794027&s=612x612&w=0&h=QvlXWRWUe2hz_WUPvczDxdcMAOvH9NCv8P-GvzCVnqw=' , followed: false, fullName: "Dmitry", status: 'I am a pes', location: {city: 'Minsk', country: 'Belarus'} },
            { id: 2, photoUrl: 'https://media.istockphoto.com/vectors/yin-yang-panda-cute-logo-vector-illustration-vector-id1170794027?k=20&m=1170794027&s=612x612&w=0&h=QvlXWRWUe2hz_WUPvczDxdcMAOvH9NCv8P-GvzCVnqw=' , followed: true, fullName: "Oleg", status: 'hey', location: {city: 'Mogilev', country: 'Belarus'} },
            { id: 3, photoUrl: 'https://media.istockphoto.com/vectors/yin-yang-panda-cute-logo-vector-illustration-vector-id1170794027?k=20&m=1170794027&s=612x612&w=0&h=QvlXWRWUe2hz_WUPvczDxdcMAOvH9NCv8P-GvzCVnqw=' , followed: false, fullName: "Marina", status: 'hello world', location: {city: 'Moscow', country: 'Russia'} },
          
    ] )
    }
  


    return (
        <div>
            {
                props.users.map((u:any) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} />
                        </div>
                        <div>

                            { u.followed
                                ? <button onClick={ () => {props.unfollow(u.id)}}> Unfollow </button>
                                : <button onClick={ () => {props.follow(u.id)}}> Follow </button> }
                            
                        </div>
                    </span>
                    <span>
                        <span><div>{u.fullName}</div>{u.status}<div></div>
                        </span>

                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div> 
                        </span>
                    </span>
                     </div>)
            }
        </div>
    )
}

export default Users