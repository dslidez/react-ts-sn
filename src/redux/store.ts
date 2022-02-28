import { dialogsReducer } from "./dialogs-reducer"
import { profileReducer } from "./profile-reducer"


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


export type MessageType = {
  id: number
  message: string
}

export type DialogType = {
  id: number
  name: string
}

export type PostType = {
  id: number
  message: string
  likesCount: n umber
}

export type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
}

export type DialogsPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageBody: string
}

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}




export const sendMessageAC = ( ) => {
  return {
    type: SEND_MESSAGE
  }
}
export const updateNewMessageBodyAC = (body: string | undefined) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
}



export type StoreType = {
  _state: RootStateType
  updateNewPostText?: (newText: string) => void
  addPost?: () => void
  subscribe: (callback: () => void) => void
  _rerenderEntireTree: () => void
  getState: () => RootStateType
  dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
  
}

type AddPostActionType = {
  type: 'ADD-POST'
}
type ChangeNewTextActionType = {
  type: 'UPDATE-NEW-POST-TEXT'
  newText: string
}

const store: StoreType  = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, this is react-app", likesCount: 12 },
        { id: 2, message: "Hi, this is TypeScript", likesCount: 2 },
        { id: 3, message: "TS HELLO", likesCount: 23 },
      ],
      newPostText: 'Write here...'
    },
  
    dialogsPage: {

     dialogs: [
        { id: 1, name: " Dimych " },
        { id: 2, name: " Andrey " },
        { id: 3, name: " Sveta " },
        { id: 4, name: " Viktor " },
        { id: 5, name: " Valera " },
        { id: 6, name: " Vika " },
      ],
      messages: [
        { id: 1, message: " Hi " },
        { id: 2, message: " Hello " },
        { id: 3, message: " Patau " },
        { id: 4, message: " Priv " },
        { id: 5, message: " Kak dela " },
        { id: 6, message: " ogo " },
      ],
      newMessageBody: ''
    }
  },
  _rerenderEntireTree() {
    console.log('state was changed')
  },  

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer
    },

  dispatch(action: any) {

   // this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    
    this._rerenderEntireTree()

  }

}
export default store

