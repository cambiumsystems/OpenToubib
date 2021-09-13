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
import doctor_img from '../images/doctor_img.png'
import { Link } from "react-router-dom";
import { Height } from "@material-ui/icons";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import LongMenu from './LongMenu';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

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
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const body = (
    <div style={modalStyle} className={classess.paper}>
      <h2 id="simple-modal-title"className="h_txt" >Code couleurs</h2>
      <div id="simple-modal-description">
       <form >
          <div className="form-row">
            <div className="col">
            <label className="form-control">1ere consultation</label>
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
            <label className="form-control">Controle</label>
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
            <label className="form-control">Deja consulté</label>
            </div>
            <div className="col">
            <select className="form-control">
              <option selected>Couleur attribuée</option>
              <option>col1</option>
              <option>col2</option>
            </select>
             </div>
          </div>
          <button className="bg-primary pt-5 pb-5 text-center rounded">submit</button>
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
        <br/>
        <li className="left"><LongMenu/></li>
        <br/>
        <div className="">
          <li className="">


          <Link to="/profile"><span className="left_sidebar">&nbsp;<AccountBoxIcon fontSize="small"/> Profil</span>
          </Link>
          </li>
          <br/>
          <li className="">
           <Link to="/App_bar"><span>&nbsp;<DateRangeIcon  fontSize="small"/> Calendrier</span>
            </Link>
          </li>
          <br/>
          <li className="iq-menu-title">
              <p>&nbsp;<ShowChartIcon   fontSize="small"/> Statistique</p>


          </li>
          <br/>
          <li className="iq-menu-title">
          <Link to="/Support"><span>&nbsp;<NotificationsActiveIcon  fontSize="small"/> Support</span>
         </Link>
          </li>


        </div>


      </Drawer>
    <div className="container-fluid">
          <div className="row">
           <div className="col-lg-4 row m-0 p-0">
             <div className="col-sm-12">
               <div className="iq-card iq-card-block
               iq-card-stretch iq-card-height
               iq-user-profile-block" >
                   <div className="iq-card-body">
                       <div className="user-details-block">
                           <div className="text-center mt-3">
                               <h4><b>Mme XY</b></h4>
                              <p>23ans,Rabat</p>
                           </div>
                           <ul className="
                           doctoe-sedual d-flex align-items-center
                           justify-content-between
                           p-0 mt-4 mb-0
                           ">
                             <li className="text-center">
                               <h6 className="text-primary">Taille</h6>
                             <h3>1.71 <span>m</span></h3>
                             </li>
                             <li className="text-center">
                                 <h6 className="text-primary">Poids</h6>
                                 <h3 className="text-warning">62<span>kg</span></h3>
                             </li>
                           </ul>
                       </div>
                   </div>
              </div>

           </div>




           <div className="col-lg-8">
            <div className="iq-card iq-card-block iq-card-stretch
            iq-card-height">
              <div className="iq-card-body pb-0">
               <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-body bg-primarye rounded pt-2 pb-2 pr-2">
                         <div className="d-flex align-items-center justify-content-between">
                             <p className="mb-0"> La Consultation sera dans --:-- </p>
                             <div className="rounded iq-card-icon ">
                               <div className="img-fluid"><DuoIcon/></div>
                             </div>
                         </div>
                        </div>
                    </div>
                    <div className="iq-card">
                        <div className="iq-header-title">
                            <h4 className="card-title text-primary">Mode de vie</h4>
                        </div>
                        <div className="iq-card-body pl-0 pr-0 pb-0 ">
                            <div className="row ">
                             <div className="col-md-4">
                                <div className="training-block d-flex
                             align-items-center">
                                  <div className="rounded-circle iq-card-icon iq-bg-primary">
                                      <div className="img-fluid">icon</div>
                                  </div>
                                  <div className="ml-3">
                                  <h5> Diabette</h5>
                                  <p className="mb-0">1.05g</p>
                                  </div>
                               </div>
                             </div>
                             <div className="col-md-4">
                                 <div className="training-block d-flex
                             align-items-center">
                                  <div className="rounded-circle iq-card-icon iq-bg-primary">
                                      <div className="img-fluid">icon</div>
                                  </div>
                                  <div className="ml-3">
                                  <h5> Diabette</h5>
                                  <p className="mb-0">1.05g</p>
                                  </div>
                               </div>
                             </div>
                             <div className="col-md-4"><div className="training-block d-flex
                             align-items-center">
                                  <div className="rounded-circle iq-card-icon iq-bg-primary">
                                      <div className="img-fluid">icon</div>
                                  </div>
                                  <div className="ml-3">
                                  <h5> Diabette</h5>
                                  <p className="mb-0">1.05g</p>
                                  </div>
                               </div></div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-88">
                    <div className="iq-card">
                        <div className="
                        iq-card-headerr d-flex justify-content-between p-0 bg-white
                        ">
                         <div className="iq-heder-title">
                             <h4 className="
                             card-title text-primary
                             "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Derniere consultation</h4>
                         </div>
                        </div>
                        <div className="iq-card-body p-0">
                           <table className="table mb-0 table-borderless table-box-shadow">
                             <thead>
                                 <tr>
                                     <th>Consultation</th>
                                     <th>Date</th>
                                 </tr>
                             </thead>
                              <tbody>
                                <tr>
                                   <th>pff </th>
                                   <th>prr</th></tr>
                              </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-lg-44">
                    <div className="iq-card mb-0">
                       <div className="iq-card-headerr d-flex justify-content-between p-0 bg-white">
                         <div className="iq-card-body p-0">

                         </div>
                       </div>
                    </div>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-6"></div>

               </div>
              </div>
            </div>
           </div>

          </div>
      </div>
      </div>
    </div>
  );
}
