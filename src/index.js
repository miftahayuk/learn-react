import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import rootReducer from './reduxReact/globalReducer';
// import reducerTodoList from './reduxReactAssessment/globalReducerAss';
// import reducerTodoListHooks from './reduxReactAssessment/globalReducerAss';
import {store} from './redux-hooks/CounterStore'
// const store = createStore(rootReducer)
// const store= createStore(reducerTodoListHooks)

ReactDOM.render(
  //provider ini dr react-redux (pintu masuk) supaya si store ini bisa dipanggil oleh app dan anak2nya
  <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
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
