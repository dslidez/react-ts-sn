
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

//TS
export type DialogsDataType = {
  id: number
  name: string
}
export type MessagesDataType = {
  id: number
  message: string
}
export type DialogsInitialStateType = {
  dialogs: Array<DialogsDataType>,
  messages: Array<MessagesDataType>,
  newMessageBody: string
}


let initialState: DialogsInitialStateType = {
  dialogs: [
     { id: 1, name: " Andrew " },
     { id: 2, name: " Oleg " },
     { id: 3, name: " Makar " },
  ],
   messages: [
     { id: 1, message: " Hi " },
     { id: 2, message: " WAZZUP?!" },
   ],
   newMessageBody: ''
 }

export let dialogsReducer = (state: any = initialState, action: any) => {
  
  
 
  switch (action.type) {

    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state,
                    newMessageBody:  action.body   };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return  { ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 7, message: body } ] 
      };

    default:
      return state;
  }
};
