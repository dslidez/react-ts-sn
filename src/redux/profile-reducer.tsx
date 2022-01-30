import { profileAPI } from "../api/api";
import { PostType } from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";


let initialState = {
  posts: [
    { id: 1, message: "Hi, this is react-app", likesCount: 12 },
    { id: 2, message: "Hi, this is TypeScript", likesCount: 2 },
    { id: 3, message: "TS HELLO", likesCount: 23 },
  ],
  newPostText: 'Write here...',
  profile: null,
}

export let profileReducer = (state: any = initialState, action: any) => {
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
      
    default:
      return state;
  }
};

export const addPostAC = ( ) => ({type: ADD_POST})
export const setUserProfile = ( profile:any) => ({type: SET_USER_PROFILE, profile})

//thunk
export const getUserProfileTC = ( userId:any) => (dispatch: any) => {
  profileAPI.getProfile(userId).then((response: any) => {
    dispatch(setUserProfile(response.data));
  });
}


export const updateNewPosTextAC = (text: string | undefined) => 
( {  type: UPDATE_NEW_POST_TEXT, newText: text} )

