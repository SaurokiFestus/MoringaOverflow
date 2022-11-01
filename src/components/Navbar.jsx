import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

// import Questions from "./Questions"

function Navbar({user, setWordEntered}) {
  const flowColor = { color: "#f48d4f", fontSize: "20px"};

  let navigate = useNavigate()

  // console.log(user.name)

  function handleLogout () {

      fetch(`http://127.0.0.1:3000/logout`, {
          method: "DELETE"
      })
          .then((res)=>{
              if (res.ok){
                  setUser(null)
              }
          })
      // navigate('/signup')
  
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  // aria-expanded="false"
                >
                  <i style={flowColor} class="bi bi-list  m-3"></i>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i style={flowColor} class="bi bi-bezier m-2"></i>
                    <span className="text-dark fs-5 mx-2">Moringa Flow</span>
                  </Link>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-primary"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item " href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/questions">
                      Questions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/about">
                      About
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <Link
              to="/questions"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 className="m-2">Questions</h5>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 className="m-2">About</h5>
            </Link>
          </div>

          <form class="col mx-2">
            <input
              class="form-control "
              type="text"
              placeholder="Search question"
              aria-label="Search"
              onChange={(e) => setWordEntered(e.target.value)}
            />
          </form>
          <span>
            {user ? (
              <>
                
                  <a  href="/profile" class="btn btn-primary m-1" >{user.username.charAt(0)}</a>
              
                  <button class="btn btn-primary m-1" onClick={handleLogout}>LogOut</button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button style={{ backgroundColor: "#f0f8fe" }} class="btn btn-primary m-1 text-primary border-1 ">LogIn</button>
                </Link>
                <Link to="/signup">
                  <button class="btn btn-primary m-1">Sign Up</button>
                </Link>
              </>
            )}
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
