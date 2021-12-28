import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../../Dialogs/Dialogs.module.css";




export const DialogItem = (props: any) => {

  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};
