import { Redirect } from "react-router-dom";
import { DialogItem } from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";


export type DialogsPropsType = {}


const Dialogs: React.FC<any> = (props) => {
 
  const state = props.dialogsPage

  let dialogsElement = state.dialogs.map((d: any) => <DialogItem key={d.id} name={d.name} id={d.id} />);
  let messagesElements =  state.messages.map((m: any) => <Message key={m.id} message={m.message} id={m.id} />);

  
  let newMessageBody = state.newMessageBody

  let onSendMessageClick = () => {
    props.sendMessage()
  }
  let onNewMessageChange = (e: any) => {
      let body =  e.target.value
      props.updateNewMessageBody(body);
  }

  
  if (!props.isAuth) return <Redirect to={'/login'}/> 


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
