import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import icon from '../assets/logo.png';
import './App.global.css';
import Profile from './pages/Profile';
import Agenda from './pages/Agenda';
import Login from './pages/Login';
import App_bar from './pages/App_bar';
import Sign_in from './pages/Sign_in';
import Support from './pages/Support';
import Medical_file from './pages/Medical_file';
import Menuappbar from './pages/Menuappbar';
import Statistique from "./pages/Statistique";
import LoginForm from './pages/LoginForm';
import { Redirect } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

var sqlite3 = require('@journeyapps/sqlcipher').verbose();
import {shell} from 'electron';

// const knex = require('database');



const useStyles = makeStyles({
  root: {
    width: '350px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '14',
  },
  pos: {
    marginBottom: '12',
  },
});


let user=[];
var db = new sqlite3.Database('opentoubib1.db');
db.serialize(function () {
  // This is the default, but it is good to specify explicitly:
  db.run('PRAGMA cipher_compatibility = 4');

  // To open a database created with SQLCipher 3.x, use this:
  // db.run("PRAGMA cipher_compatibility = 3");

  db.run(`PRAGMA key = 'Seventeen13'`);


  db.each("SELECT email, password FROM doctor", function(err, row) {
      console.log('APP TSX USER', row);
      user=row;
  });
});
// knex
// .select('*')
// .from('doctor')
// .then((values) => {user={
//      password: Decrypt( values[0].password),
//       email: Decrypt( values[0].email)

// } ;
//   console.log( "voila ",user);})

// .catch((err) => console.log(err));





const Hello = () => {

  const[error,setError]=useState("");
  const[User,setUser]=useState("");
  const Loginn= details =>{
  console.log(details);
  if(details.email==user.email && details.password==user.password){
    console.log("logged in")
    setUser({
      email:details.email
   });
   localStorage.setItem('user','logged');

  }else{
    console.log("details do not match");
    setError("details do not match");
  }
  }
  const Logout=()=>{
    console.log("Logout");
    setUser({email:""});
    localStorage.setItem('user','loggout');
  }
  const classes = useStyles();
  const [dt, setDt] = useState(new Date().toLocaleString());
  const date= new Date('2021-09-09 00:37:00');

useEffect(() => {
    let secTimer = setInterval( () => {
      setDt(((date- Date.now())/(60000)).toLocaleString());
    },1000)

    return () => clearInterval(secTimer);
}, []);
  return (
    <div>

      {/* <p className="preference">Preferences</p> */}
      <div className="Hello">

         <div>

        <Link to="/Support">
          <span role="img" aria-label="books"
            style={{ position: 'absolute', bottom: '25px', right: '45%' }} className=" gris">
            Support this project!
          </span>
        </Link>
       <div>
       {
          ( localStorage.getItem('user')=="logged")?(
            <div>

               <Redirect to="/App_bar" />
               {/* <button onClick={Logout}>Logout</button> */}
            </div>
          )
          : (( localStorage.getItem('user')=="loggout")?(

             <LoginForm Loginn={Loginn} error={error}>Login</LoginForm>
          )
          :(
            <div>
            <div className="container-fluid">
             <div className="row justify-content-center">
              <div className="col-sm-8 text-center">
                <div className="iq-card-info ">
                <img width="200px" alt="icon" src={icon} />
                <h2 className="mt-4 mb-1 font">Welcome Doctor!</h2>
               <p className="text-center gris">This is your space to join the network of thousands of doctors in a
            total decentralization!</p>
            <p className="text-center gris"> Manage your agenda and make teleconsultation
            in full confidentiality and security with Opentoubib</p>
            <Link to="/Login">
                <button type="button" className="btn btn-primary">

              Inscription
            </button>
          </Link>
                <button type="button" className="btn btn-primary" style={{marginLeft: '15px'}} onClick={()=>shell.openExternal('http://localhost:3000/')}>

              En savoir plus
            </button>
                </div>
              </div>
             </div>

            </div>

            </div>

          ))
}
       </div>
        </div>
      </div>
    </div>
  );
};


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/profile" component={Profile} />

        <Route path="/agenda" component={Agenda} />
        <Route path="/Support" component={Support} />
        <Route path="/App_bar" component={App_bar} />
        <Route path="/Medical_file" component={Medical_file} />
        <Route path="/Statistique" component={Statistique} />
        <Route path="/Login" component={Login} />
        <Route path="/LoginForm" component={LoginForm} />

      </Switch>
    </Router>
  );
}
