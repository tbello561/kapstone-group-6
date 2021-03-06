import React, { useState } from "react";
import useStore from "../store/store";

function Register(props) {
  const registerUser = useStore((state) => state.registerUser);
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://scarce-malleable-grouse.glitch.me"
      : "http://localhost:3000";

  const [formData, setFormData] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const registerNewUser = (e, username, displayName, password) => {
    e.preventDefault();
    registerUser(
      baseURL + "/users",
      formData.username,
      formData.displayName,
      formData.password
    );
    props.history.push("/");
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div className="register">
      <form id="register-form" onSubmit={registerNewUser}>
        <label htmlFor="username">Username: </label>
        <br></br>
        <input
          className="regInput"
          type="text"
          name="username"
          value={formData.username}
          required
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="username">Display Name: </label>
        <br></br>
        <input
          className="regInput"
          type="text"
          name="displayName"
          value={formData.displayName}
          required
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="password">Password: </label>
        <br></br>
        <input
          className="regInput"
          type="password"
          name="password"
          value={formData.password}
          required
          onChange={handleChange}
        />
        <br></br>
        <button type="submit" className="register-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;
