import { Component } from "react";
import { RootContext } from "../App";

class SecondCounter extends Component{
    render(){
        return(
            <RootContext.Consumer>
                {
                    (val)=>{ //value ini arrow function yg melakukan return jsx
                        return(
                            <>
                            SECOND COUNTER <br/>
                            {val.globalNumber} <br/>
                            <button>PLUS</button>
                            </>
                        )
                    }
                } 

            </RootContext.Consumer>
        )
    }
}

export default SecondCounter