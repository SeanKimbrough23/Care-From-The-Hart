import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { HashRouter as Router, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Calendar = () => {
  //const [value, setValue] = useState(new Date());
  //const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 5, 12]);
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
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
        initialView={"dayGridMonth"}
        editable={true}
        selectable={true}
        dayMaxEvents={true}
        height={"90vh"}
      />
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
