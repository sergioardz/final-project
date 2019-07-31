import React from "react";
import "./navbar.css";

const Navbar = props => (
  <header>
    <nav className="navbar navbar-light border-bottom fixed-top">
      <a className="navbar-brand" href="/">
        <img src={require("../../images/KLE.jpg")} width="auto" height="40" className="d-inline-block align-top" alt="" />
        <strong> KLE+WERT</strong>
      </a>
      <p>Smart Solutions and Value-Add Actions</p>
      <div className="nav-item justify-content-end">
        <a className="p-2 text-dark active" href="#"><strong>Home</strong></a>
        <a className="p-2 text-dark active" href="#"><strong>Dashboard</strong></a>
        <a className="p-2 text-dark active" href="#"><strong>Register</strong></a>
        <a className="btn btn-outline-info" href="#">Log in</a>
        <a className="p-2 text-dark active" href="#"><strong>Logout</strong></a>
      </div>
    </nav>
  </header>
);

export default Navbar;
