import React from "react";
import c from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props: any) => {
  return (
    <header className={c.header}>
      <NavLink to={"/news"}>
         <img  alt="logo" src="https://st3.depositphotos.com/30226412/36253/v/600/depositphotos_362535512-stock-illustration-initial-letter-logo-logo-vector.jpg"/>
         </NavLink>

      <div className={c.loginBlock}>
        {props.isAuth ? props.login :  <NavLink to={'/login'}>LOGIN</NavLink>}
      </div>
  
    </header>
   
  );
};

export {
  Header
}