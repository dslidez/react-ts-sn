import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state'


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
             <App store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
     document.getElementById('root')
 );
}


store.subscribe(rerenderEntireTree);

rerenderEntireTree()
 
 
 reportWebVitals();
    