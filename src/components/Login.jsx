import React from "react";

function Login() {
 
  return (
    <div className="d-flex justify-content-center align-items-center">
      <form className="bg-light rounded p-9 p-sm-3 m-5">
        <button type="submit" className="btn bg-light mb-4 w-100">
          <i className="bi bi-google m-3  p-3 "></i>Log In With Google
        </button>

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
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn bg-info mb-4 w-100 ">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
