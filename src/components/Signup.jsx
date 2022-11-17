import React, { useState } from "react";
import { OutlinedFlagOutlined } from "@mui/icons-material";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

function Signup() {
  const flowColor = { backgroundColor: "#f1f2f3" };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(formData);

  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch("http://127.0.0.1:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
        email: formData.email,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
        });
        navigate("/login");
      } else {
        res.json().then((errors) => {
          setErrors(errors);
        });
      }
    });
  }
  // console.log(errors);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-sm-10 d-flex align-items-center p-5">
          <div>
            <h1>
              Join the
              <span style={{ color: "#f48d4f" }}> Moringa Overflow </span>
              community
            </h1>
            <h4>Get unstuck — ask a question</h4>
            <h5>Unlock new privileges like voting and commenting</h5>
            <h6>Save your favorite tags, filters, and jobs</h6>
            <h6>Earn reputation and badges</h6>
          </div>
        </div>
        <div className="col-lg-5 my-3 col-sm-10 ">
          <button
            type="submit"
            className="btn "
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <i className="bi bi-google "></i>
            <span className="px-3">Sign Up With Google</span>
          </button>
          <form className="bg-light mr-5 my-4 p-5 rounded">
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
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Error errors={errors} />
            {/* {errormessage} */}
            <button
              type="submit"
              className="btn bg-info  my-4"
              onClick={handleSubmit}
            >
              Sign Up
            </button>

            <br></br>
            <p className="text-black-50">
              By clicking “Sign up”, you agree to our terms of service, privacy
              policy and cookie policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
