import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/signup">
          Sign up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Login
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
