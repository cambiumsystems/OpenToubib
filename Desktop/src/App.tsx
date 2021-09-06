import React, { useState } from 'react';
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


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const knex = require('database');

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

const Hello = () => {
  const classes = useStyles();
  return (
    <div>
      <Link to="/Medical_file">
        <button
          type="button"
          style={{ position: 'absolute', top: '0px', right: '0px' }}
        >
        Medical_file
        </button>
      </Link>
      <img width="200px" alt="icon" src={icon} />
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Welcome Doctor!
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            This is your space to join the network of thousands of doctors in a
            total decentralization! Manage your agenda and make teleconsultation
            in full confidentiality and security with Opentoubib
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Is this your first time in this app ? Then sign up! If not just
            Login
          </Typography>
        </CardContent>
      </Card>
      <div className="Hello">
        <Link to="/">
          <button type="button">
            <span role="img" aria-label="books">
              📅
            </span>
            Login
          </button>
        </Link>
        <Link to="/login">
          <button type="button">
            <span role="img" aria-label="books">
              👤
            </span>
            Sign up
          </button>
        </Link>
        <Link to="/Support">
          <button type="button">

            Support
          </button>
        </Link>
        <div>
        <Link to="/Support">
          <span role="img" aria-label="books"
            style={{ position: 'absolute', bottom: '25px', right: '40%' }}>
            Support this project!
          </span>
        </Link>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isLoggedIn, setisLoggedIn] = useState();
  const history = useHistory();
  knex
    .select('*')
    .from('doctor')
    .then((data) => {
      console.log('data:', data);
      data==[]?
      setisLoggedIn(false):setisLoggedIn(true);
    })
    .catch((err) => console.log(err));
  // if (isLoggedIn) {
  //   history.push('/profile');
  //   return <Profile />;
  // }
  // history.push('/');
  return <Hello />;
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/agenda" component={Agenda} />
        <Route path="/Support" component={Support} />
        <Route path="/App_bar" component={App_bar} />
        <Route path="/Medical_file" component={Medical_file} />
        <Route path="/Statistique" component={Statistique} />


      </Switch>
    </Router>
  );
}
