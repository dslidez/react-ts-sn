import React from "react";
import c from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props: any) => {
  return (
    <header className={c.header}>
      <img  alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VOIJTKhQNgBLepC2ZrFqrEJ4s8fKh0FySbaKu-kQk9IHaRPOo8h6nQ6oglSQX4GxciM&usqp=CAU"/>
      <div className={c.loginBlock}>
        {props.isAuth ? props.login :  <NavLink to={'/login'}>LOGIN</NavLink>}
       
      </div>
    </header>
   
  );
};

export {
  Header
}