import React from "react";
import "./UserPage.css";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h4" sx={{ textAlign: "center", mt: 5 }}>
          Welcome, {user.username}!
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
          Your ID is: {user.id}
        </Typography>
        <LogOutButton className="btn" />
      </Box>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
