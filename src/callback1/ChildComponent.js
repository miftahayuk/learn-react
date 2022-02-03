import { Component } from "react";
import GrandChildComponent from "./GrandChildComponent";
//yang ngimport ituuu ortunyaaa

class ChildComponent extends Component{
    
    // message ='this is message from child'

    sendPropsCallback=(msg)=>{
        // console.log(this.props);
        this.props.callback(msg)
    }

    render(){
        return(
            <div>
                {/* <h1>{this.props.name}</h1> */}
                {/* <h2>{this.message}</h2> */}
            {/* <button onClick={this.sendPropsCallback}>Click</button> */}
            <GrandChildComponent name2={this.props.name} callback2={this.sendPropsCallback}/>
            </div>
        )
    }
}

export default ChildComponent