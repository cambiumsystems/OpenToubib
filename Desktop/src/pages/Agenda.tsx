import React,{createRef} from 'react';
import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


// import inf from "../../Events_db.js";
// const inf = require('../../Events_db.js');
const knex = require('../../database');
let inf = [];
knex
  .select('*')
  .from('events')
  .then((data) => {
    inf = data;
    console.log('voila ', inf);
  })

  .catch((err) => console.log(err));
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
      <Link to="/">Go back to home</Link>

   <FullCalendar
   ref={calendarRef}
   
   plugins={[dayGridPlugin,timeGridPlugin, interactionPlugin]}
    initialView="dayGridMonth"
    
    editable={true}
    selectable
    weekends

    eventChange={function(ev){
      const start = ev.event.start;
      const end = ev.event.end;
      const id = ev.event.id;
      alert("voulez vous vraiment modifier le rdv :" +ev.event.title) 
      knex("events")
      .update({start,end})
      .where({id})
      .then(alert("date d'ev modifer"))
      
    }}

   events={inf}

   
    
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
        right:"dayGridMonth,timeGridDay,timeGridWeek",
      }
    }
    eventClick={
      function(arg){
        alert("rdv avec :"+arg.event.title)
      }
    }
  
    select={handleDateSelect}
    />
    </div>
  );
};
export default Agenda;
