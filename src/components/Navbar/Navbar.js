import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // state for Navbar component
  const [isNavOpen, setIsNavOpen] = useState(true);

  // Function to toggle the navbar collapse state
  const handleNavCollapse = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Your Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse} // Handle the click event
        >
          <span className="navbar-toggler-icon"></span>
          NavBar
        </button>
        {/* Conditionally render the navigation links based on isNavOpen */}
        {isNavOpen && (
          <ul className="navbar-nav ml-auto">
              <Link to="/">Home</Link>
              <Link to="/movies">OtherPage</Link>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
