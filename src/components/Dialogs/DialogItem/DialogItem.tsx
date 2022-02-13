import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../../Dialogs/Dialogs.module.css";

type DialogPropsType = {
  id: number
  name: string
}


export const DialogItem: React.FC<DialogPropsType> = (props) => {

  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};
