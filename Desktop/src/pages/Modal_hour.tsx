import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
     
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);
function Modal_hour() {
    const classes = useStyles();
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
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title"className="h_txt" >Retard :</h2>
      <div id="simple-modal-description">
       <form >
          <div className="form-row">
            <div className="col">
            <label className="form-control_input">Prevenir ce patient d'un retard de :</label>
            </div>
            <div className="col">
            <select className="form-control">
              <option selected>5min</option>
              <option > 10min </option>
              <option > 15min</option>
              <option >20min</option>
              
              
            </select>
            <button className="bg-primary_mini pt-5 pb-5 text-center rounded left">Prevenir</button>
             </div>
          </div>
         
      
          </form>
          </div>
        
      </div>
    );
  
    return (
        <div>
     
      <button type="submit" onClick={handleOpen} className="btn iq-bg-danger "> <NotificationImportantIcon fontSize="small"/>Prevenir d'un retard</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
    )
}

export default Modal_hour
