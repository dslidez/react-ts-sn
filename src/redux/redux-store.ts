import {createStore, combineReducers, applyMiddleware} from 'redux'
import { authReducer, authReducerActionType } from './auth-reducer';
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { usersReducer } from './users-reducer';
import thunkMiddleware from "redux-thunk"

export type AppStateType = ReturnType<typeof rootReducer>;
// export type AppActionType = UsersActionType | ProfileActionType | DialogsActionType | authReducerActionType


export const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))



export default store

// @ts-ignore
window.store = store;
