import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  //const [value, setValue] = useState(new Date());
  //const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 5, 12]);
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };
  return (
    <div>
      <h1 className="Calendar">Calendar</h1>
      <Fullcalendar
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
    </div>
  );
};

export default Calendar;
