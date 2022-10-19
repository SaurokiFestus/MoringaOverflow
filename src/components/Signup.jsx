import React from "react";

function Signup() {
  return (
    <div className="d-flex">
      <div className="p-2 flex-grow-1 ">
        <h2>Join the Moringa Overflow community</h2>
        <h4>Get unstuck — ask a question</h4>
        <h5>Unlock new privileges like voting and commenting</h5>
        <h6>Save your favorite tags, filters, and jobs</h6>
        <h7>Earn reputation and badges</h7>
      </div>

      <div className="p-3">
      <form  className="bg-secondary w-auto p-3 float-end rounded">
      <button type="submit" className="btn bg-light mb-4">
      <i className="bi bi-google m-3"></i>Sign Up With Google
        </button>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Display name
          </label>
          <input
            type="text"
            className="form-control"
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
            className="form-control"
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
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          
        </div>
        <button type="submit" className="btn bg-light  mb-4">
          Sign Up
        </button>
        <br></br>
        <h10 className="text-black-50">By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy</h10>
        
      </form>

      </div>
      
    </div>
  );
}

export default Signup;
