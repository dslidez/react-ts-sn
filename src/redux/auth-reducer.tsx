
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

//action creators
export const setAuthUserData = ( userId: any , email: any, login: any) => { return { type: SET_USER_DATA, data: {userId, email, login} }}

export const getAuthUserDataTC = () => (dispatch: any) => {

} 