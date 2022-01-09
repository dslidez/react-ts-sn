import {createStore, combineReducers} from 'redux'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'


export const rootReducer = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
})

let store = createStore(rootReducer)


export default store
