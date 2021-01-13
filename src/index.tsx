import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

firebase.initializeApp({
  apiKey: 'AIzaSyCqgwR84ZtIp6RGNs5X8X73ar4N15BSf5M',
  authDomain: 'testtask-ccac8.firebaseapp.com',
  projectId: 'testtask-ccac8',
  storageBucket: 'testtask-ccac8.appspot.com',
  messagingSenderId: '1095163106309',
  appId: '1:1095163106309:web:1e861367d18a21ba0ef86c',
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
