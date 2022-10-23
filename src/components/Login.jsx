import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

function Login({ onLogin, user }) {
  const history = useHistory()
    
  const[username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

  useEffect(() => {
      if(user){
    history.push("/home")}
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      username: username,
      password: password
    }

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then((res) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else{
        r.json().then((error)=> setErrors(error.error))
      }
    })
  }
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