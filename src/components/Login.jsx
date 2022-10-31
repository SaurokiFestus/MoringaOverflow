import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Login = ({setUser}) => {
  const flowColor ={backgroundColor:"#f1f2f3"}
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();


    async function handleSubmit(e) {
      e.preventDefault();
      await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => setUser(user));
          navigate("/questions");
        } else {
          res.json().then((errorData) => setErrors(errorData.errors));
        }
      });
      navigate("/");
    }

  return (
    <div className="container-fluid vh-100" style={flowColor}>
      <div className="d-flex justify-content-center align-items-center ">
        <div>
          <button type="submit" className="btn bg-light mx-5 mt-4">
            <i className="bi bi-google m-3  "></i>Log In With Google
          </button>
          <form className="bg-light rounded  p-sm-3 mx-5 my-4">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                placeholder="username"
                className="form-control"
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                placeholder="password"
                className="form-control"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check"></div>
            <button
              type="submit"
              className="btn bg-info mb-4 w-75 "
              onClick={handleSubmit}
            >
              Log In
            </button>
            <p className="text-center rounded" style={{ color: "red" }}>
              {errors}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
