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
    <Box
      component="span"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        p: 2,
        border: "1px dashed grey",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
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
        <Button>Edit</Button>
        <Button>Submit</Button>
      </div>
    </Box>
  );
};
export default RequestToBook;
