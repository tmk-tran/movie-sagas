import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    // state for Navbar component
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Your Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <Link to="/">Home</Link>
            <Link to="/movies">OtherPage</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
