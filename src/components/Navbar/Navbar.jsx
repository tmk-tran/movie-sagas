import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Tabs, Tab } from '@mui/material';
import "./Navbar.css";

function Navbar() {

  return (
    <AppBar id="navbar" position="static">
      <Tabs value={false}>
        <Tab id="link" label="Home" component={Link} to="/" />
        <Tab id="link" label="Add Movie" component={Link} to="/movies" />
        {/* Add more Tab components for additional links */}
      </Tabs>
    </AppBar>
  );
}

export default Navbar;
