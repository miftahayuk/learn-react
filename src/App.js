// import logo from './logo.svg';
// import './App.css';
// import './MyStyle.css'

// import { createContext, useReducer, useState } from "react";





// function App() {
//   const name = 'Miftah'
//   function getButtonText(){
//     return "Click Me"
//   }
//   const buttonName = {text:"Click Me"}
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Welcome {name}!</h1>
//         <label htmlFor="name">Enter Name</label>
//         <input id='name' type="text"/>
//         <button>{getButtonText()}</button>
//         <button>{buttonName.text}</button>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// ===================================================================================//
//App merupakan sebuah komponen di react

// import React, { Component } from "react";
// // // class App extends React.Component{

// // // }

// // //bisa juga
// class App extends Component{
//   getButtonName(){
//     return "Kepencet"
//   }
//   // const buttonClick= "Click Me"

//   render(){
//     const buttonClick= "Click Me"
//     return(
//       // <button>{this.getButtonName()}</button> //pake this karena merujuk ke fungsi yang ada di dlm class
//       // <button>{this.buttonClick}</button>// pake this ini karena merujuk variabel di class

//       //karena gabisa return lebih dari satu value kita perlu pake <div></div> atau <>
//       <div>
//         {/* <h1 style={{color:"red",backgroundColor:"lightblue"}}>Hello Styled</h1> */}
//         {/* <h1 style={this.mystyle}>Hello Styled</h1> */}
//         <h1 className="mystyle">Hello Styled</h1>
//         <p style={{backgroundColor:"lightblue"}}>I'm ITDP Trainee</p>
//         <button className="btn btn-success">{this.getButtonName()}</button>
//         {/* dibawah ini gausah pake this krn varnya dah dipindah di dlmnya render */}
//         <button>{buttonClick}</button> 
//       </div>
//       );
//   }

//   //kita bisa bikin object dari css, sbb (internal styling)
//   //dibawah ini disebutnya object variabel
//   //bisa kalo mau akses colornya doang gitu wkwk
//   // mystyle ={
//   //   color : "white",
//   //   backgroundColor : "DodgerBlue",
//   //   padding: "10px",
//   //   fontFamily: "Arial"
//   // }
// }

// export default App; // ini kalu ditaroh diatasnya class App gabisa,
// //tapi bisa satu line, sebagai berikut

// // export default class App extends Component{
// //   render(){
// //     return(
// //       <button>Click Me</button>
// //     );
// //   }
// // }

//===========================LATIHAN===================================//



//=====================================================================//
//TUGAS LOGIN//

// import React, { Component} from "react";
// import './MyStyle.css'

// class Login extends Component{
  
//   render(){
//     return(
//       <>
//       <header className="mystyle">
//       <h1>Sinigma Website</h1>
//       </header>
//       <div className="container form-container">
//           <div className="row justify-content-end">
//             <div className="col-7">
//                 <div className="card w-50 loginBox">
//               <div className="card-header">
//                 <p className="h4">Login Page</p>
//               </div>
//               <form className="row g-10" style={{padding:"10px"}}> 
//                 <div className="col-12">
//                   <label for="inputUsername" class="form-label">Username</label>
//                   <input type="text" class="form-control" id="inputUsername" placeholder="Enter Username"/>
//                 </div>
//                 <div style={{padding:"10px"}}></div>
//                 <div className="col-12">
//                   <label for="inputPassword" class="form-label">Password</label>
//                   <input type="text" class="form-control" id="inputPassword" placeholder="Enter Password"/>
//                 </div>
//                 <div style={{padding:"10px"}}></div>
//                 <div className="col-12">
//                   <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
//                   <label className="form-check-label" for="defaultCheck1">
//                   Remember me
//                   </label>
//                 </div>
//                 <div style={{padding:"10px"}}></div>
//                 <div className="col-12">
//                   <button type="submit" class="btn btn-primary">Login</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         </div>   
//       </>
        
//     );
//   }
// }

// export default Login

//================BELAJAR MULTI KOMPONEN==================//

// import React,{Component} from "react";
// import LoginScreen from "./Login";
// import NavbarScreen from "./NavbarScreen";
// import Footer from "./Footer";
// import './MyStyle.css'

// class App extends Component{
//   render(){
//     return(
//       <>
//       <NavbarScreen/>
//       <LoginScreen/>
//       <Footer/>
//       </>
//     );
//   } 
// }

// export default App


//===============SINIGMA MULTI KOMPONEN==============//
// import React, { Component } from "react";
// import './MyStyle.css'
// import NavSinigma from "./siningma_website/nav_sinigma";
// import SectionSinigma from "./siningma_website/section_sinigma";
// import FooterSinigma from "./siningma_website/footer_sinigma";
// class App extends Component{
//   render(){
//     return(
//       <>
//       <NavSinigma/>
//       <SectionSinigma/>
//       <FooterSinigma/>
//       </>
//     );
//   } 
// }

// export default App


//======================PROPS=============================//
// import logo from './logo.svg'
// import './App.css'
// import { Component } from 'react'
// // import BodyComponent from './BodyComponent'
// import Count from './Count' 


// class App extends Component{
//   name = "Miftah"
//   render(){
//     return(
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo"/>
//         </header>
//         {/* <p>{this.name}</p>
//         <BodyComponent nameFromParent={this.name} address="Bekasi"/>
//         <BodyComponent nameFromParent="Ayu" address="Jogja"/> */}
//         <Count/>
//       </div>
//     )
//   }
// }

// export default App


//========================================================================================//
// import logo from './logo.svg'
// import './App.css'
// import { Component } from 'react'
// // import BodyComponent from './BodyComponent'
// // import Count from './Count' 
// // import ChildComponent from './ChildComponent'
// import Count from './Count'

// class App extends Component{

//   constructor(props) {
//     super(props)

//     this.state={
//       message :'Masih kosong'
//     }
//   }

//   getMessage =(msg)=>{
//     this.setState({
//       message : msg
//     })
//   }

//   name = "Miftah"
//   render(){
//     return(
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo"/>
//         </header>
//         {/* <h1>{this.state.message}</h1> */}
//         {/* <ChildComponent name={'Miftah'}  callback={this.getMessage}/> */}
//         <Count/>
//       </div>
//     )
//   }
// }

// export default App



//=====================================================//
// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';

// import Trainees from './Trainees';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </header>
//         {/* <h1>{this.state.message}</h1>
//         <ChildComponent name="Chandler" callback={this.getMessage}/> */}
//         {/* <Count/> */}
//         <Trainees/>
//       </div>
//     )
//   }
// }

// export default App;



//===================LIFE CYCLE==========================//
// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';

// import Clock from './react-lifecycle/Clock';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </header>
//         <Clock/>
//       </div>
//     )
//   }
// }

// export default App;

//===================LIST==============================//
// import logo from './images/logo.svg';
// import './App.css';
// import { Component } from 'react';
// // import FormOftrainee from './form-list/FormOftrainee';
// import FirstCounter from './reduxReact/FirstCounter';
// import SecondCounter from './reduxReact/SecondCounter';
// import { connect } from 'react-redux';
// import ListOfTrainee from './form-list/ListOftrainee';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </header>
//           <FormOftrainee/>
//           {/* <ListOfTrainee/> */}
//       </div>
//     )
//   }
// }

// export default App;

//==================HOC==============================//

// import ClickCounter from './Hoc/ClickCounter';
// import HoverCounter from './Hoc/HoverCounter';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </header>
//         <ClickCounter/><br/>
//         <HoverCounter/>
//       </div>
//     )
//   }
// }

// export default App;


//===================REDUX============================//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </header>
//         <h1>{this.props.number}</h1>
//         <FirstCounter/>
//         <br/>
//         <SecondCounter/>
//       </div>
//     )
//   }
// }

// const mapStateToProps=(state)=>{
//   return{
//     number : state.globalNumber
//   }
// }
// export default connect(mapStateToProps) (App);

//=================TO DO LIST REDUX=====================//
// import './reduxReactAssessment/styleReduxAss.css'
// import './App.css';
// import { Component} from 'react';
// import ListTodo from './reduxReactAssessment/List';
// import FormTodoList from './reduxReactAssessment/Form'
// import ActionTypeTodo from './reduxReactAssessment/globalActionTodo';
// import { connect } from 'react-redux';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <header className="App-header">
//           TO DO LIST APP
//         </header>
//         {/* <FormTodoList/>
//         <ListTodo/> */}
//         {this.props.addForm? <ListTodo/> : <FormTodoList/>}
//       </div>
//     )
//   }
// }

// const mapStateToProps=(state)=>{
//   return{
//     addForm : state.addForm
//   }
// }

// // const mapDispatchToProps=(dispatch)=>{
// //   return{
// //     changeForm:(newCondition)=>dispatch({type:ActionTypeTodo.CHANGEADDFORM, condition: newCondition})
// //   }
// // }

// export default connect(mapStateToProps,mapDispatchToProps) (App);


//==================COUNTER CONTEXT=======================//

// import logo from './images/logo.svg';
// import './App.css';
// import { Component, createContext } from 'react';
// import FirstCounter from './context/FirstCounter';
// import SecondCounter from './context/SecondCounter';


// export const RootContext=createContext();
// const Provider = RootContext.Provider

// class App extends Component {
//   state={
//     globalNumber :0
//   }

//   dispatch=(action)=>{
//      if(action.type==="PLUS"){
//       this.setState({
//         globalNumber : this.state.globalNumber+1
//       })
//      }
    
//      if(action.type==="MINUS"){
//        this.setState({
//          globalNumber : this.state.globalNumber-1
//        })
//      }
//   }


//   render() {
//     return (
//       <Provider value={{state:this.state, dispatch: this.dispatch}}>
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//           </header>
//           <FirstCounter/>
//           <br/>
//           <SecondCounter/>
//         </div>
//       </Provider>

//     )
//   }
// }

// export default App;


//===================TO DO LIST CONTEXT  ==============================//


// import { Component} from 'react'
// import logo from './images/logo.svg';
// import './App.css';
// import ProviderTodo from './context/Todo/ProviderTodo';
// import ToDoForm from './context/Todo/FormTodolist';
// import ToDoList from './context/Todo/ListTodoList';


// // export const RootContext = createContext();
// // const Provider = RootContext.Provider;

// class App extends Component {

//   render() {
//     return (
//       <ProviderTodo>
//         <div className="App">
//           <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           </header>
//           <ToDoForm/>
//           <br/>
//           <ToDoList/>
//          </div>
//       </ProviderTodo>
//     );
//   }
// }

// export default App;

//===================ROUTING==================================//
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./routing/home/home";
import Customer from "./routing/customer/customer";
import Product from "./routing/product/product";
import { ProductForm } from './routing/product/productForm';
import { Outlet } from 'react-router';
import { CustomerForm } from './routing/customer/customerForm';
import { PageNotFound } from './routing/pageNotFound';


const App=()=>{

  return(

    <Router>

      {/* Dibawah ini adalah navigation */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        
        <ul>
          <li>
            <Link to="products">Product</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="customers">customer</Link>
          </li>
        </ul>
        

      </nav>


      {/* Dibawah ini adalah konfigurasi */}
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="products" element={<Outlet/>}>
          <Route index element={<Product/>}/>
          <Route path="form" element={<ProductForm/>}/>
        </Route>
        <Route path="customers" element={<Outlet/>}>
          <Route index element={<Customer/>}/>
          <Route path="form" element={<CustomerForm/>}/>
          {/* dua di bawah ini sama aja, baris pertama tuh kek ngereplace, mending kek yang brs dua aja */}
          {/* <Route path='/customers/:name' element={<Customer/>}></Route> */}
          <Route path=':name' element={<Customer/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>

  )
}

export default App