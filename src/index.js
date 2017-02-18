import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyANTaJBeWtEfrt7dcCPjx3N3uIx6AMLw-8",
    authDomain: "neural-cathode-650.firebaseapp.com",
    databaseURL: "https://neural-cathode-650.firebaseio.com",
    storageBucket: "neural-cathode-650.appspot.com",
    messagingSenderId: "309475002057"
};
firebase.initializeApp(config);
injectTapEventPlugin();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
