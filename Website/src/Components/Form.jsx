import React, { Component } from 'react'
import{FontAwsomeIcon} from "@fortawesome/react-fontawesome"
import {Link }from 'react-router-dom'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
          
            password: ""


        }
        this.handleSubmit=this.handleSubmit.bind(this)
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

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            gender: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div >
            <div className="container_form">

                <form onSubmit={this.handleSubmit} >
                    <h1 className="titre_form">Bienvenue chez OPEN-TOUBIB</h1>
                   <input type="text" className="input_form" value={this.state.firstName} onChange={this.firsthandler} placeholder="Email..." /><br />
                    <input type="password" className="input_pwd" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                   
  
                   
                    <input type="submit" className="input_submit"value="Se connecter" />
                   
                    
                    
                </form>
                <p><Link to="/Inscription"><p className="p_form">s'inscrire !</p></Link></p>
                
            </div>
           
            </div>
        )
    }
}

export default Form