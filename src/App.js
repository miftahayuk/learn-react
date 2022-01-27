// import logo from './logo.svg';
// import './App.css';
// import './MyStyle.css'



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
import React, { Component } from "react";
import './MyStyle.css'
import NavSinigma from "./siningma_website/nav_sinigma";
import SectionSinigma from "./siningma_website/section_sinigma";
import FooterSinigma from "./siningma_website/footer_sinigma";
class App extends Component{
  render(){
    return(
      <>
      <NavSinigma/>
      <SectionSinigma/>
      <FooterSinigma/>
      </>
    );
  } 
}

export default App
