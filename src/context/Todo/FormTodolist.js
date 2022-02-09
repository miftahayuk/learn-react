import { Component } from "react";
import RootContext from "./RootContextTodo";

class ToDoForm extends Component {
  render(){
      return(
          <RootContext.Consumer>
              {
                  (value) => {
                        return (
                            <>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Title"
                                    name="newTitle"
                                    onChange={(event) => {
                                        value.dispatch({
                                            type: 'CHANGE_TITLE',
                                            newTitle: event.target.value

                                        });
                                    }}
                                />

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Description"
                                    name="newDesc"
                                    onChange={(event) => {
                                        value.dispatch({
                                            type: 'CHANGE_DESC',
                                            newDesc: event.target.value

                                        });
                                    }}
                                />

                                <button onClick={(event) => {
                                    value.dispatch({ type: 'ADD', event })
                                }}
                                >Submit</button>
                            </>
                        )
                    }
                
              }

          </RootContext.Consumer>
      )

  }
}

export default ToDoForm
