import React , { Component } from 'react';
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


export default function Nav_bar() {
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

  const Logout=()=>{
    localStorage.setItem('user','loggout');
   history.push('/');
  }
  
  return (
    
    <div className={classes.root}>
     
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit"
              className={classes.flex}>
            OPEN-TOUBIB
          </Typography>
          <IconButton
              className={classes.menuButton}
              
              color="inherit"
              aria-label="Menu"
              
            >
              <AccountCircle onClick={Logout} />
            </IconButton>
          
           
        </Toolbar>
        
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        
        <Toolbar />
        <br/>
        <li className="left"><LongMenu/></li>
        <br/>
        <div className="">
          <li className="">
            
      
          <Link to="/profile">   <span className="left_sidebar">&nbsp;<AccountBoxIcon fontSize="small"/> Profil</span>
          </Link>
          </li>
          <br/>
          <li className="">
           <Link to="/App_bar"><span>&nbsp;<DateRangeIcon  fontSize="small"/> Calendrier</span>
            </Link>
          </li>
          <br/>
          <li className="iq-menu-title">
              <Link to="/Statistique"> <p>&nbsp;<ShowChartIcon   fontSize="small"/> Statistique</p>
              </Link>
          </li>
          <br/>
          <li className="iq-menu-title">
          <Link to="/Support"><span>&nbsp;<NotificationsActiveIcon  fontSize="small"/> Support</span>
          </Link>
          </li>
          

        </div>
         
        
      </Drawer>
      </div>
      );
}