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
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Modal from '@material-ui/core/Modal';

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
  color_white: {
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
      <h2 id="simple-modal-title" className="h_txt">
        Code couleurs
      </h2>
      <div id="simple-modal-description">
        <form>
          <div className="form-row">
            <div className="col">
              <label className="form-control_input">1ere consultation</label>
            </div>
            <div className="col">
              <select className="form-control">
                <option selected>Couleur attribuée</option>
                <option>
                  <FiberManualRecordIcon style={{ color: 'red' }} /> rouge
                </option>
                <option> vert</option>
                <option>orange</option>
                <option>gris</option>
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
          <button className="bg-primary_mini pt-5 pb-5 text-center rounded">
            submit
          </button>
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
            {['Profil', 'Calendrier', 'Parametre', 'Statistique'].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <AccountBoxIcon /> : <DateRangeIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
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
                  <a onClick={handleOpen}>
                    <BorderColorIcon />
                  </a>
                </div>
              </div>
              <div className="iq-card-body">
                <ul className="m-0 p-0 job-classification">
                  <li>
                    <HdrStrongIcon style={{ color: 'green' }} />
                    1ere consultation
                  </li>
                  <li>
                    <HdrStrongIcon style={{ color: 'red' }} />
                    Controle
                  </li>
                  <li>
                    <HdrStrongIcon />
                    Deja consulté
                  </li>
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
                    <DuoIcon />
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
                  <li> Bla bla</li>
                  <li>smth</li>
                  <li> blaablaa</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Agenda />
          </div>
        </div>
      </main>
    </div>
  );
}
