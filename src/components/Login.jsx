import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const Login = ({ setUser }) => {
  const flowColor = { backgroundColor: "#f1f2f3" };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("http://127.0.0.1:3000/login", {
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
        res.json().then((errorData) => setErrors(errorData.error));
      }
    });
  }

  //gapi gimmick
    const clientId = '1046539588446-t5i427dqrv4of643arnatu2m9thmaq11.apps.googleusercontent.com';

    useEffect(() => {
      const initClient = () => {
            gapi.client.init({
            clientId: clientId,
            scope: ''
          });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        console.log('success:', res);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };

  // const errormessage = errors?.map((error) => {
  //   return (
  //     <>
  //       <Error error={error} />
  //     </>
  //   );
  // });

  return (
    <div className="container-fluid vh-100" style={flowColor}>
      <div className="d-flex justify-content-center align-items-center ">
        <div>
          <div className="btn bg-light mx-5 mt-4" >
            <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={false}/>
          </div>
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
            <div className="mb-2">
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
            <div className="">
              <li className="text-danger list-unstyled p-2">{errors}</li>
            </div>
            <button
              type="submit"
              className="btn bg-info mb-4 w-75 "
              onClick={handleSubmit}
            >
              Log In
            </button>
            <p className="text-center rounded" style={{ color: "red" }}></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
