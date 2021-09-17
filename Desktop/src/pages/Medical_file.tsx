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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Image} from "semantic-ui-react";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import DescriptionIcon from '@material-ui/icons/Description';
import TextField from '@material-ui/core/TextField';
import Modal_prescription from './Modal_prescription'

const drawerWidth = 240;

const useStyless = makeStyles((theme) => ({
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



const useStylesss = makeStyles({
  table: {
    minWidth: 300,
    height:300,
  },
});
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

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Sinusite', '20/01/2016', 'Details' ),
  createData('Scoliose', '08/09/2018', 'Details' ),
  createData('Artrose', '01/11/2020', 'Details' ),

];


export default function Medical_file() {




  const classesss = useStylesss();
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
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <Nav_bar/>

    <div className="container-fluid_s iq-card-w">
          <div className="row">
           <div className="col-lg-4 row m-0 p-0">
             <div className="col-sm-12">
               <div className="iq-card iq-card-block
               iq-card-stretch iq-card-height
               iq-user-profile-block" >
                   <div className="iq-card-body">

                       <div className="user-details-block">
                        <div className="text-center  top">
                               <h4 className=""><b>Mme XY</b></h4>
                              <p>23ans,Rabat</p>
                              <ul className="
                           doctoe-sedual d-flex align-items-center
                           justify-content-between
                           p-0 mt-4 mb-0
                           ">
                             <li className="text-center">
                               <h6 className="text-primary">Email</h6>
                             <h3>X@gmail.com</h3>
                             </li>
                             <li className="text-center">
                                 <h6 className="text-primary">Tel</h6>
                                 <h3 className="text-warning">+33000000</h3>
                             </li>
                           </ul>
                           </div>

                       </div>
                   </div>
              </div>

           </div>




           <div className="col-lg-8 ">
            <div className="iq-card iq-card-block iq-card-stretch
            iq-card-height">
              <div className="iq-card-body pb-0">
               <div className="row">
                <div className="col-sm-12">
                    <div className="iq-card">
                        <div className="iq-card-body  rounded pt-2 pb-2 pr-2">
                         <div className="d-flex align-items-center rounded  orange_back justify-content-between">
                             <p className="mb-0 ">&nbsp; La Consultation sera dans --:-- </p>
                             <div className="rounded iq-card-icon ">
                               <div className="img-fluid"><DuoIcon/></div>
                             </div>
                         </div>
                        </div>
                    </div>

                    <div className="iq-card ">


                        <div className="iq-card-body pl-0 pr-0 pb-0 espace_container">

                        <div className="row">
                          <div className="col-md-40">
                             <div className="col-md-60">
                               <div className="row">
                                 <div className="col-md-6">
                                 <TextField  label="1.70m" defaultValue=""/>

                                 </div>
                                 <div className="col-md-6 ">
                                 <TextField  label="63kg" defaultValue=""/>

                                 </div>
                                 </div>
                                 </div>
                                 <br/>



                             <div className="col-md-22 ">
                                 <div className="training-block d-flex
                             align-items-center">
                                  <div className="rounded-circle iq-card-icon iq-bg-primary">
                                      <div className="img-fluid"><DescriptionIcon/></div>
                                  </div>
                                  <div className="ml-3">
                                  <h5>Diabete</h5>
                                  <p className="mb-0 gris">0.8g</p>
                                   </div>
                               </div>

                             </div>
                             <div className="col-md-22 ">
                                 <div className="training-block d-flex
                             align-items-center">
                                  <div className="rounded-circle iq-card-icon iq-bg-primary">
                                      <div className="img-fluid"><DescriptionIcon/></div>
                                  </div>
                                  <div className="ml-3">
                                  <h5>Alergies</h5>
                                  <p className="mb-0 gris">details></p>
                                  </div>
                               </div>

                             </div>


                             <div className="col-md-22 "><div className="training-block d-flex
                             align-items-center">
                                  <div className="rounded-circle iq-card-icon iq-bg-primary">
                                      <div className="img-fluid"><DescriptionIcon/></div>
                                  </div>
                                  <div className="ml-3">
                                  <h5> Maladie chroniques</h5>
                                  <p className="mb-0 gris">details></p>
                                  </div>
                               </div>

                               </div>
                               <div className="col-md-22 "><div className="training-block d-flex
                             align-items-center">
                                  <div className="rounded-circle iq-card-icon iq-bg-primary">
                                      <div className="img-fluid"><DescriptionIcon/></div>
                                  </div>
                                  <div className="ml-3">
                                  <h5> Operations</h5>
                                  <p className="mb-0 gris">details></p>
                                  </div>
                               </div>

                               </div>



                            </div>

                          <div className="col-md-60">

                          <div className="container_file">
                            <input type="file" className="upload-box" />
                          </div>
                          <br/>
                          <Modal_prescription/>
                          <br/>
                         
                         <ul className="
                           doctoe-seduall d-flex
                           p-0 mt-4 mb-0
                           ">
                             <li className="text-center">
                             <TableContainer component={Paper}>
            <Table className={classesss.table} aria-label="simple table">
            <TableHead>
            <TableRow>
            <TableCell>Patologies</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Documents</TableCell>

            </TableRow>
            </TableHead>
           <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                             </li>


                           </ul>

                             </div>

                        </div>


                        </div>
                    </div>

                </div>
                <div className="col-sm-12">


                       <div className="user-details-block">
                           <div className="text-center mt-3">

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
