import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { StoreType } from "./redux/state";


type PropsType = {
 store: StoreType
 dispatch: (action: any) => void
}


const App: React.FC<PropsType> = (props: PropsType) => {

  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path={"/Dialogs"} render={() => <Dialogs store={props.store}/>}/> 
          <Route path={"/Profile"} render={() => <Profile store={props.store} dispatch={props.dispatch}/> }/> 
        </div>
      </div>
  );
};



export default App;
