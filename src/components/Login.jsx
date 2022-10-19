import React from 'react'

function Login() {
  return (
    <div>
        <form  className="bg-secondary w-auto p-3 float-start rounded">
      <button type="submit" className="btn bg-light mb-4">
      <i className="bi bi-google m-3 w-100 p-3 "></i>Log In With Google
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
        <div className="mb-3 form-check">
          
        </div>
        <button type="submit" className="btn bg-info mb-4 w-75 ">
          Log In
        </button>
        
      </form>
    </div>
  )
}

export default Login