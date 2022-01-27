import { Component } from "react";

class BodyComponentChild extends Component{
  render(){
    return(
      <>
        <h5 className="card-title">{this.props.nameFromParent2}</h5>
        <p className="card-text">{this.props.address2}</p>
      </>
    )
  }
}

export default BodyComponentChild


//state ini berfungsi untuk memanipulasi data dalam komponen