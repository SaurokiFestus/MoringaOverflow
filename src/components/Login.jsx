import React from "react";

function Login() {
  const flowColor = { backgroundColor: "#f1f2f3" }
  return (
    <div className="container-fluid" style={flowColor}>
      <div className="d-flex justify-content-center align-items-center " >
        <div>
        <button type="submit" className="btn bg-light mx-5 mt-4">
          <i className="bi bi-google m-3  "></i>Log In With Google
        </button>
      <form className="bg-light rounded  p-sm-3 mx-5 my-4">
       

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
      
    </div>
    </div>
    
  );
}

export default Login;
