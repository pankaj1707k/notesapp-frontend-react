import React from "react";
import { Link } from "react-router-dom";
import NavbarToggler from "./NavbarToggler";
import NavList from "./NavList";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="#" className="navbar-brand fs-3">
          NotesApp
        </Link>
        <NavbarToggler />
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <NavList />
        </div>
      </div>
    </nav>
  );
};

export default Header;
