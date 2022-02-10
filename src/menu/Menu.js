import { Component } from "react"
import { connect } from "react-redux"
// import ActionType from "../redux/globalAction"
import ToDoListForm from "./FormMenu"
import ListToDoList from "./ListMenu"

class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      addForm : true
    }
  }

  render() {
    return (
      <div className="App">
      {this.props.addForm ? <ToDoListForm/> : <ListToDoList/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      addForm : state.form.addForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    changeForm : (newCondition) => dispatch({type: "CHANGEADDFORM", condition: newCondition})
  }
}


export default  connect(mapStateToProps, mapDispatchToProps)(Menu)