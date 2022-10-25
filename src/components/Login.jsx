import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

function Login({ onLogin, user }) {
  const flowColor ={backgroundColor:"#f1f2f3"}
  const navigate = useNavigate();
  
    
  const[username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

  //if user sends them to the Home page
  useEffect(() => {
    if(user){
      navigate("http://localhost:3000/home")}
  }, [])
  
  //handles the submition of the login form for authentication
  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      username: username,
      password: password
    }

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then((res) => {
      if (res.ok) {
        res.json().then((user) => onLogin(user));
      } else{
        res.json().then((error)=> setErrors(error.errors))
      }
    })
  }
  return (
    <div className="container-fluid vh-100" style={flowColor}>
      <div className="d-flex justify-content-center align-items-center " >
        <div>
        <button type="submit" className="btn bg-light mx-5 mt-4">
          <i className="bi bi-google m-3  "></i>Log In With Google
        </button>
      <form className="bg-light rounded  p-sm-3 mx-5 my-4">
       

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className='form-control'
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          
        </div>
        <button type="submit" className="btn bg-info mb-4 w-75 " onClick={handleSubmit}>
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
