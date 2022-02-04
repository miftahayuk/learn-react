import { Component } from "react";

//menerima parameter component dan mengembalikan komponen baru
//withCounter ini kayak parentnya clickCounter dan HoverCounter
const withCounter = (WrappedComponent)=>{
    class WithCounter extends Component{
        constructor(props){
            super(props)
            this.state={
                count :0
            }
        }
        increment=()=>{
            this.setState({
                count : this.state.count+1
            })
        }
        render(){
            return(
                <WrappedComponent count={this.state.count} increment={this.increment}/>
            )
        }
    }
    return WithCounter; //return classnya
}

export default withCounter