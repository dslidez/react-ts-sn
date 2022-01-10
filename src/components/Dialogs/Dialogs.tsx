import { sendMessageAC, updateNewMessageBodyAC } from "../../redux/store";
import { DialogItem } from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";



const Dialogs = (props: any) => {
 
  const state = props.store.getState()

  let dialogsElement = state.dialogsPage.dialogs.map((d: any) => (
    <DialogItem name={d.name} id={d.id} state={state} />
  ));

  let messagesElements =  props.store.getState().dialogsPage.messages.map((m: any) => (
    <Message message={m.message} state={state} />
  ));

  
  let newMessageBody = state.dialogsPage.newMessageBody

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageAC())
  }
  let onNewMessageChange = (e: any) => {
      let body =  e.target.value
      props.store.dispatch(updateNewMessageBodyAC(body))
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className="messages">
        <div>
        {messagesElements}
        </div>
        <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter yout message"></textarea></div>
        <div><button onClick={onSendMessageClick}>SEND</button></div>
        </div> 
    </div>
  );
};

export { Dialogs };
