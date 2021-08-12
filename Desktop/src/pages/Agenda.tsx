import React from 'react';
import { Link } from "react-router-dom";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Agenda = () =>  {
    return (
      <>
      <Link to="/">Go back to home</Link>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
      </>
    )
  };
  export default Agenda;
