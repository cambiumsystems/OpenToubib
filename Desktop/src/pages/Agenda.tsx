import React,{createRef,useState} from 'react';
import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { red } from '@material-ui/core/colors';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import swal from 'sweetalert';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
// import inf from "../../Events_db.js";
// const inf = require('../../Events_db.js');
const knex = require('../database');
let inf = [];
knex
  .select('*')
  .from('events')
  .then((data) => {
    inf = data;
    }
    
  )
  .catch((err) => console.log(err));
const Agenda = () => {


  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


const body = (
  <div style={modalStyle} className={classes.paper}>
    <h2 id="simple-modal-title"className="h_txt" >Parametrage du calendrier</h2>
    <a className="left">heure de travail</a>
    <br/>

    <div id="simple-modal-description">
     <form  >
        <div className="form-row">
          <div className="col">
          <label className="form-control_input">Debut des prestations</label>
          </div>
          <div className="col">
          <input type="time"className="form-control" onChange={handleChangedebut}/>

           </div>
        </div>
        <div className="form-row">
          <div className="col">
          <label className="form-control_input">Fin des prestations</label>
          </div>
          <div className="col">
          <input type="time"className="form-control" onChange={handleChangefin}/>

           </div>
        </div>

        <button  type="submit" className="bg-primary_mini pt-5 pb-5 text-center rounded">submit</button>
     </form>
    </div>

  </div>
);

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


  const [debut,setdebut]=useState("");
  const [fin,setfin]=useState("");
  const handleChangedebut = (event) => {
    setdebut(event.target.value);
    localStorage.setItem('debut',debut);
  };
  const handleChangefin = (event) => {
    setfin(event.target.value);
    localStorage.setItem('fin',fin);
  };
 
  return (
    <div className="calendar">
      <div className="left"> <a onClick={handleOpen}><SettingsSharpIcon/>
      </a></div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
<br/>
<br/>

   <FullCalendar
   ref={calendarRef}

   plugins={[dayGridPlugin,timeGridPlugin, interactionPlugin]}
    initialView="dayGridMonth"
    slotMinTime= "08:00:00"
    editable={true}
    selectable
    weekends
    eventColor='#00FA9A'
    eventChange={function(ev){
      const start = ev.event.start;
      const end = ev.event.end;
      const id = ev.event.id;
      swal({
        title: "Etes vous sure de vouloir changer la date de ce rendez-vous?",
        text: "Le rendez-vous sera reporté et le patient notifié par email!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("La date du rendez-vous a été modifiée!", {
            icon: "success",
          });
        } else {
          swal("La date du rendez-vous n'a pas été modifiée!");
        }
      });
      knex("events")
      .update({start,end})
      .where({id})
      .then()

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
