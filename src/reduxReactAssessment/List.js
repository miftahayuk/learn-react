import { Component } from "react";
import { connect } from "react-redux";

class ListTodo extends Component{
  render(){
    return(
      <>
      <ul>
          {(this.props.todos.length>0)?this.props.todos.map((todo, index)=>{
              return<li key={index} onClick={()=>this.props.handleClick(todo.id)}>{todo.label}</li>})
              : <p>No To Do List</p>
          }
      </ul>
      </>
    )
  }
}


const mapStateToProps=(state)=>{
    return{
        todos : state.todos
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
      handleClick:(id)=>dispatch({
      type:'DELETE_TODO',
      payload:id
      })
    }
}

//notes gais:
//An action object can have other fields with additional information about what happened. 
//By convention, we put that information in a field called payload.

export default connect(mapStateToProps,mapDispatchToProps) (ListTodo)










