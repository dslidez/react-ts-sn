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

    let dialogsData = [
        {id: 1, name: ' Dimych '},
        {id: 2, name: ' Andrey '},
        {id: 3, name: ' Sveta '},
        {id: 4, name: ' Viktor '},
        {id: 5, name: ' Valera '},
        {id: 6, name: ' Vika '},
    ]

    let messagesData = [
        {id: 1, message: ' Hi '},
        {id: 2, message: ' Hello '},
        {id: 3, message: ' Patau '},
        {id: 4, message: ' Priv '},
        {id: 5, message: ' Kak dela '},
        {id: 6, message: ' ogo '},
    ]

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
               <Message message={messagesData[0].message} />
               <Message message={messagesData[1].message} />
               <Message message={messagesData[2].message} />
               <Message message={messagesData[3].message} />
            </div>
        </div>
    )
}

export {
    Dialogs
}