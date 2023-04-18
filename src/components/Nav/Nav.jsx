import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import Button from "@mui/material/Button";
import { HashRouter as Router, Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function NavBar() {
  const user = useSelector((store) => store.user);

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <h2 className="nav-title">Home</h2>
          <Router>
            <Link to="/Home" style={{ textDecoration: "none", color: "white" }}>
              <Button variant="inherit"></Button>
            </Link>
          </Router>
          <Router>
            <Link
              to="/Portfolio"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button variant="inherit">Portfolio</Button>
            </Link>
          </Router>
          <Router>
            <Link
              to="/Calendar"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button variant="inherit">Calendar</Button>
            </Link>
            <Router>
              <Link
                to="/BookingRequest"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="inherit"></Button>
              </Link>
            </Router>
          </Router>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
