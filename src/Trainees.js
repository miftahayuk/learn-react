import { Component } from "react";
import Card from './Card'

class Trainees extends Component{

    constructor(props){
        super(props)
        this.state = {
            peoples : [
                {
                    name : 'Miftah',
                    age : 21
                },
                {
                    name : "Ayu",
                    age : 22
                }
            ]
        }
    }

    //inget push termasuk impure, jadi merubah struktur aslinya
    addComponent = () =>{
        this.state.peoples.push({
            name : "NewName",
            age: 23
        })
        this.setState({
            peoples : this.state.peoples
        })
    }

    render(){
        console.log(this.state.peoples);
        const items = []
        for (let i = 0; i < this.state.peoples.length; i++) {
            items.push(<Card people={this.state.peoples[i]}/>)
            
        }
        return(
            <>
                {items}
                <div className="card">
                    <button onClick={this.addComponent}>Add Component</button>
                </div>
            </>
        )
    }
}

export default Trainees