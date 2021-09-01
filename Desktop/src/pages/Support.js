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
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Modal from '@material-ui/core/Modal';
import CheckIcon from '@material-ui/icons/Check';
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


export default function Support() {
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
  const [isMenuOpened, setisMenuOpened] = React.useState(false);
 
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
              <option ><FiberManualRecordIcon style={{ color: "red" }}/> rouge</option>
              <option > vert</option>
              <option >orange</option>
              <option >gris</option>
              
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
              <option>col1</option>
              <option>col2</option>
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
              <option>col1</option>
              <option>col2</option>
            </select>
             </div>
          </div>
          <button className="bg-primary_mini pt-5 pb-5 text-center rounded">submit</button>
       </form>
      </div>
      
    </div>
  );


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
      <div className="container-fluid">
<div className="row">
  <div className=" col-md-6 ">
      <div className="iq-card  bg-primary text-white">
        <div className="iq-card-body border text-center rounded">
            <span className="font-size-16 text-uppercase">Support</span>
             <h2 className="mb-4 display-3 font-weight-bolder text-white">
              aidezzz nouuuuussss 
             </h2>
            <ul className="list-unstyled line-height-4 mb-0">
             <li>iwaaa</li>
              <li>blablabla</li>
             <li>decentralisé blablaa</li> 
          </ul>
          
       </div>
      </div>
  </div>
  <div className=" col-md-6 ">
      <div className="iq-card ">
        <div className="iq-card-body ">
           <div class="table-responsive">
               <table class="table">
                <thead className="thead">
                    <tr className="tr">
                    <th className="text-center th"></th>  
                      
                      <th className="text-center th">fct1</th>  
                      <th className="text-center th">fct2</th>
                      <th className="text-center th">fct3</th>    
                    </tr>
                 </thead>
                <tbody className="tbody">
                   <tr>
                       <th className="text center">
                           prog</th>
                      <th className="text center"><CheckIcon/></th>
                      <th className="text center"><CheckIcon/></th>
                      <th className="text center"><CheckIcon/></th>
                  </tr>
                  <tr>
                       <th className="text center">
                          agenda</th>
                      <th className="text center"></th>
                      <th className="text center"><CheckIcon/></th>
                      <th className="text center"><CheckIcon/></th>
                  </tr>
                  <tr>
                       <th className="text center">
                          </th>
                      <th className="text center">
                          <h2> 12dh <div className="small">/per month</div></h2>
                          <button type="button"className="btn btn-primary mt-3">pr</button>
                      </th>
                      <th className="text center">
                          <h2> 12dh <div className="small">/per month</div></h2>
                          <button type="button"className="btn btn-primary mt-3">pr</button>
                      </th>
                      <th className="text center">
                          <h2> 12dh <div className="small">/per month</div></h2>
                          <button type="button"className="btn btn-primary mt-3">pr</button>
                      </th> </tr>
                </tbody>
               </table>
           </div> 
         </div>
      </div>
  </div>
</div>

</div>
      </main>
    </div>
  );
}
