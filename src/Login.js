import { Component } from "react";
import './login.css';

class LoginScreen extends Component{
    render(){
        return(
        <>
      {/* <header className="mystyle">
      <h1>Sinigma Website</h1>
      </header> */}
      <div className="container form-container">
          <div className="row justify-content-end">
            <div className="col-7">
                <div className="card w-50 loginBox">
              <div className="card-header">
                <p className="h4">Login Page</p>
              </div>
              <form className="row g-10" style={{padding:"10px"}}> 
                <div className="col-12">
                  <label htmlfor="inputUsername" class="form-label">Username</label>
                  <input type="text" class="form-control" id="inputUsername" placeholder="Enter Username"/>
                </div>
                <div style={{padding:"10px"}}></div>
                <div className="col-12">
                  <label for="inputPassword" class="form-label">Password</label>
                  <input type="text" class="form-control" id="inputPassword" placeholder="Enter Password"/>
                </div>
                <div style={{padding:"10px"}}></div>
                <div className="col-12">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                  <label className="form-check-label" for="defaultCheck1">
                  Remember me
                  </label>
                </div>
                <div style={{padding:"10px"}}></div>
                <div className="col-12">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>   
      </>
        );
    }
}

export default LoginScreen