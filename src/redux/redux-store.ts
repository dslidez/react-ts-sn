import {createStore, combineReducers, applyMiddleware} from 'redux'
import { authReducer } from './auth-reducer';
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { usersReducer } from './users-reducer';
import thunkMiddleware from "redux-thunk"

export type AppStateType = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))



export default store

// @ts-ignore
window.store = store;
