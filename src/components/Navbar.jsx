import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  const flowColor = { color: "#f48d4f" }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="container-fluid">
        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"

                >
                  <i class="bi bi-list bg-dark m-3"></i>
                  <i style={flowColor} class="bi bi-stack-overflow m-2"></i>
                  <span className="text-dark">Moringa Flow</span>
                 
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-primary"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item " href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Questions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tags
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <h5 className="m-2">Questions</h5>
            <h5 className="m-2">About</h5>
            <h5 className="m-2">Tags</h5>
          </div>
          <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        
        <Link to="/login"> <button class="btn btn-primary m-1">Login</button></Link>
        <Link to="/signup"><button class="btn btn-primary m-1">Signup</button></Link>
      </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
