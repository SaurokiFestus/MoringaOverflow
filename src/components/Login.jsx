import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const Login = ({user}) => {
  const flowColor ={backgroundColor:"#f1f2f3"}
  const navigate = useNavigate();

  const [errors, setErrors ] = useState([]);

  //if user sends them to the Questions page
  useEffect(() => {
    if(user){
      navigate("http://localhost:3000/questions")}
  }, [])
  
  //handles the submition of the login form for authentication
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
  };

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
            name='username'
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name='password'
            className='form-control'
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
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
