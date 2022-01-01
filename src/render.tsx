import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state, { addPost, RootStateType, updateNewPostText } from './redux/state'

export let rerenderEntireTree = (state: RootStateType) => {
   ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>,
  document.getElementById('root')
);
 }


reportWebVitals();
   
