import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/store";

function Logout(props) {
  const currentUser = useStore((state) => state.currentUser);
  const logoutUser = useStore((state) => state.logoutUser);

  const logout = (token) => {
    logoutUser("http://localhost:3000/users/logout/", currentUser.token);
  };

  return (
    <div id="menu">
      <div id="menu-links">
        <Link to="/">
          <button
            className="btn btn-lg btn-primary btn-block text-uppercase"
            onClick={logout}
          >
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Logout;
