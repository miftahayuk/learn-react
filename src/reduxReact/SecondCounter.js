import { Component } from "react"
import { connect } from "react-redux"

class SecondCounter extends Component{
    render(){
        return(
            <>
            SECOND COUNTER
            <br/>
            {this.props.number}
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        number : state.globalNumber
    }
}

export default connect(mapStateToProps) (SecondCounter)
//connect function parameternya function terus ngereturn function juga (dalam hal ini brrti return komponen pastinya, yaitu si secondCounter)