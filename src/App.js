// import logo from './logo.svg';
// import './App.css';
// import './MyStyle.css'

import { useState } from "react";





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



//==================== COUNTER HOOKS==========================///

// import logo from './images/logo.svg';
// import './App.css';
// import { useState } from 'react';
// import ButtonIncrement from './hooks/ButtonIncrement';
// import ButtonDecrement from './hooks/ButtonDecrement';


// const App = ()=> {
//     const [number,setNumber]=useState(0)

    
//     const result=(number)=>{
//       setNumber(number)
//     }


//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </header>
//         {number}
//         {/* <button onClick={increment}>PLUS</button> */}
//         {/* <button onClick={decrement}>MINUS</button> */}
//         <br/>
//         <ButtonIncrement number={number} callback={result}/>
//         <ButtonDecrement number={number} callback={result}/>
//       </div>
//     )
  
// }

// export default App;


//==========================Hooks To Do List=====================

// import './reduxReactAssessment/styleReduxAss.css'
// import './App.css';

// import Listhookstodo from './hooksTodoList/Listhookstodo';
// import Formhookstodo from './hooksTodoList/Formhookstodo';
// // import { connect } from 'react-redux';
// // import ActionTypeTodoHooks from './hooksTodoList/globalActionTodo';
// import { useState } from 'react';

// function App () {
//   const [addForm, setaddForm]=useState(true)
  

//     return (
//       <div>
//         <header className="App-header">
//           TO DO LIST APP
//         </header>
//         <Formhookstodo/>
//         <br/>
//         <br/>
//         <Listhookstodo/>
//       </div>
//     )
  
// }

// export default  (App);


//=======================================================//
// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [todo, setTodo] = useState("");
//   const [todoEditing, setTodoEditing] = useState(null);
//   const [editingText, setEditingText] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     const newTodo = {
//       id: Math.ceil(Math.random()*100),
//       text: todo,
//     };
//     setTodos([...todos].concat(newTodo));
//     setTodo("");
//   }

//   function deleteTodo(id) {
//     let updatedTodos = [...todos].filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   }
  

//   function submitEdits(id) {
//     const updatedTodos = [...todos].map((todo) => {
//       if (todo.id === id) {
//         todo.text = editingText;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//     setTodoEditing(null);
//   }

//   const [addForm, setaddForm]= useState(true)

//   const addForms=()=>{
//     setaddForm(false)
//   }
  

//   return (
//     // <>
//     //   {
//     //     {addForm}?<>      
//     //     <form onSubmit={handleSubmit}>
//     //     <input
//     //       type="text"
//     //       onChange={(e) => setTodo(e.target.value)}
//     //       value={todo}
//     //     />
//     //     <button type="submit">SUBMIT</button>
//     //     </form></>:<>
//     //     <div id="todo-list">
//     //   <h1>Todo List App</h1>
//     //   <form onSubmit={handleSubmit}>
//     //     <input
//     //       type="text"
//     //       onChange={(e) => setTodo(e.target.value)}
//     //       value={todo}
//     //     />
//     //     <button type="submit">SUBMIT</button>
//     //   </form>
//     //   {todos.map((todo) => (
//     //     <div key={todo.id} className="todo">
//     //       <div className="todo-text">
//     //         {todo.id === todoEditing ? (
//     //           <input
//     //             type="text"
//     //             onChange={(e) => setEditingText(e.target.value)}
//     //           />
//     //         ) : (
//     //           <div>{todo.text}</div>
//     //         )}
//     //       </div>
//     //       <div className="todo-actions">
//     //         {todo.id === todoEditing ? (
//     //           <button onClick={() => submitEdits(todo.id)}>Submit</button>
//     //         ) : (
//     //           <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
//     //         )}
//     //         <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//     //       </div>
//     //     </div>
//     //   ))}
//     // </div>
//     //     </>
//     //   }
//     // </>
//     <div id="todo-list">
//       <h1>Todo List App</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           onChange={(e) => setTodo(e.target.value)}
//           value={todo}
//         />
//         <button type="submit">SUBMIT</button>
//       </form>
//       {todos.map((todo) => (
//         <div key={todo.id} className="todo">
//           <div className="todo-text">
//             {todo.id === todoEditing ? (
//               <input
//                 type="text"
//                 onChange={(e) => setEditingText(e.target.value)}
//               />
//             ) : (
//               <div>{todo.text}</div>
//             )}
//           </div>
//           <div className="todo-actions">
//             {todo.id === todoEditing ? (
//               <button onClick={() => submitEdits(todo.id)}>Submit</button>
//             ) : (
//               <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
//             )}
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;



//=================TODOLIST HOOKS====================//
// import { useState } from "react"
// import "./App.css"
// import FormHooks from "./hooksTodoList/Formhookstodo"
// import ListHooks from "./hooksTodoList/Listhookstodo"
// const App= ()=>{

//     const [todos, setTodos] = useState([{title:"Belajar", description:"Belajar matematika"}]);
//     const [addForm,setaddForm]=useState(false)


//     const addTodo=(object)=>{
//       setTodos([...todos,object])
//     }

//     const removeTodo=(title)=>{
//       const updatedTodos = [...todos].filter((todo) => todo.title !== title);
//       setTodos(updatedTodos)
//     }

//     const updateTodo=(title, newTodoTitle,newTodoDesc)=>{
//         const updatedTodos = [...todos].map((todo) => {
//           if (todos.title === title) {
//             todos.title = newTodoTitle;
//             todos.description=newTodoDesc
//           }
//           return todo;
//         });
//         setTodos(updatedTodos);
//     }

//     const move=(condition)=>{
//       setaddForm(condition)
//     }


//     return(
//       <>
//       {
//       addForm ? <FormHooks callbackMove={move} callbackremoveTodo={removeTodo} callbackaddTodo={addTodo}/> : 
//       <ListHooks listTodos={todos}  callbackMove={move} callbackRemove={removeTodo} callbackUpdate={updateTodo}/>}
//       </>
//     )
// }

// export default App


//===================== TO DO LIST HOOKS KAK WILDA=============================//
// import { useState } from 'react';
// import './App.css';
// import ToDoForm from './hooksTodoListKakWilda/FormTodo';
// import ToDoList from './hooksTodoListKakWilda/ListTodo';


// const App = () => {
//     const [toDoList, setToDos] = useState([{
//         toDo : 'belajar',
//         description: 'belajar react'
//     }])
    
//     const [addForm, setAddForm] = useState(false)
//     const [addData, setAddData] = useState(true)
//     const [updateData, setUpdateData] = useState(true)
//     const [id, setId] = useState(null)
   
    
//     const updateValue = (val, action) => {
//         switch (action) {
//             case "form":
//                 setAddForm(val)
//                 break;
//             case "todos":
//                 setToDos(val)
//                 break;
//             case "addData":
//                 setAddData(val)
//                 break;
//             case "updateData":
//                 setUpdateData(val)
//                 break;
//             case "setId":
//                 setId(val)
//                 break;
//             default:
//                 break;
//         }
//     }


//     return(
//         <div className='App'>
//             {
//                 addForm ? <ToDoForm toDoList={toDoList} updateValue={updateValue} id={id} addData={addData} updateData={updateData}/> : 
//                 <ToDoList toDoList={toDoList} updateValue={updateValue}/>
//             }
            
//         </div>
//     );
// }

// export default App;


//==========todolist=======//

// function App(){
//   const [todos, setToDos]=useState([{
//     todo : "Belajar",
//     desc : "Belajat"
//   }])
// }

import logo from './images/logo.svg';
import './App.css';
import { useSelector } from "react-redux";
// import IncrementButton from "./redux-hooks/component/IncrementButton";
// import DecrementButton from "./redux-hooks/component/DecrementButton";
import { TodoForm } from "./redux-hooks/todo/TodoForm";
import { TodoList } from "./redux-hooks/todo/TodoList";
const App=()=>{

  // const counter = useSelector((state)=>state.nilai)
  //useSelector biar bisa ambil state lgsg dr store nya
  return(
    <div className="App">
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* {counter}
        <br/>
        <IncrementButton/>
        <DecrementButton/> */}
        <TodoForm/>
        <TodoList/>

    </div>

  )
}

export default App