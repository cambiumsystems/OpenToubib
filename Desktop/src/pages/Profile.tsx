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
import Nav_bar from './Nav_bar';
const drawerWidth = 240;
const crypto = require('crypto');
const knex = require('../database');

const algorithm = 'aes-256-cbc';

// generate 16 bytes of random data
const initVector = Buffer.alloc(16, 0);

// secret key generate 32 bytes of random data
const Securitykey = crypto.scryptSync('bncaskdbvasbvlaslslasfhjazerfgty', 'GfG', 32)
const Decrypt = (data)=>{
  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

let decryptedData = decipher.update(data, "hex", "utf-8");

decryptedData += decipher.final("utf8");
return decryptedData;
}
let inf=[]
knex
.select('*')
.from('doctor')
.then((values) => {inf={
  firstName: Decrypt( values[0].firstName),
      lastName: Decrypt( values[0].lastName),
      password: Decrypt( values[0].password),
      email: Decrypt( values[0].email),
      gender: Decrypt( values[0].gender),
      dateOfBirth: Decrypt(values[0].dateOfBirth),
      city: Decrypt(values[0].city),
      region: Decrypt(values[0].region),
      country: Decrypt(values[0].country),
      address: Decrypt(values[0].address),
      speciality: Decrypt(values[0].speciality),
} ;
  console.log( "voila ",inf);})

.catch((err) => console.log(err));



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


export default function Profile() {
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
      <Nav_bar/>
         
         
      <main className="container-fluid">
      <div className="iq-card">
        <div className="iq-card-body pl-0 pr-0 pt-0">
          <div className="doctor-details-block">
            <div className="doc-profile-bg bg-primary" ></div>
            <div className="doctor-profile text-center">
              <img src={doctor_img}className="avatar-130 img-fluid img_size"/>
            </div>
            <div className="text-center mt-3 pl-3 pr-3">
              <h4>{inf.firstName}</h4>
              <p></p>
              <form className="form-row center_element">
                <div className="form-group col-sm-6">
                  <label>First name</label>
                  <input type="text" className="form-control_P"id="fname" value={inf.firstName} readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label>Last name</label>
                  <input type="text" className="form-control_P"id="lname" value={inf.lastName} readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label>Email</label>
                  <input type="text" className="form-control_P"id="lname" value={inf.email} readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label>City</label>
                  <input type="text" className="form-control_P"id="lname" value={inf.city} readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label className="d-block">Gender:</label>

                  <Radio
        checked={selectedValue === 'Male'}
        onChange={handleChange}
        value="Male"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'Male' }}
      />
      <label className="custom-control-label">Male</label>
      <Radio
        checked={selectedValue === 'Female'}
        onChange={handleChange}
        value="Female"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'Female' }}
      />
      <label className="custom-control-label">Female</label>
                </div>
                <div className="form-group col-sm-6">
                  <label>Date of birth</label>
                  <input type="Date" className="form-control_P"id="lname" value={inf.dateOfBirth} readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label>Country</label>
                  <input type="text" className="form-control_P"id="lname" value="--" readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label>State</label>
                  <input type="text" className="form-control_P"id="lname" value="--" readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label>Specialité</label>
                  <input type="text" className="form-control_P"id="lname" value={inf.speciality} readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label>Full Address</label>
                  <textarea className="form-control_P"id="lname" value={inf.address} readOnly></textarea>
                </div>
                <div className="form-group center_element">
                <button type="submit" className="btn btn-primary btn_width mr-2">Modifier</button>
                </div>
              </form>
            </div>
          </div>
        </div>
         </div>
        <Link to="/">Go back to home</Link>
        <div>

        </div>
      </main>
    </div>
  );
}
