import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

type PostType = {
  id: number
  message: string
  likesCount: number
}
export type ProfileInitialStateType = {
  posts: Array<PostType>
  newPostText: string
  profile: ProfilePageType | null
  status: string
}

export type ProfilePageType = {
  aboutMe: string,
  lookingForAJob: boolean,
  lookingForAJobDescription: null | string,
  fullName: string,
  userId: number,
  photos: PhotosType
}

export type PhotosType = { small: string, large: string }

export type ProfileActionType = ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPosTextAC>
  | ReturnType<typeof setUserProfile>



let initialState: ProfileInitialStateType = {
  posts: [
    { id: 1, message: "Hi, this is react-app", likesCount: 12 },
    { id: 2, message: "Hi, this is TypeScript", likesCount: 2 },
    { id: 3, message: "TS HELLO", likesCount: 23 },
  ],
  newPostText: 'Write here...',
  profile: null,
  status: ''
}

export let profileReducer = (state: ProfileInitialStateType = initialState, action: any) => {
  switch (action.type) {

    
    case ADD_POST:
      let newPost: PostType = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {...state,
                       posts: [...state.posts, newPost],
                       newPostText: ""  } 
      
    
    case UPDATE_NEW_POST_TEXT: 
      return {...state, 
                       newPostText: action.newText} 
      
    case SET_USER_PROFILE: 
      return {...state, 
                       profile: action.profile} 
    case SET_STATUS: 
      return {...state, 
                       status: action.status} 
      
    default:
      return state;
  }
};

export const addPostAC = ( ) => ({type: ADD_POST})
export const setUserProfile = ( profile:any) => ({type: SET_USER_PROFILE, profile})
export const setStatus = ( status:any) => ({type: SET_STATUS, status})

//thunk
export const getUserProfileTC = ( userId:any) => (dispatch: any) => {
  profileAPI.getProfile(userId).then((response: any) => {
    dispatch(setUserProfile(response.data));
  });
}
export const getStatus = ( userId:any) => (dispatch: any) => {
  profileAPI.getStatus(userId)
  .then((response: any) => {
    dispatch(setStatus(response.data));
  });
}
export const updateStatus = ( status: string ) => (dispatch: any) => {
  profileAPI.updateStatus(status)
  .then((response: any) => {
    if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
    }
  });
}


export const updateNewPosTextAC = (text: string | undefined) => 
( {  type: UPDATE_NEW_POST_TEXT, newText: text} )

