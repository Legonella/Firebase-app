import React from 'react';
import firebase from 'firebase' 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyCv_YxixaPvYbcD1WaJBm-AcbDbF5g6dAk",
  authDomain: "fir-app-d8317.firebaseapp.com",
  databaseURL: "https://fir-app-d8317-default-rtdb.firebaseio.com",
  projectId: "fir-app-d8317",
  storageBucket: "fir-app-d8317.appspot.com",
  messagingSenderId: "329604422842",
  appId: "1:329604422842:web:a36c003c3d49c8183e7683"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


