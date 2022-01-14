import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { StoreType } from "./redux/store";
import { Provider } from 'react-redux';


type PropsType = {
  store: StoreType;
};

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
        <App store={store} dispatch={store.dispatch.bind(store)} />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree();
});

rerenderEntireTree();

reportWebVitals();
