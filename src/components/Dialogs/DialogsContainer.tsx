import { sendMessageAC, updateNewMessageBodyAC } from "../../redux/store";
import { DialogItem } from "./DialogItem/DialogItem";
import { Dialogs } from "./Dialogs";
import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";



const DialogsContainer = (props: any) => {
 
  const state = props.store.getState()

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageAC())
  }
  let onNewMessageChange = (body: any) => {
      props.store.dispatch(updateNewMessageBodyAC(body))
  }


  return <Dialogs dialogsPage={state} updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} /> 
};

export { DialogsContainer };
