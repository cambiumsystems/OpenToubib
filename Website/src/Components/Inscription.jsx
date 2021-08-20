import React, { Component } from 'react'
import{FontAwsomeIcon} from "@fortawesome/react-fontawesome"
import {Link }from 'react-router-dom'
import MuiAlert from "@material-ui/lab/Alert";
import PhoneIcon from '@material-ui/icons/Phone';

function Alert(props) {
    return <MuiAlert elevation={6} 
                     variant="filled" {...props} />;
  }
class Inscription extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName:"",
            adresse:"",
            email:"",
            date_naissance:"",
            password: "",
            qstpassword:"",
            repqst:""


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    qstpasswordhandler = (event) => {
        this.setState({
            qstpassword: event.target.value
        })
    }
    repqsthandler = (event) => {
        this.setState({
            repqst: event.target.value
        })
    }
    date_naissancehandler = (event) => {
        this.setState({
            date_naissance: event.target.value
        })
    }
    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    adressehandler = (event) => {
        this.setState({
            adresse: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
         email: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            adresse: "",
            date_naissance:"",
            repqst:"",
            qstpassword:"",
            email:""
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div className="colorr2">
            <div className="container_form">

                <form onSubmit={this.handleSubmit} >
                    <h1 className="titre_form">Nouveau sur OPEN-Toubib ? </h1>
                    <div class="grid-container">
                   <input type="text" className=" column" value={this.state.firstName} onChange={this.firsthandler} placeholder="Nom..." /> 
                   
                    <input type="text" className=" column" value={this.state.lastName} onChange={this.lasthandler} placeholder="Prenom..." />
                    </div>
                    <input type="text" className="input_pwd" value={this.state.adresse} onChange={this.adressehandler} placeholder="Adresse..." /><br />
                    
                    <input type="text" className="input_pwd" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /><br />
                  
                     <div class="grid-container">
                     <input type="date" className="column" value={this.state.date_naissance} onChange={this.date_naissancehandler} placeholder=" Date de naissance..." /><br />
                   <input type="password" className=" column" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." />
                    </div>
                    <div class="grid-container">
                   <select  className=" column" value={this.state.qstpassword} onChange={this.qstpasswordhandler} placeholder="Qst password" >
                       <option>qst1</option>
                       <option>qst2</option>
                   </select>
                    <input type="text" className=" column" value={this.state.repqst} onChange={this.repqsthandle} placeholder="Reponce..." />
                    </div>
                    <Alert severity="info" className ="alert">Cette qst est votre seul moyen de recuperer votre mdp </Alert>
            
                    <input type="submit" className="input_submit"value="S'inscrire" />
                   
                    
                    
                </form>
   
            </div>
           
            </div>
        )
    }
}

export default Inscription
