import React , { Component ,useState} from 'react';
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
import { Link } from "react-router-dom";
import DuoIcon from '@material-ui/icons/Duo';
import HdrStrongIcon from '@material-ui/icons/HdrStrong';
import green from "@material-ui/core/colors/green";
import orange from "@material-ui/core/colors/orange";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Modal from '@material-ui/core/Modal';
import Nav_bar from './Nav_bar';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

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

   const [value,setValue]= useState("");
  const[slider,setSlider]=useState("")

   const Handlechanges=()=>{
     setSlider()
     console.log(slider);
    setValue(slider+"€/Mounth");
   }



 return (
    <div className={classes.root}>
       {
     (localStorage.getItem('user')=='logged')?
     (<><Nav_bar/></>):
     (<><CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.color_white}>
            OPEN-TOUBIB
          </Typography>
        </Toolbar>
      </AppBar></>)
     }

      <main className=" ">
      <div className="">
<div className="">
  <div className=" col-md-1">
      <div className="iq-card line-height-4 background_support text-white">

      </div>
  </div>
  <div className=" col-md-6 ">
    <div className="row_column">
      <div className="col-md-6 ">

        <div className="iq-card-body w_card  border text-center rounded">

             <h2 className="mb-4 display-3 font-weight-bolder text-gris or" >
             solution solidaire
             </h2>
            <ul className="list-unstyled  mb-0">

            <li><p className="gris"> Supportez ce projet !</p></li>
              <li><p><b>creer votre propre communoté fermé pour un meilleur
                service</b>.</p>

              </li> <li> <p className="gris">
Pour assurer une décentralisation totale du côté des patients, nous avons besoin de votre aide !
Anisi vous contribuerez dans notre mouvement social et solidaire. </p> </li>
 <li> <p >Vous pourriez faire des dons mensuels, ou mieux encore acheter un nœud distant propre à vous pour l’utiliser afin de se connecter au réseau des médecins au lieu de votre propre machine.
Votre soutien permettra aussi de décentraliser l’application du côté des patients afin de leur fournir des nœuds qui joueront le rôle de passerelle. </p>
              </li>

              <li><p className="gris">100% sécurisé et décentralisé dons vos donnée seront stoquées localement sur vos pc  ,

Nous avons besoin de votre aide pour assurer des noeuds
qui joueront le rôle de passerelle/gateway
                </p>
              </li>
             <li><p className="gris">Faites le choix de nous encourager  .</p></li>
          </ul>
          <div className="box center_e_support">
         <div className="row">

           <div className="col-md-25-support">
           <input type="number" className="input_support" />
           </div>
           <div className="col-md-25-spp">
           <p className="gris m-tp" >Euro/mounth</p>
           </div>

         </div>
         <button type="button" className="btn btn-primary center_e right_btn">Don</button>


       </div>
               <br/>
              <p  className="mb-4 display-3 font-weight-bolder text-gris or center_e_support" style={{float:'right'}}>Merci !</p>
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
