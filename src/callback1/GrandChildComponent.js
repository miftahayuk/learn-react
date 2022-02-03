import { Component } from "react";

class GrandChildComponent extends Component{
    message = 'This is message from grand child component'

    sendPropsCallback2=()=>{
        // console.log(this.props);
        this.props.callback2(this.message)
    }
    render(){
        return(
            <div>
                <h1>{this.props.name2}</h1>
                <button onClick={this.sendPropsCallback2}>Click</button>
            </div>
        )
    }
}

export default GrandChildComponent