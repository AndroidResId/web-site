import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyANTaJBeWtEfrt7dcCPjx3N3uIx6AMLw-8",
    authDomain: "neural-cathode-650.firebaseapp.com",
    databaseURL: "https://neural-cathode-650.firebaseio.com",
    storageBucket: "neural-cathode-650.appspot.com",
    messagingSenderId: "309475002057"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
