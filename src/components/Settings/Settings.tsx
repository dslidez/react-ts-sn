import React from "react";
import c from "./Settings.module.css";
import where from './../../assets/img/where.gif'

type PropsType = {};

const Settings = (props: PropsType) => {
  return (
    <div>
      <h2 className={c.text}>Settings page is being developed...</h2>
      <img  className={c.gif} src={where} />
    </div>
  );
};

export { Settings };
