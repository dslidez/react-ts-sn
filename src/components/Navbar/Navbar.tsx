import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbar.module.css'
 
export const Navbar = () => {
  return (
    <div>
    <nav className={c.nav}>
    <div  className={c.item}>
      <NavLink to="/profile" activeClassName={c.activeLink}> Profile </NavLink>
    </div>
    <div  className={c.item}>
    <NavLink to="/users" activeClassName={c.activeLink}> Users </NavLink>
    </div>
    <div  className={`${c.item} ${c.active}`}>
    <NavLink to="/dialogs" activeClassName={c.activeLink}> Dialogs </NavLink>
    </div>
    <div  className={c.item}>
    <NavLink to="/settings" activeClassName={c.activeLink}> Settings </NavLink>
    </div>
    <div  className={c.item}>
    <NavLink to="/news" activeClassName={c.activeLink}> News </NavLink>
    </div>
    <div  className={c.item}>
    <NavLink to="/music" activeClassName={c.activeLink}> Music </NavLink>
    </div>
  </nav>
  </div>
  );
};
 