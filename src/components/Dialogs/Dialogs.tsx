import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props: any) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};

const Message = (props: any) => {
  return <div className="message">{props.message}</div>;
};

//types:
type DialogsPropsType = {};

//function component:
const Dialogs: React.FC<DialogsPropsType> = (props) => {


  let dialogs = [
    { id: 1, name: " Dimych " },
    { id: 2, name: " Andrey " },
    { id: 3, name: " Sveta " },
    { id: 4, name: " Viktor " },
    { id: 5, name: " Valera " },
    { id: 6, name: " Vika " },
  ];

  let messages = [
    { id: 1, message: " Hi " },
    { id: 2, message: " Hello " },
    { id: 3, message: " Patau " },
    { id: 4, message: " Priv " },
    { id: 5, message: " Kak dela " },
    { id: 6, message: " ogo " },
  ];

  let dialogsElement = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className="messages">{messagesElements}</div>
    </div>
  );
};

export { Dialogs };
