import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// //bisa nemrima variabel
// const name= "Miftah"

// //bisa nerima function
// function sayWelcome(name){
//   return "Welcome "+name
// }
// // const element = <h1>Wlecome {name}!</h1>
// const element = <h1>{sayWelcome(name)}!!!</h1>
// ReactDOM.render(element,document.getElementById('example'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
