import { Dispatch } from "redux";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

export type authReducerActionType = ReturnType<typeof setAuthUserData>

export type AuthInitialStateType = {
  userId: null | number,
  email: null | string,
  login: null | string,
  isAuth: boolean
}

let initialState: AuthInitialStateType = {
 userId: null,
 email: null,
 login: null,
 isAuth: false,
};

//add AppActionType!!!
export let authReducer = (state: AuthInitialStateType = initialState, action: any): AuthInitialStateType => {
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
  return (dispatch: Dispatch) => {
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