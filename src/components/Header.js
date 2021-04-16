import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function Header() {
  return (
    <div>
      <div>
        <Link to="/home" className="navbar-brand">
          <h1 className="header">
            <div className="fitness">Minute</div>
            <div className="home">Fitness</div>
          </h1>
        </Link>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light  ">
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
                <Link to="/profile" className="nav-link">
                  My Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/monday" className="nav-link">
                  Monday
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tuesday" className="nav-link">
                  Tuesday
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/wednesday" className="nav-link">
                  Wednesday
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/thursday" className="nav-link">
                  Thursday
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/friday" className="nav-link">
                  Friday
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Logout className="nav-link" />
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
