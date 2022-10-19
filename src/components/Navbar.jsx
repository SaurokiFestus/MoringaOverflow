import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
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
                  Dropdown
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-primary"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
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
          </div>
          <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        
        <button class="btn btn-primary m-1" type="submit">Login</button>
        <button class="btn btn-primary m-1" type="submit">Signup</button>
      </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
