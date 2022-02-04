import { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component{
    render(){
        //bisa dengan destructuring
        const{count,increment}=this.props
        return(
            <>
            {count}
            <h1 onMouseOver={increment}>Hovered</h1>
            </>
        )
    }
}

export default withCounter(HoverCounter)