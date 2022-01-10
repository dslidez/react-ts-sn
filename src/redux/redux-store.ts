import {createStore, combineReducers} from 'redux'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'


export type AppStateType = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
})

let store = createStore(rootReducer)


export default store
