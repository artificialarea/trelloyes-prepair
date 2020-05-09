import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import STORE from './store';

/* QUESTION...
How to pass STORE object to your App as its 'store' prop.?

Can easily do it if I just import STORE in App.js, 

but I've been instructed to: '...import into your index.js and pass to your App as its store prop.'
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

