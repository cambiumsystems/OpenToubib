import React , { Component } from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MailIcon from '@material-ui/icons/Mail';
import Agenda from './Agenda';
import DuoIcon from '@material-ui/icons/Duo';
import HdrStrongIcon from '@material-ui/icons/HdrStrong';
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import grey from "@material-ui/core/colors/grey";


import orange from "@material-ui/core/colors/orange";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Modal from '@material-ui/core/Modal';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import LongMenu from './LongMenu';
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from 'react-router-dom';

import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import Nav_bar from './Nav_bar';
import swal from 'sweetalert';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import Modal_hour from './Modal_hour';

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

const useStyless = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function App_bar() {
  const classes = useStyles();



  const classess = useStyless();
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
    <div style={modalStyle} className={classess.paper}>
      <h2 id="simple-modal-title"className="h_txt" >Code couleurs</h2>
      <div id="simple-modal-description">
       <form >
          <div className="form-row">
            <div className="col">
            <label className="form-control_input">1ere consultation</label>
            </div>
            <div className="col">
            <select className="form-control">
              <option selected>Couleur attribuée</option>
              <option className="redd">  Rouge </option>
              <option className="orangee"> Orange</option>
              <option className="greenn" >vert</option>
              <option className="bleuu" >bleu</option>
              
            </select>
             </div>
          </div>
          <div className="form-row">
            <div className="col">
            <label className="form-control_input">Controle</label>
            </div>
            <div className="col">
            <select className="form-control">
            <option selected>Couleur attribuée</option>
              <option className="redd">  Rouge </option>
              <option className="orangee"> Orange</option>
              <option className="greenn" >vert</option>
              <option className="bleuu" >bleu</option>
            </select>
             </div>
          </div>
          <div className="form-row">
            <div className="col">
            <label className="form-control_input">Deja consulté</label>
            </div>
            <div className="col">
            <select className="form-control">
            <option selected>Couleur attribuée</option>
              <option className="redd">  Rouge </option>
              <option className="orangee"> Orange</option>
              <option className="greenn" >vert</option>
              <option className="bleuu" >bleu</option>
            </select>
             </div>
          </div>
          <button className="bg-primary_mini pt-5 pb-5 text-center rounded">Enregistrer</button>
       </form>
      </div>
      
    </div>
  );
  const history = useHistory();
  const Logout=()=>{
    localStorage.setItem('user','loggout');
   history.push('/');
  }


  const [dt, setDt] = useState(new Date().toLocaleString());
//this is a test
  const date= new Date('2021-09-09 11:00:00');

useEffect(() => {
    let secTimer = setInterval( () => {
      setDt(((date- Date.now())/(60000)).toLocaleString());
    },1000)

    return () => clearInterval(secTimer);
}, []);
 
  
  return (
    
    <div className={classes.root}>
     
      <Nav_bar/>
      
      <main className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq_header-title">
                  <h4 className="card-title"><b>Consultation</b></h4>
                </div>
                <div className="iq-card-header-toolbar d-flex align-items-center">
                 <a onClick={handleOpen}>
                
                 <BorderColorIcon/>
               
                 </a>
                </div>
              </div>
              <div className="iq-card-body">
                <ul className="m-0 p-0 job-classification">
                  <li><HdrStrongIcon style={{ color: "pink" }}/>1ere consultation</li>
                  <li><HdrStrongIcon style={{ color: "orange" }}/>Controle</li>
                  <li><HdrStrongIcon style={{ color: "grey" }}/>Deja consulté</li>
                </ul>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq_header-title">
                  <h4 className="card-title"><b>Prochaine Consultation</b></h4>
                </div>
                <div className="iq-card-header-toolbar d-flex align-items-center">
                 <a>
                 <DuoIcon/>
                 </a>
                </div>
              </div>
              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
              <div className="iq-card-body">
                <ul className="m-0 p-0 job-classification">
                  <li> Type : Consultation video </li>
                  <li> Mme :  XY </li>
                  <Link to="/Medical_file"> <li className="color_important"> Dossier medicale</li></Link>
                 
                  <li> Restant :{parseInt(dt)} min</li>
                  
                 <li className="row"><div className="col-md-66 space"><Modal_hour/></div>
                 <div className="col-lg-30 space_right"><button type="submit" className="btn iq-bg-primary "> <VideoCallIcon  fontSize="small"/>Demarer</button> </div></li>
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