
type MessageType = {
  id: number
  message: string
}

type DialogType = {
  id: number
  name: string
}

type PostType = {
  id: number
  message: string
  likesCount: number
}

type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
}

type DialogsPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

export type StoreType = {
  _state: RootStateType
  updateNewPostText: (newText: string) => void
  addPost: () => void
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
      ]
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

  addPost() {
  let newPost: PostType = {
    id: 5,
    message: this._state.profilePage.newPostText,
    likesCount: 0 
  }; 
  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.newPostText = ''
  this._rerenderEntireTree()
  },
  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText
    this._rerenderEntireTree()
  },
  dispatch(action: any) {
    if (action.type === 'ADD-POST') {
      let newPost: PostType = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0 
      }; 
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = ''
      this._rerenderEntireTree()
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._rerenderEntireTree()
    }
  }

}
export default store