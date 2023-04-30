import * as React from "react";
import Box from "@mui/material/Box";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import PendingRequestsForm from "../PendingRequests/PendingRequests";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const RequestToBook = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [booking, setBooking] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const bookingDetails = useSelector((store) => store.commentDetails);
  const [RequestBooking, setRequestBooking] = useState({
    Dates: "",
    Name: "",
    Email: "",
  });

  //ability for user to go back to About Me page
  const goToPreviousPage = () => {
    history.push("/AboutMe");
  };

  const thankYouPrompt = () => {
    swal
      .fire({
        title:
          "Thank You for your request, I will answer your request at my earliest convenience",
      })
      .then(() => {
        history.push("/home");
      });
  };

  const [displayMissingFieldsMessage, setMissingFieldsMessage] =
    useState(false);

  const getBookingDetails = () => {
    dispatch({
      type: "FETCH_BOOKINGS",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBooking("");
    let bookingDetails = {
      user_Id: user.Id,
      date: date,
      email: email,
      request: request,
    };
    dispatch({ type: "POST_NEW_BOOKING", payload: bookingDetails });
  };

  useEffect(() => {
    getBookingDetails();
  }, []);
  return (
    <>
      <h1>Booking Requests</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Box
            component="form"
            sx={{
              display: "inline-grid",
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              maxXidth: "500px",
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
              value={RequestBooking.Dates}
              onChange={(event) =>
                setRequestBooking({
                  ...RequestBooking,
                  Dates: event.target.value,
                })
              }
            />
            {/* <TextField
            id="outlined-textarea"
            label="Name"
            placeholder="Name"
            required
            multiline
            value={RequestBooking.Name}
            onChange={(event) =>
              setRequestBooking({
                ...RequestBooking,
                Name: event.target.value,
              })
            }
          /> */}
            <TextField
              id="outlined-textarea"
              label="Email"
              placeholder="Email"
              required
              multiline
              value={RequestBooking.Email}
              onChange={(event) =>
                setRequestBooking({
                  ...RequestBooking,
                  Email: event.target.value,
                })
              }
            />
            <TextField
              id="outlined-multiline-static"
              label="Request"
              multiline
              required
              rows={10}
              value={booking}
              onChange={(event) => setBooking(event.target.value)}
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
                onClick={() => handleSubmit(event)}
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
          <form>
            <PendingRequestsForm></PendingRequestsForm>
          </form>
        </div>
      </div>
    </>
  );
};

export default RequestToBook;

// To Do List:
// 1. Fix hover over button color
//2 Fix the input form to middle of the page
//3. fix buttons so they align in middle and next to each other
