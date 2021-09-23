import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';

const model = require('../db');

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
    background:'#089bab',
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
  const history = useHistory();



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
    //if(secretKey!=null)
    //model.closeDB(secretKey);
  //else model.closeDB(secretKeyLogin);
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
              <ExitToAppIcon onClick={Logout} />
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
        <div>
          <div className="scroll-content">
             <nav className="iq-sidebar-menu">
               <ul className="iq-menu">
        <br/>

          <li className="iq-menu-title">
          <Link to="/profile">   <span className="left_sidebar bl">&nbsp;<AccountBoxIcon fontSize="small"/> Profil</span>
          </Link>
          </li>
          <br/>
          <li className="iq-menu-title">
           <Link to="/App_bar"><span className="bl">&nbsp;<DateRangeIcon  fontSize="small"/> Calendrier</span>
            </Link>
          </li>
          <br/>

          <li className="iq-menu-title">
          <Link to="/Signature"><span className="bl">&nbsp;<CreateIcon  fontSize="small"/> Signatures</span>
          </Link>
          </li>
          <li className="iq-menu-title">
          <Link to="/Support"><span className="bl">&nbsp;<NotificationsActiveIcon  fontSize="small"/> Support</span>
          </Link>
          </li>



               </ul>
             </nav>
          </div>
        </div>


      </Drawer>
      </div>
      );
}
