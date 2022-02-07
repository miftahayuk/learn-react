import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "./globalActionType";

class FirstCounter extends Component{
    render(){
        console.log(this.props);
        return(
            <>
            FIRST COUNTER
            <br/>
            {this.props.number}
            <br/>
            <button onClick={this.props.handlePlus}>+</button>
            <button onClick={this.props.handleMinus}>-</button>
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        number : state.globalNumber
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        handlePlus:()=>dispatch({type: ActionType.PLUS}),
        handleMinus:()=>dispatch({type: ActionType.MINUS})
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (FirstCounter)