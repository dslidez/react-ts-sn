import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

const DialogItem = (props: any) => {
let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>
        <NavLink to={path} > {props.name} </NavLink>
     </div>
    )
}

const Message = (props:any) => {
    return (
        <div className="message">{props.message}</div>
    )
}

//types:
type DialogsPropsType = {}

//function component:
const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               <DialogItem name="Dymich" id="1"/>
               <DialogItem name="Andrey" id="2"/>
               <DialogItem name="Sveta" id="3"/>
               <DialogItem name="Viktor" id="4"/>
               <DialogItem name="Valera" id="5"/>
               <DialogItem name="Vika" id="6"/>
            </div>
            <div className="messages">
               <Message message="Hi" />
               <Message message="Yo" />
               <Message message="WAZZUP" />
               <Message message="LOL" />
            </div>
        </div>
    )
}

export {
    Dialogs
}