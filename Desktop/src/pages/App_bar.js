import React from 'react';
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
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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

export default function App_bar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.color_white}>
            OPEN-TOUBIB
          </Typography>
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
        <div className={classes.drawerContainer}>
          <List>
            {['Profil', 'Calendrier', 'Parametre', 'Statistique'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <AccountBoxIcon /> : <DateRangeIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          
         
        </div>
      </Drawer>
      <main className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq_header-title">
                  <h4 className="card-title">Consultation</h4>
                </div>
                <div className="iq-card-header-toolbar d-flex align-items-center">
                 <a>
                   <BorderColorIcon/>
                 </a>
                </div>
              </div>
              <div className="iq-card-body">
                <ul className="m-0 p-0 job-classification">
                  <li><HdrStrongIcon style={{ color: "green" }}/>1ere consultation</li>
                  <li><HdrStrongIcon style={{ color: "red" }}/>Controle</li>
                  <li><HdrStrongIcon/>Deja consulté</li>
                </ul>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq_header-title">
                  <h4 className="card-title">Prochaine Consultation</h4>
                </div>
                <div className="iq-card-header-toolbar d-flex align-items-center">
                 <a>
                 <DuoIcon/>
                 </a>
                </div>
              </div>
              <div className="iq-card-body">
                <ul className="m-0 p-0 job-classification">
                  <li> Bla bla</li>
                  <li> blabla</li>
                  <li> blaablaa</li>
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