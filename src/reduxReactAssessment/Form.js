import {useState } from "react";
import { useDispatch } from "react-redux";
import ActionTypeTodo from "./globalActionTodo";

const FormTodoList=()=>{
  const dispatch=useDispatch();
  const [newTodo, setNewTodo]=useState();
  const handleChange =event => setNewTodo(event.target.value);
  const handleSubmit=()=>dispatch({
    type: ActionTypeTodo.ADD_TODO,
    payload:{
      label: newTodo,
      id: Math.ceil(Math.random()*100)
    }
  })
  //Math.random() always returns a number lower than 1.

  return(
    <>
    <input value={newTodo} onChange={handleChange} type="text" placeholder="Enter your to do..."/>
    <button onClick={handleSubmit}>SUBMIT</button>
    </>
  )
}

//Note:
//useState memberikan dua hal: nilai state saat ini dan fungsi untuk memperbarui nilai tersebut. 
//Anda dapat memanggil fungsi ini dari sebuah event handler atau dimanapun.

//This hook returns a reference to the dispatch function from the Redux store. 
//You may use it to dispatch actions as needed.

export default FormTodoList





