import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TheatersIcon from "@mui/icons-material/Theaters";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';

import "./Navbar.css";

function Navbar() {
  return (
    <AppBar id="navbar" position="static">
      <Tabs value={false}>
        <Tab
          id="link"
          label={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <HomeIcon />
              <span>Home</span>
            </div>
          }
          component={Link}
          to="/home"
        />
        <Tab
          id="link"
          label={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TheatersIcon />
              <span>Add Movie</span>
            </div>
          }
          component={Link}
          to="/movies"
        />
        <Tab
          id="link"
          label={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <SearchIcon />
              <span>Search</span>
            </div>
          }
          component={Link}
          to="/search"
        />
        <Tab
          id="link"
          label={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <PersonIcon />
              <span>User</span>
            </div>
          }
          component={Link}
          to="/"
        />
        {/* Add more Tab components for additional links */}
      </Tabs>
    </AppBar>
  );
}

export default Navbar;
