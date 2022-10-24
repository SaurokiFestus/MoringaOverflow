import { OutlinedFlagOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Error from "./Error";

function Signup() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [ errors, setErrors ] = useState([]) 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

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
      <form  onSubmit={ handleSubmit } className="bg-secondary w-auto p-3 float-end rounded">
      <button type="submit" className="btn bg-light mb-4">
      <i className="bi bi-google m-3"></i>Sign Up With Google
        </button>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Display name
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            value={formData.username}
            onChange={ handleChange }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={ handleChange }
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={formData.password}
            onChange={ handleChange }
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
        <h3 className="text-black-50">
          By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy
        </h3>
        
      </form>

      </div>
      
    </div>
  );
}

export default Signup;
