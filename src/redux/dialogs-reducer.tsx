
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {

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

export let dialogsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 7, message: body });
      return state;
    default:
      return state;
  }
};
