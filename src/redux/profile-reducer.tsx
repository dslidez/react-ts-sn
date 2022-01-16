import { PostType } from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
  posts: [
    { id: 1, message: "Hi, this is react-app", likesCount: 12 },
    { id: 2, message: "Hi, this is TypeScript", likesCount: 2 },
    { id: 3, message: "TS HELLO", likesCount: 23 },
  ],
  newPostText: 'Write here...'
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
      
    default:
      return state;
  }
};
