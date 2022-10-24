import React from "react";

function Signup() {
  const flowColor = { backgroundColor: "#f1f2f3" }
  return (
    <div className="container-fluid" style={flowColor} >
      <div className="row">
      <div className="col-6 d-flex align-items-center p-5">
        <div>
        <h1>Join the Moringa Overflow community</h1>
        <h4>Get unstuck — ask a question</h4>
        <h5>Unlock new privileges like voting and commenting</h5>
        <h6>Save your favorite tags, filters, and jobs</h6>
        <h6>Earn reputation and badges</h6>
        </div>
        
      </div>

      <div className="col-6">
      <button type="submit" className="btn   m-5" style={{backgroundColor: "#f8f9fa"}}>
      <i className="bi bi-google "></i>
      <span className="px-3">Sign Up With Google</span>
        </button>
      <form  className="bg-light mx-5 my-2 p-5 rounded">
      
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"

          />
          
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control "
            id="exampleInputPassword1"
          />
        </div>
        <div className=" form-check">
          
        </div>
        <button type="submit" className="btn bg-info  mb-4">
          Sign Up
        </button>
        <br></br>
        <p1 className="text-black-50">By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy</p1>
        
      </form>

      </div>

      </div>
      
     

      
      
    </div>
  );
}

export default Signup;
