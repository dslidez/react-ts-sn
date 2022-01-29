
const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
 userId: null,
 email: null,
 login: null,
};

export let authReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA: 
      return { 
           ...state,
           ...action.data
        }
    default:
      return state;
  }
};

//action creators
export const setUserData = ( userId: any , email: any, login: any) => { return { type: SET_USER_DATA, data: {userId, email, login} }}
