import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useFormControl } from "@mui/material/FormControl";
import { useState } from "react";

const RequestToBook = () => {
  const [RequestBooking, setRequestBooking] = useState({
    Dates: "",
    Name: "",
    Email: "",
  });
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Box
          component="form"
          sx={{
            display: "inline-grid",
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            maxwidth: "500px",
            margin: "auto",
          }}
          noValidate
          autoComplete="off"
          justifyContent={"center"}
        >
          <TextField
            id="outlined-multiline-flexible"
            label="Date"
            multiline
            required
            maxRows={4}
          />
          <TextField
            id="outlined-textarea"
            label="Name"
            placeholder="Name"
            required
            multiline
          />

          <TextField
            id="outlined-textarea"
            label="Email"
            placeholder="Email"
            required
            multiline
          />
          <TextField
            id="outlined-multiline-static"
            label="Request"
            multiline
            required
            rows={10}
            defaultValue="Request"
          />
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Button
              sx={{
                backgroundColor: "#FF91a4",
                color: "green",
                fontWeight: "bold",
                border: "2px solid green",
                borderRadius: "5px",
                padding: "12px 12px",
                cursor: "pointer",
                width: "40%",
                boxshadow: 3,
                marginRight: "10px", // add margin on the right to have space between buttons
              }}
            >
              Edit
            </Button>

            <Button
              sx={{
                backgroundColor: "#FF91a4",
                color: "green",
                fontWeight: "bold",
                border: "2px solid green",
                borderRadius: "5px",
                padding: "12px 12px",
                cursor: "pointer",
                width: "40%",
                boxShadow: 3,
                marginLeft: "10px", //add a space on the left between buttons
              }}
            >
              {" "}
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};
export default RequestToBook;

// To Do List:
// 1. Fix hover over button color
//2 Fix the input form to middle of the page
//3. fix buttons so they align in middle and next to each other
