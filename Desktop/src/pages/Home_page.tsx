import React  from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Nav_bar from './Nav_bar';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import Prevent_delay_button from './Prevent_delay_button';
import Tooltip from '@material-ui/core/Tooltip';
// To open external links
import {shell} from 'electron';
import Agenda from './Agenda';
import { useTranslation } from 'react-i18next';
// Secret Key if the user logged in
import { secretKeyLogin } from '../App.tsx';
// Secret Key if the user registered
import { secretKey } from './RegisterForm';

const model = require('../db');
// for await
const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

// modalevent  styling
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    float:'right'
  }, flex: {
    flexGrow: 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  color_white : {
    background: '#089bab',
    color: '#fff',

  },


  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


export default function Home_page() {
  const classes = useStyles();
  let indice=0;
  //Get Email user
  let name_doc=localStorage.getItem('email').toString();
  //useState to get the next appointment
  const [prochainRdv, setprochainRdv] = useState('');
  //useState to get the type of the next appointment
  const [typeRdv, settype] = useState();
//useState to get today Events for next Appointment function
  const [todayEvents, setTodayEvents] = useState([]);

// useState for time left for next apponitment
 const [dt, setDt] = useState(new Date().toLocaleString());
 const [startdt, setstartDt] = useState(new Date().toLocaleString());
 const { t, i18n } = useTranslation();
// Fetch next appointment every one second and show time left
 useEffect(() => {
  const fetch =  async()=>{
    if(secretKey!=null)
  model.getTodayEvents(secretKey, setTodayEvents);
  else model.getTodayEvents(secretKeyLogin, setTodayEvents);
  await sleep(5000);
  }
  fetch();
  let secTimer = setInterval( () => {
  let tod = new Date().getTime();
// test if todayEvents is not empty
  if(indice != todayEvents.length)
   { // get the appointment date in milliseconds
     let date= new Date(todayEvents[indice].start).getTime();
     // If the appointment is higher than now's time
    if(date>(tod)){
    console.log('dates',todayEvents.length, todayEvents[indice].title);
    // show title
    setprochainRdv(todayEvents.title);
    // See if the appointment is a teleconsultation or not
    settype(todayEvents[indice].isTeleconsultation=='0'?false:true);
    // Time left for next appointment in milliseconds
    setDt(((date- tod)/(60000)).toLocaleString());
    setstartDt(date.toLocaleString());
    }
    // if it didnt find an appointment in the same day the indice increments
    else indice++;}
    else
    // If there's no more appointments
    setprochainRdv("No next rdv");
  },1000)

  return () => clearInterval(secTimer);
}, []);

if(todayEvents==[]) return <div>Loading</div>
  else return (

    <div className={classes.root}>

      <Nav_bar/>

      <main className="container-fluid">
        <div className="row">
          <div className="col-md-3">

            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq_header-title">
                  <h4 className="card-title"><b>{t('agenda.rdv')}</b></h4>
                </div>
              </div>


              <div className="iq-card-body">

                <ul className="m-0 p-0 job-classification">

              {(prochainRdv=="No next rdv")?
                (<li></li>)
              :(<li> Type :{typeRdv?'consultation':'teleconsultation' }

              </li>)
              }
                  <li> {prochainRdv} </li>
                  {(prochainRdv=="No next rdv")?
                  (<li></li>)
                 :(
                   <>
                   <li> Restant :{parseInt(dt)} min</li>
                 <Tooltip title="clicker pour visualiser le dossier medicale" arrow>
                 <div  className="">
                    <Link to="/Medical_file">
                    <li ><a className="bleu_text"> {t('agenda.medicalfile')} ></a></li></Link>
                  </div>
                  </Tooltip>
                  <li className="row">

                  <div className="col-md-66 space"><Prevent_delay_button/></div>
                  <div className="col-lg-30 space_right">
                  {typeRdv?

                   <div></div>
                   :
                   <button type="submit" className="btn iq-bg-primary"
                   onClick={()=>shell.openExternal('https://meet.jit.si/'+name_doc+startdt.toString())}
                   >
                    <VideoCallIcon  fontSize="small"/>{t('agenda.start')}</button>}


                     </div></li>
                     </>
                 )}


                </ul>
              </div>
            </div>

          </div>
          <div className="col-md-9">


         <Agenda/>

        </div>
        </div>
      </main>
    </div>
  );
}
