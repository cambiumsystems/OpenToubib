import React  from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav_bar from './Nav_bar';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import Prevent_delay_button from './Prevent_delay_button';
import Tooltip from '@material-ui/core/Tooltip';
import {shell} from 'electron';
import Agenda from './Agenda';
import { useTranslation } from 'react-i18next';

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




export default function Home_page() {
  const classes = useStyles();
  let inf=[];
  let todayRdvs = [];
  let indice=0;
  //Get Email user
  let name_doc=localStorage.getItem('email').toString();
  //useState to get the next appointment
  const [prochainRdv, setprochainRdv] = useState('No next rdv');
  //useState to get the type of the next appointment
  const [typeRdv, settype] = useState();

  // Get today's appointments

const history = useHistory();

 const [dt, setDt] = useState(new Date().toLocaleString());
 const [startdt, setstartDt] = useState(new Date().toLocaleString());
 const { t, i18n } = useTranslation();
  return (

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
