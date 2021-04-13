import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/store";

function Logout(props) {
  const users = useStore((state) => state.users);
  const logoutUser = useStore((state) => state.logoutUser);

  const logout = (token) => {
    logoutUser("http://localhost:3000/users/logout", token);
  };

  return (
    <div id="menu">
      <div id="menu-links">
        <Link to="/">
          <button onClick={logout}>Logout</button>
        </Link>
      </div>
    </div>
  );
}

export default Logout;
