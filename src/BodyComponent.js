import { Component } from "react";
import BodyComponentChild from "./BodyComponentChild";

class BodyComponent extends Component{
  render(){
    console.log(this.props);
    return(
      <div className="card" style={{width:"18rem"}}>
        <div className="card-body">
          <BodyComponentChild nameFromParent2={this.props.nameFromParent} address2={this.props.address}/>
        </div>
      </div>
    )
  }
}

export default BodyComponent