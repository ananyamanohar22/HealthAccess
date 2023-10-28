import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
// import enUS from 'date-fns/locale/en-US'
// import 'react-big-calendar/lib/css/react-big-calender.css';
import React, { useState } from 'react';
// import DatePicker from 'react-date-picker';

const locales = {
  "en-US": require("date-fns/locale/en-US")
}


const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})


const events = [
  {
    title: "Meet",
    allDay: true,
    start: new Date(2023,6,0),
    end: new Date(2023,6,0)
  },
]
function Booking() {
  return (
    <div className="App">
      <Calendar 
      localizer = {localizer} 
      events = {events} 
      startAccessor = "start" 
      endAccessor = "end"
       />
    </div>
  );
}

export default Booking;
