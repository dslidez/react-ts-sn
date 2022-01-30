import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
 userId: null,
 email: null,
 login: null,
 isAuth: false,
};

export let authReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA: 
      return { 
           ...state,
           ...action.data,
           isAuth: true
        }
    default:
      return state;
  }
};

//action creators:
export const setAuthUserData = ( userId: any , email: any, login: any) => { return { type: SET_USER_DATA, data: {userId, email, login} }}

//thunk creators:
export const getAuthUserDataTC = () => { 
  return (dispatch: any) => {
    debugger
  authAPI.me()
    .then((response: any) => {
    if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data
      dispatch(setAuthUserData(id, email, login));
    }
  });
 }
} 