import React from "react";
import { NavLink } from "react-router-dom";
import { DialogItem } from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";










const Dialogs = (props: any) => {


  let dialogsElement = props.state.dialogsPage.dialogs.map((d: any) => (
    <DialogItem name={d.name} id={d.id} state={props.state} />
  ));

  let messagesElements = props.state.dialogsPage.messages.map((m: any) => (
    <Message message={m.message} state={props.state} />
  ));



  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className="messages">{messagesElements}</div>
    </div>
  );
};

export { Dialogs };
