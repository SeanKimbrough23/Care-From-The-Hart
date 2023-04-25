import React, { useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { HashRouter as Router, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Calendar = () => {
  const [option, setOption] = useState({}); // add a state variable to hold the calendar options

  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  const handleEventClick = (arg) => {
    console.log(arg.event);
  };

  // define a function to update the calendar options
  const updateOptions = () => {
    setOption({
      weekends: false, // disable weekends
      datesSet: (info) => {
        console.log("Calendar starting date:", info.startStr);
      },
      events: [
        // define events to be displayed on the calendar
        {
          title: "Event 1",
          start: "2023-05-01T10:00:00",
          end: "2023-05-01T12:00:00",
        },
        {
          title: "Event 2",
          start: "2023-05-02T13:00:00",
          end: "2023-05-02T15:00:00",
        },
      ],
    });
  };

  return (
    <div>
      <h1 className="Calendar" color="#FF91a4">
        Calendar
      </h1>
      <Fullcalendar
        eventBackgroundColor="pink"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth, timeGridWeek, timeGridDay",
        }}
        dateClick={handleDateClick}
        eventClick={handleEventClick} // add a callback function for event click
        initialView={"dayGridMonth"}
        editable={true}
        selectable={true}
        dayMaxEvents={true}
        height={"90vh"}
        {...option} // spread the options object to the Fullcalendar component
      />
      <Button onClick={updateOptions}>Update Options</Button> // add a button to
      update the calendar options
      <Link
        to="/Booking"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          color: "#FF91a4",
        }}
      >
        <Button
          style={{
            justifyContent: "normal",
            fontWeight: "bold",
            fontSize: "20px",
            variant: "text",
            color: "green",
            p: 5,
          }}
        >
          Continue To Booking{""}
          <FontAwesomeIcon icon={faArrowRight} color="green" />
        </Button>
      </Link>
    </div>
  );
};

export default Calendar;
