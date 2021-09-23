import React , { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import doctor_img from '../images/doctor_img.png'
import { Link } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import Nav_bar from './Nav_bar';
const drawerWidth = 240;
import { secretKey } from './RegisterForm';
import { secretKeyLogin } from '../App.tsx';
const model = require('../db');

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
  const [doctor, setDoctor]=useState(undefined);

useEffect(() => {
  const fetchDoctor = ()=>{
    if(secretKey!=null)
    model.getDoctor(secretKey, setDoctor);
    else model.getDoctor(secretKeyLogin, setDoctor);
}
  fetchDoctor();
}, [])

  // const inf= model.getDoctor(secretKey) ;

  const classess = useStyless();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

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



  if(doctor==undefined)return <div>Loading</div>
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
              <h4>{doctor.firstName}</h4>
              <p></p>
              <form className="form-row center_element">
                <div className="form-group col-sm-6">
                  <label>First name</label>
                  <input type="text" className="form-control_P"id="fname" value={doctor.firstName} readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label>Last name</label>
                  <input type="text" className="form-control_P"id="lname" value={doctor.lastName} readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label>Email</label>
                  <input type="text" className="form-control_P"id="lname" value={doctor.email} readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label>City</label>
                  <input type="text" className="form-control_P"id="lname" value={doctor.city} readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label className="d-block">Gender:</label>

                  <Radio
        checked={doctor.gender === 'Male'}
        onChange={handleChange}
        value="Male"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'Male' }}
      />
      <label className="custom-control-label">Male</label>
      <Radio
        checked={doctor.gender === 'Female'}
        onChange={handleChange}
        value="Female"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'Female' }}
      />
      <label className="custom-control-label">Female</label>
                </div>
                <div className="form-group col-sm-6">
                  <label>Date of birth</label>
                  <input type="Date" className="form-control_P"id="lname" value={doctor.dateOfBirth} readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label>Country</label>
                  <input type="text" className="form-control_P"id="lname" value={doctor.country} readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label>State</label>
                  <input type="text" className="form-control_P"id="lname" value={doctor.region} readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label>Specialité</label>
                  <input type="text" className="form-control_P"id="lname" value={doctor.speciality} readOnly/>
                </div>
                <div className="form-group col-sm-6">
                  <label>Full Address</label>
                  <textarea className="form-control_P"id="lname" value={doctor.address} readOnly></textarea>
                </div>
                <div className="form-group center_element">
                <button type="submit" className="btn btn-primary btn_width mr-2">Edit</button>
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
