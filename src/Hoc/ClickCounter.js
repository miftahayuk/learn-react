import { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component{

    render(){
        return(
            <>
            {this.props.count} <br/>
            <button onClick={this.props.increment}>Clicked</button>
            </>
        )
    }
}

export default withCounter(ClickCounter)