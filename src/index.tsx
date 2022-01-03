import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import  { addPost, state, subscribe, updateNewPostText } from './redux/state'


let rerenderEntireTree = () => {
    ReactDOM.render(
   <BrowserRouter>
     <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
     </BrowserRouter>,
   document.getElementById('root')
 );
}

rerenderEntireTree()

subscribe(rerenderEntireTree);
 
 
 reportWebVitals();
    