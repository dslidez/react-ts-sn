import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import  {DialogsContainer}  from "./components/Dialogs/DialogsContainer";
import  HeaderContainer  from "./components/Header/HeaderContainer";
import { Login } from "./components/Login/Login";
import {Navbar} from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";


type PropsType = {

}


const App: React.FC<PropsType> = (props: PropsType) => {

  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path={"/dialogs"} render={() => <DialogsContainer />}/> 
          <Route path={"/profile/:userId?"} render={() => <ProfileContainer /> }/> 
          <Route path={"/users"} render={() => <UsersContainer /> }/> 
          <Route path={"/login"} render={() => <Login /> }/> 
        </div>
      </div>
  );
};



export default App;
