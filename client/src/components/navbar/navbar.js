import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-light border-bottom fixed-top">
          <Link className="navbar-brand" to="/">
            <img src={require("../../images/KLE.jpg")} width="auto" height="40" className="d-inline-block align-top" alt="" />
            <strong> KLE+WERT</strong>
          </Link>
          <p>Smart Solutions and Value-Add Actions</p>
          <div className="nav-item justify-content-end">
            <Link className="p-2 text-dark active" to="/"><strong>Home</strong></Link>
            <Link className="p-2 text-dark active" to="/main"><strong>Dashboard</strong></Link>
            { this.props.user && this.props.user.local.role === 'admin' &&
              <Link className="p-2 text-dark active" to="signup"><strong>Register</strong></Link>
            }
            <Link className="btn btn-outline-info btn-sm" to="login">Log in</Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;