import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item fs-5">
        <Link className="nav-link" to="/signup">
          Sign up
        </Link>
      </li>
      <li className="nav-item fs-5">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item fs-5">
        <Link className="nav-link" to="/notes">
          Notes
        </Link>
      </li>
      <li className="nav-item fs-5">
        <Link className="nav-link" to="/profile">
          <i class="bi bi-person-circle"></i>
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
