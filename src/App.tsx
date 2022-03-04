import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import  {DialogsContainer}  from "./components/Dialogs/DialogsContainer";
import  HeaderContainer  from "./components/Header/HeaderContainer";
import { Login } from "./components/Login/Login";
import { Documents } from "./components/Music/Documents";
import {Navbar} from "./components/Navbar/Navbar";
import { News } from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Settings } from "./components/Settings/Settings";
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
          <Route path={"/settings"} render={() => <Settings /> }/> 
          <Route path={"/news"} render={() => <News /> }/> 
          <Route path={"/doc"} render={() => <Documents /> }/> 
        </div>
      </div>
  );
};



export default App;
