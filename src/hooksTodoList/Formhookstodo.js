import { useState } from "react";

const FormHooks=(props)=>{

    const [newTodo, setNewTodo]=useState({title:"",description:""});   

    const handleChange=(event)=>{
      if(event.target.name==="title"){
        setNewTodo({title : event.target.value, description: newTodo.description})
      }
      if(event.target.name==="description"){
        setNewTodo({title:newTodo.title, description:event.target.value})
      }
    }

    const handleUpdate=()=>{
    props.callbackUpdateTodo(newTodo.title,newTodo.title,newTodo.description)
    }

    const handleSubmit=(event)=>{
      props.callbackaddTodo(newTodo)
      props.callbackMove(false)
      event.preventDefault()
    }

    const handleCancel=()=>{
      props.callbackMove(false)
    }

    return(
        <>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="toDoInput">To do</label>
              <input type="text" className="form-control" name="title" id="toDoInput" placeholder="Enter your todo..."
              onChange={handleChange} />
          </div>
          <div className="form-group">
              <label htmlFor="descriptionInput">Description</label>
              <input type="text" className="form-control" id="descriptionInput" name="description" placeholder="Enter your description..."
              onChange={handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
          <button type="submit" className="btn btn-primary" >Submit</button>
          <button type="submit" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </form>
        </>
    )
}

export default FormHooks