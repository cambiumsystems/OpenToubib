import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddIcon from '@material-ui/icons/Add';
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
const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
          to='#'
          onClick={(e) => {
              window.location = mailto;
              e.preventDefault();
          }}
      >
          {label}
      </Link>
  );
};

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
function Modal_prescription() {
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
    var Increment=0;
    const [presciption, setpresciptions] = useState([]);
    var saisi= new Array();
    const add_input=()=>{
    
        var div = document.getElementById("champs");
        Increment = Increment + 1;
        var textArea = document.createElement("input");
        textArea.type = "text";
        textArea.id= "idTextarea"+Increment;  
        textArea.placeholder="a prescrire";
        textArea.onchange=function(e){setpresciptions(presciption.concat(e.target.value))
        };
        textArea.className="form-control  padding_input";
        document.getElementById("champs").appendChild(textArea);
        console.log(presciption);

    }

    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title"className="h_txt" >Prescription :</h2>
      <div id="simple-modal-description">
       <form >
          <div className="form-row">
            
            <div className="col">
            <input type="text" id="ajout" name="ajout" size="15" placeholder="Pathologie" className="padding_input form-control"/>
            <input type="text" id="ajout" name="ajout" size="15" placeholder="a prescrire" className="padding_input form-control"/>
            <div id="champs"></div>
            <button type="button" className="f-right text-gris"  onClick={add_input} name="add_button" id="add_button" > <AddIcon /></button>
<br/>
              <button className="bg-primary_mini pt-5 pb-5 text-center rounded_m left" >
           Enregistrer
          </button>
          <button className="bg-primary_mini pt-5 pb-5 text-center rounded_m left" >
           Imprimer
          </button>
    
             </div>
          </div>


          </form>
          </div>

      </div>
    );

    return (
        <div>

      <button type="submit" onClick={handleOpen} > Prescription</button>
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

export default Modal_prescription
