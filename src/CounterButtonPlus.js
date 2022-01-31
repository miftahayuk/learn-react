import { Component } from "react";

class CounterButtonPlus extends Component{
    sendCallBackCounterButtonPlus=()=>{
        let result= this.props.numberFromCount+1
        this.props.callback(result)
    }

    render(){
        return(
            <div>
                <button onClick={this.sendCallBackCounterButtonPlus}>+</button>
            </div>
        )
    }
}

export default CounterButtonPlus 