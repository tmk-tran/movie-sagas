import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Tabs, Tab } from '@mui/material';
import "./Navbar.css";

function Navbar() {

  return (
    <AppBar position="static">
      <Tabs value={false}>
        <Tab label="Home" component={Link} to="/" />
        <Tab label="Movies" component={Link} to="/movies" />
        {/* Add more Tab components for additional links */}
      </Tabs>
    </AppBar>
  );
}

export default Navbar;
