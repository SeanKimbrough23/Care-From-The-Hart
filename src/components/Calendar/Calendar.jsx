import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const Calendar = () => {
  //const [value, setValue] = useState(new Date());
  //const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 5, 12]);
  return (
    <div>
      <h1 className="Calendar">Calendar</h1>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth, timeGridWeek, timeGridDay",
        }}
        height={"90vh"}
      />
    </div>
  );
};

export default Calendar;
