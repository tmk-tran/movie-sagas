import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  // state for Navbar component
  const [isNavOpen, setIsNavOpen] = useState(true);

  // Function to toggle the navbar collapse state
  const handleNavCollapse = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
  };

  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container">
        <a className="navbar-brand" href="#">
          Your Logo
        </a>
        {/* Conditionally render the navigation links based on isNavOpen */}
        {isNavOpen && (
          <ul className="navbar-nav ml-auto">
            <Link to="/" style={{color: "ghostwhite"}}>Home</Link>
            <Link to="/movies" style={{color: "ghostwhite"}}>OtherPage</Link>
          </ul>
        )}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse} // Handle the click event
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
