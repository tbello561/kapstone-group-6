import React from "react";
import { Link } from "react-router-dom";

// import Logout from "./Logout";

function Header() {
  return (
    <div>
      <div>
        <Link to="/home" className="navbar-brand">
          <h1 className="header">
            <div className ="fitness">Fitness</div>
            <div className= "home">at Home</div>
            </h1>
        </Link>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/cardio" className="nav-link">
                  Cardio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/upperbody" className="nav-link">
                  Upper Body
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/lowerbody" className="nav-link">
                  Lower Body
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/stretches" className="nav-link">
                  Stretches
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  {/* <Logout className="nav-link" /> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
