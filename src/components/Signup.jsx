import { OutlinedFlagOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Error from "./Error";

function Signup() {

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ errors, setErrors ] = useState([]);

  const handleSubmit = () => {
    email.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if(res.ok) {
        res.json().then((newUser) => onLogin(newUser));
      } else {
        res.json().then((error) => setErrors(error.errors))
      }
    });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex">
      <div className="p-2 flex-grow-1 ">
        <h2>Join the Moringa Overflow community</h2>
        <h4>Get unstuck — ask a question</h4>
        <h5>Unlock new privileges like voting and commenting</h5>
        <h6>Save your favorite tags, filters, and jobs</h6>
        <h6>Earn reputation and badges</h6>
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
            placeholder="Display Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          
        </div>
        {errors.map((err) => (
          <Error key={err} err={err}/>
        ))}
        <button type="submit" className="btn bg-info  mb-4" onClick={handleSubmit}>
          Sign Up
        </button>
        
        <br></br>
        <h3 className="text-black-50">By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy</h3>
        
      </form>

      </div>
      
    </div>
  );
}

export default Signup;
