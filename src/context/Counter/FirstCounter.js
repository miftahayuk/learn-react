import { Component } from "react";
import { RootContext } from "../../App";

class FirstCounter extends Component{
    render(){
        return(
            <RootContext.Consumer>
                {
                    (val)=>{ //value ini arrow function yg melakukan return jsx
                        return(
                            <>
                            FIRST COUNTER <br/>
                            {val.state.globalNumber} <br/>
                            <button onClick={()=>val.dispatch({type :"PLUS"})}>PLUS</button>
                            <button onClick={()=>val.dispatch({type :"MINUS"})}>MINUS</button>
                            </>
                        )
                    }
                } 

            </RootContext.Consumer>
        )
    }
}

export default FirstCounter