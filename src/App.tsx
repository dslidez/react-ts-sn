import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";





const App = (props: any) => {
  debugger
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path={"/Dialogs"} render={() => <Dialogs state={props.state}/>}/> 
          <Route path={"/Profile"} render={() => <Profile state={props.state}/> }/> 
        </div>
      </div>
  );
};



export default App;
