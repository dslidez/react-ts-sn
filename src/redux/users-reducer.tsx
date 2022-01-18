import { PostType } from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";



let initialState = {
  users: [
    //comment state
    //{ id: 1, photoUrl: 'https://media.istockphoto.com/vectors/yin-yang-panda-cute-logo-vector-illustration-vector-id1170794027?k=20&m=1170794027&s=612x612&w=0&h=QvlXWRWUe2hz_WUPvczDxdcMAOvH9NCv8P-GvzCVnqw=' , followed: false, fullName: "Dmitry", status: 'I am a pes', location: {city: 'Minsk', country: 'Belarus'} },
  //  { id: 2, photoUrl: 'https://media.istockphoto.com/vectors/yin-yang-panda-cute-logo-vector-illustration-vector-id1170794027?k=20&m=1170794027&s=612x612&w=0&h=QvlXWRWUe2hz_WUPvczDxdcMAOvH9NCv8P-GvzCVnqw=' , followed: true, fullName: "Oleg", status: 'hey', location: {city: 'Mogilev', country: 'Belarus'} },
   // { id: 3, photoUrl: 'https://media.istockphoto.com/vectors/yin-yang-panda-cute-logo-vector-illustration-vector-id1170794027?k=20&m=1170794027&s=612x612&w=0&h=QvlXWRWUe2hz_WUPvczDxdcMAOvH9NCv8P-GvzCVnqw=' , followed: false, fullName: "Marina", status: 'hello world', location: {city: 'Moscow', country: 'Russia'} },
  ]
};

export let usersReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case FOLLOW: 
      return { 
           ...state,
           users: state.users.map( (u:any) => {
             if (u.id === action.userId) {
               return {...u, followed: true}
             }
             return u;
           }) 
        }

    case UNFOLLOW: 
    return { 
      ...state,
      users: state.users.map( (u:any) => {
        if (u.id === action.userId) {
          return {...u, followed: false}
        }
        return u;
      }) 
   }


   case SET_USERS: {
     return { ...state, users: [ ...state.users, ...action.users] }
   }
    default:
      return state;
  }
};


export const followAC = ( userId: any ) => { return { type: FOLLOW, userId }}
export const unfollowAC = ( userId: any ) => { return {type: UNFOLLOW, userId }}
export const setUsersAC = ( users: any ) => { return {type: SET_USERS, users }}