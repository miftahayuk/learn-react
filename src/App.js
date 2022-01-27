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
// import React, { Component } from "react";
// import './MyStyle.css'
// import enigma from './enigma.png';
// import sinarmas from './sinarmas.png'
// import list from './list.svg'
// import form from './forms.svg'

// function Header() {
//   return(
//     <header>
//       <table className="center">
//           <tr>
//               <td>
//                   <img src={sinarmas} alt="sinarmas logo image" width="120" height="50"/>
//               </td>
//               <td>
//                   <img src={enigma} alt="enigma logo image" width="140" height="50"/>
//               </td>
//           </tr>
//       </table>
//       <h1 className="mystyle" >Sinigma Website</h1>
//   </header>
//     );
// }

// function Nav() {
//   return(
//     <div className="navbar">
//       <li>
//         <a href="https://www.enigmacamp.com/" target="_blank" className="center">Enigmacamp</a>
//       </li>
//       <li>
//         <a href="https://www.sinarmasmining.com/" target="_blank" className="center">Sinarmas</a>
//       </li>
//     </div>
//   )
// }

// function Section() {
//   return(
//       <div>
//         <section>
//         <h2>Enigmacamp IT Bootcamp</h2>
//         <p>Didirikan pada tahun 2017, ENIGMA CAMP pada awalnya merupakan salah satu anak perusahaan PT. Square Techno Indonesia (STI) sampai di tahun 2019 berkembang menjadi sebuah perusahaan baru, PT. Enigma Cipta Humanika.</p>
//         <p>Source: Website Enigmacamp</p>
//         </section>
//         <section>
//         <h2>Sinarmas Mining</h2>
//         <p>An Indonesian worldwide enterprise technology-based that holds business pillars from digitally-enabled financial services to energy & resources, from private equity to consumers & lifestyle.</p>
//         <p>Source: Website Sinarmas Mining</p>
//     </section>
//       </div>

//   )
// }

// function Article() {
//   return(
//     <div>
//       <article>
//         <h2>ITDP (Information Technology Development Program)</h2>
//         <article>
//             <h3 className="flex-container">Description</h3>
//             <ul>
//                 <li>Manage multiple challenging projects</li>
//                 <li>Assess current state and define business solutions</li>
//                 <li>Analyze and propose business needs</li>
//             </ul>
//         </article>
//         <article>
//             <h3 className="flex-container">Specifications</h3>
            
//             <ol>
//                 <li>We offer a variety of formal and informal learning programs to help acquire and build specialized skill faster</li>
//                 <li>A well-rounded foundation of technical skills including certification, functional, and leadership skills that are essential for a Technological Leader position within Sinarmas Mining Group for local and global businesses</li>
//                 <li>Experience real-life multiple challenging projects that foster innovative and creative thinking during the program</li>
//             </ol>
//         </article>
//     </article>
//     </div>
//   )
// }

// function Link() {
//   return(
//     // <div>
//         <table>
//         <tr>
//             <td>
//                 <h3><a href="./list-profile.html">List Profile</a></h3>
//                 Disini berisikan data nama-nama trainee ITDP Batch 1.
//                 <img src={list} alt="list" width="300" height="200"/>
//                 <div class="flex-container">
//                 <div>1</div>
//                 <div>2</div>
//                 <div>3</div>  
//               </div>
//                 {/* <img src="list.svg" alt="result image" width="300" height="200"> */}
//             </td>
//             <td>
//                 <h3><a href="./forms.html">Forms</a></h3>
//                 Disini berisikan data-data yang harus diisi.
//                 <img src={form} alt="form" width="300" height="200"/>
//             </td>
//         </tr>
//     </table>
//     // </div>
//   )
// }

// function Footer() {
//   return(
//      <footer>
//         <p>Author: Enigmacamp</p>
//         <p><a href="mailto: enigmacamp@ex.com">enigmacamp@ex.com</a></p>
//     </footer>
//   )
// }
// class App extends Component{
//   render(){
//     return(
//       <div>
//       <Header/>
//       <Nav/>
//       <Section/>
//       {/* <Article/>
//       <Link/>
//       <Footer/> */}
//       </div>
//     )
//   }
// }

// export default App; 


//===============================================================================//
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

//================BELAJAR KOMPONEN==================//

import React,{Component} from "react";
import LoginScreen from "./Login";
import NavbarScreen from "./NavbarScreen";
import Footer from "./Footer";
import './MyStyle.css'

class App extends Component{
  render(){
    return(
      <>
      <NavbarScreen/>
      <LoginScreen/>
      <Footer/>
      </>
    );
  } 
}

export default App