import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      newAge: "",
      newAddress: "",
    //   isValid: true,
      errorName: null,
      errorAge: null,
      errorAddress: null,
      isValid:true
    };
  }
  handleChange = (event) => {
    if (event.target.name === "name") {
      if (
        
        // /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
        event.target.value.match(/^.{5,}$/)
      ) {
        this.setState({
          newName: event.target.value,
          errorName: "",
        });
      } else {
        this.setState({
          newName: event.target.value,
          errorName: "Name Minimum 5 Character",
        });
      }
    }
    else if(event.target.name === "age"){
        if(event.target.value > 17){
        this.setState({
            newAge: event.target.value,
            errorAge: "",
          });
    
        }
        else{
            this.setState({
                newAge: event.target.value,
                errorAge: "Age Must be More Than 17 Year",
              });
        }
    }
    else if(event.target.name === "address"){
        if(event.target.value !==""){
        this.setState({
            newAddress: event.target.value,
            errorAddress:""
          });}
          else{
            this.setState({
                newAddress: event.target.value,
                errorAddress:"Address Cant be Empty"
              });
          }
    }
    this.submit()
  };
  handleSubmit = (event) => {
    this.props.callBack({ name: this.state.newName,age:this.state.newAge,address:this.state.newAddress });
    event.preventDefault();
    
  };

  submit=() =>{
    let cond
    if(this.state.errorName ==="" && this.state.errorAge === "" && this.state.errorAddress ===""){
        //  this.setState({isValid:false});
            cond=false

      }else{

        cond=true
      }
      this.setState({isValid:cond});
 
}

  render() {
    // this.submit()
    return (
      <div>
        {/* <h2>Name : {this.state.newName}</h2>
        <h2>Age : {this.state.newAge}</h2>
        <h2>Address : {this.state.newAddress}</h2> */}
        <form onSubmit={this.handleSubmit}>
          <label>Name : </label>
          <input className="form-control cardForm text-center" type="text" name="name" onChange={this.handleChange} placeholder="Name"  />
          <p className="warning">{this.state.errorName}</p>
          <label>Age : </label>
          <input  className="form-control cardForm text-center" type="number" name="age" onChange={this.handleChange} placeholder="Age" />
          <p className="warning">{this.state.errorAge}</p>
          <label>Address : </label>
          <input  className="form-control cardForm text-center" type="text" name="address" onChange={this.handleChange} placeholder="Address" />
          <p className="warning">{this.state.errorAddress}</p>
          
          <input  className="form-control cardForm btnp" type="submit" value="submit" disabled={this.state.isValid} />
        </form>
      </div>
    );
  }
}
export default Form;