import { Component } from "react";
import './Trainee.css'

class Card extends Component{

    constructor(props){
        super(props)
        this.state={
            orang : this.props.people
        }
    }
    increment=()=>{
        let orangTemp ={...this.state.orang}
        orangTemp.age+= 1
        this.setState({
            orang: orangTemp
        })
    }

    render(){
        return(
            <div className="card">
                <h1>{this.state.orang.name}</h1>
                {this.state.orang.age}<br/>
                {this.props.people.age}<br/>

                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Card

//INGET : props itu read only !