import React,{createRef} from 'react';
import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import inf from "../../Events_db.js";
//const inf = require('../../Events_db.js');
const Agenda = () => {
  const calendarRef=createRef()
  const handleDateSelect=(selectInfo)=>{
    let calendarApi =selectInfo.view.calendar;
    console.log(selectInfo);
 
      calendarApi.addEvent({
       id:"f1",
       title:"",
       start:selectInfo.startStr,
       end:selectInfo.endStr,
       allDay:selectInfo.allDay,
      });
    
  }
  return (
    <div className="calendar">
   <FullCalendar 
   ref={calendarRef} 
   plugins={[dayGridPlugin,timeGridPlugin]}
    initialView="dayGridMonth"
    events=
      "http://localhost:1212/OPENTOUBIB/Desktop/Events_db"
    
 
    customButtons={{
      myTimeDayBtn:{
      text:"timeDay",
      click(){
        const calendar = calendarRef.current;
        if(calendar){
          const calendarApi=calendar.getApi();
          calendarApi.changeView("timeGridDay");
        }
      },
    },
    myTimeWeekBtn:{
      text:"timeDay",
      click(){
        const calendar = calendarRef.current;
        if(calendar){
          const calendarApi=calendar.getApi();
          calendarApi.changeView("timeGridDay");
        }
      },
    },
    
  }}
    headerToolbar={
      {
        left:"prev,next",
        center:"title",
        right:"dayGridMonth,timeGridDay,timeGridWeek,myTimeWeekBtn",
      }
    }
    eventClick={
      function(arg){
        alert(arg.event.title)
      }
    }
    select={handleDateSelect}
    />
    </div>
  );
};
export default Agenda;
