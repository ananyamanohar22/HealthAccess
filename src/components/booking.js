import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
// import enUS from 'date-fns/locale/en-US'
// import 'react-big-calendar/lib/css/react-big-calender.css';
import React, { useState } from 'react';

import DatePicker from 'react-date-picker';


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
    start: new Date(2023,6,8),
    end: new Date(2023,6,8)
  },
]
function Booking() {
  const [newEvent, setNewEvent] = useState({title: "", start: ",", end: ""})
  const [allEvents, setAllEvents] = useState(events)

  function handleEvents() {
    setAllEvents([...allEvents, newEvent])
  }
  return (
    <div className="Booking">
      <h1>Calender</h1>
      <h2>Add New Event</h2>
      <div>
        <input type="text" placeholder='Add Title' value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} 
        />
        {/* <DatePicker */}
      </div>
      <Calendar className='calendar'
      localizer = {localizer} 
      events = {allEvents} 
      startAccessor = "start" 
      endAccessor = "end"
       />
    </div>
  );
}


export default Booking;

