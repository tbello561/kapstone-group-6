import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/store";

function Logout(props) {
  const currentUser = useStore((state) => state.currentUser);
  const logoutUser = useStore((state) => state.logoutUser);
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://bonsai-one.vercel.app"
      : "http://localhost:3000";

  const logout = (token) => {
    logoutUser(baseURL + "/users/logout/", currentUser.token);
  };

  return (
    <div id="menu">
      <div id="menu-links">
        <Link to="/">
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Logout;
