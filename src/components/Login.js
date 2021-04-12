import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div className="login">
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username: </label>
        <br></br>
        <input
          className="logInput"
          type="text"
          name="username"
          value={formData.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="password">Password: </label>
        <br></br>
        <input
          className="logInput"
          type="password"
          name="password"
          value={formData.password}
          required
          onChange={handleChange}
        />
        <br></br>
        <button type="submit">Login</button>
        <div className="notMember">
          <p>
            Not a member? Register <Link to="/Register">here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
