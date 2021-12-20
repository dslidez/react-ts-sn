import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbar.module.css'
 
export const Navbar = () => {
  return (
    <div>
    <nav className={c.nav}>
    <div  className={c.item}>
      <NavLink to="/profile"> Profile </NavLink>
    </div>
    <div  className={`${c.item} ${c.active}`}>
    <NavLink to="/dialogs"> Dialogs </NavLink>
    </div>
    <div  className={c.item}>
    <NavLink to="/news"> News </NavLink>
    </div>
  </nav>
  </div>
  );
};
 