import { Component } from "react";
import ActionTypeTodo from "./ActionTypeToDo";
import RootContext from "./RootContextTodo";

class ProviderTodo extends Component{
    state = {
    addForm : false,
    List: [{ title: "main", desc:"apaya", cond:false }],
    newTitle: "",
    newDesc:"",
  }

  dispatch = (action) => {
    if (action.type === ActionTypeTodo.ADD) {
      this.state.List.push({
        title: this.state.newTitle,
        desc:this.state.newDesc
      });
      this.setState({});
    }

    if (action.type === ActionTypeTodo.CHANGE_TITLE) {
      return this.setState({
        newTitle: action.newTitle,
      })
    }

    if (action.type === ActionTypeTodo.CHANGE_DESC) {
      return this.setState({
        newDesc:action.newDesc
      })
    }

    if (action.type===ActionTypeTodo.CROSS_LINE){
      const lists=[...this.state.List]
      for(let list of lists){
        if(list.title===action.selectedTitle){
          if (list.cond){
            list.cond=false
          }else{
          list.cond=true
          }
        }
      }
      this.setState({
        List : lists
      })
    }

    if (action.type ===ActionTypeTodo.DELETE) {
      this.state.List.splice(action.index, 1)
      this.setState({});
    }

    if (action.type===ActionTypeTodo.SET_FORM){
      this.setState({
        addForm:action.form
      })
    }

  }

  render(){
      return(
          <RootContext.Provider value={{ state: this.state, dispatch: this.dispatch }}>
              {this.props.children}
          </RootContext.Provider>
      )
  }

}

export default ProviderTodo