import {createStore, combineReducers} from 'redux'
import { authReducer } from './auth-reducer';
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { usersReducer } from './users-reducer';


export type AppStateType = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(rootReducer)


export default store
