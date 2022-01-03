let rerenderEntireTree = () => {
  console.log('state was changed')
}

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




export let state = {
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
};

export const addPost = () => {
  let newPost: PostType = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0 
  }; 
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = ''
  rerenderEntireTree()

}

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree()
} 

export const subscribe = (observer: () => void ) => {
  rerenderEntireTree = observer
}

