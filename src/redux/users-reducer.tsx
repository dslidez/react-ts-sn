import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FETCHING_PROGRESS = "TOGGLE_IS_FETCHING_PROGRESS";



let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
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
     return { ...state, users:action.users}
   }

   case SET_CURRENT_PAGE: {
     return { ...state, currentPage: action.currentPage}
   }
   case SET_TOTAL_USERS_COUNT: {
     return { ...state, totalUsersCount: action.count}
   }
   case TOGGLE_IS_FETCHING: {
     return { ...state, isFetching: action.isFetching}
   }
   case TOGGLE_IS_FETCHING_PROGRESS: {
     return { ...state, 
      followingInProgress: action.isFetching 
      ?[...state.followingInProgress, action.userId] :
       state.followingInProgress.filter((id:any) => id !== action.userId)
      }
   }
    default:
      return state;
  }
};

//action creators
export const follow = ( userId: any ) => { return { type: FOLLOW, userId }}
export const unfollow = ( userId: any ) => { return {type: UNFOLLOW, userId }}
export const setUsers = ( users: any ) => { return {type: SET_USERS, users }}
export const setCurrentPage = ( currentPage: any ) => { return {type: SET_CURRENT_PAGE, currentPage }}
export const setTotalUsersCount = ( totalUsersCount: any ) => { return {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount }}
export const toggleIsFetching = ( isFetching: boolean ) => { return {type: TOGGLE_IS_FETCHING, isFetching}}
export const toggleFollowingProgress = ( isFetching: boolean,  userId: any ) => { return {type: TOGGLE_IS_FETCHING_PROGRESS, isFetching,  userId}}

//thunks

export const getUsersThunkCreator = (currentPage: any, pageSize:any) => { 
  return (
 (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage,pageSize).then((data: any) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    });
  })
}

export const followThunkCreator  = (userId: any) => { 
  return (
 (dispatch: any) => {
  dispatch(toggleFollowingProgress(true, userId));
  usersAPI.follow(userId)
    .then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(follow(userId));
      }
      dispatch(toggleFollowingProgress(false, userId))
    });
})
}

export const unfollowThunkCreator  = (userId: any) => { 
  return (
 (dispatch: any) => {
  dispatch(toggleFollowingProgress(true, userId));
  usersAPI.unfollow(userId)
    .then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollow(userId));
      }
      dispatch(toggleFollowingProgress(false, userId))
    });
})
}