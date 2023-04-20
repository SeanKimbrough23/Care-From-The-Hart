import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import VolunteerActivismSharpIcon from "@mui/icons-material/VolunteerActivismSharp";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import Button from "@mui/material/Button";
import { HashRouter as Router, Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

const pages = ["About Me", "Portfolio", "Calendar", "Blog", "Admin"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const user = useSelector((store) => store.user);

  return (
    <>
      <AppBar position="relative" sx={{ backgroundColor: "green" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <VolunteerActivismSharpIcon
              sx={{
                color: "#FF91a4",
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CARE FROM THE HART
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <VolunteerActivismSharpIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Router>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "#FF91a4" }}
              >
                <Button variant="inherit">Home</Button>
              </Link>
            </Router>
            <Router>
              <Link
                to="/Portfolio"
                style={{ textDecoration: "none", color: "#FF91a4" }}
              >
                <Button variant="inherit">Portfolio</Button>
              </Link>
            </Router>
            <Router>
              <Link
                to="/Calendar"
                style={{ textDecoration: "none", color: "#FF91a4" }}
              >
                <Button variant="inherit">Calendar</Button>
              </Link>
              <Router>
                <Link
                  to="/Booking"
                  style={{ textDecoration: "none", color: "#FF91a4" }}
                >
                  <Button variant="inherit">Booking Request</Button>
                </Link>
              </Router>
              <Router>
                <Link
                  to="/adminhome"
                  style={{ textDecoration: "none", color: "#FF91a4" }}
                >
                  <Button variant="inherit">Admin</Button>
                </Link>
              </Router>
            </Router>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
