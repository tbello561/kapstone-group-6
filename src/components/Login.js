import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/store";

function Login(props) {
  const loginUser = useStore((state) => state.loginUser);
  const users = useStore((state) => state.users);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const loginUsers = (e, username, password) => {
    e.preventDefault();
    loginUser(
      "http://localhost:3000/users/login",
      formData.username,
      formData.password
    );
    props.history.push("/home");
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div className="login">
      <form id="login-form" onSubmit={loginUsers}>
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

        <button type="submit" class="btn btn-lg btn-primary btn-block text-uppercase">
          Login
        </button>

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
