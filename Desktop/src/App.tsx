import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import icon from '../assets/icon.png';
import './App.global.css';
import Profile from './pages/Profile';
import Agenda from './pages/Agenda';
import Login from './pages/RegisterForm';
import App_bar from './pages/Home_page';
import Sign_in from './pages/Sign_in';
import Support from './pages/SupportUsPage';
import Medical_file from './pages/Medical_file';
import Menuappbar from './pages/Menuappbar';
import LoginForm from './pages/LoginForm';

const model = require('./db');

import { makeStyles } from '@material-ui/core/styles';

import { shell } from 'electron';

import Signature from './pages/Signature';
import LanguageIcon from '@material-ui/icons/Language';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

export let secretKeyLogin = null;
const sleep = (time) => new Promise((acc) => setTimeout(acc, time));
const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  })
)(InputBase);
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

const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'Français' },
};
const Hello = () => {
  const { t, i18n } = useTranslation();
  const [error, setError] = useState('');
  const [User, setUser] = useState('');
  const [isKey, setisKey] = useState();
  const [SecretKey, setSecretKey] = useState(null);
  const history = useHistory();
  const Loginn = async (details) => {
    // console.log(details);
    if (localStorage.getItem('email') == details.email) {
      if (details.password != '' && details.password != null) {
        let secret = details.password.replace(/[^a-zA-Z0-9]/g, '');
        await model.Login(secret, setisKey, setSecretKey);
        await sleep(5000);
        if (isKey) {
          console.log('logged in');
          setUser({
            email: details.email,
          });
          secretKeyLogin = SecretKey;
          localStorage.setItem('user', 'logged');
          history.push('/App_bar');
        } else setError('Wrong Password!');
      } else {
        setError('Type a password!');
      }
    } else {
      console.log('Wrong Email!');
      setError('Wrong email!');
    }
  };

  return (
    <div>
      {/* <p className="preference">Preferences</p> */}
      <div className="Hello">
        <div>
          <Link to="/Support">
            <span
              role="img"
              aria-label="books"
              style={{ position: 'absolute', bottom: '25px', right: '45%' }}
              className=" gris"
            >
              Support this project!
            </span>
          </Link>
          <div>
            {localStorage.getItem('user') == 'logged' ||
            localStorage.getItem('user') == 'loggout' ? (
              <div>
                <LoginForm Loginn={Loginn} error={error}>
                  Login
                </LoginForm>
              </div>
            ) : (
              <div>
                {' '}
                <div className="top_langue">
                  <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                      <FormControl
                        variant="outlined"
                        style={{
                          minWidth: 120,
                        }}
                      >
                        <InputLabel id="demo-simple-select-outlined-label">
                          Langue
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={i18n.language}
                          onChange={(e) => i18n.changeLanguage(e.target.value)}
                          label="Langue"
                        >
                          {Object.keys(lngs).map((lng) => (
                            <MenuItem key={lng} value={lngs[lng].nativeName}>
                              {' '}
                              {lngs[lng].nativeName}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-sm-8 text-center">
                      <div className="iq-card-info ">
                        <img width="200px" alt="icon" src={icon} />
                        <h2 className="mt-4 mb-1 font">Welcome Doctor!</h2>
                        <p className="text-center gris">
                          This is your space to join the network of thousands of
                          doctors in a total decentralization!
                        </p>
                        <p className="text-center gris">
                          {' '}
                          Manage your agenda and make teleconsultation in full
                          confidentiality and security with Opentoubib
                        </p>
                        <Link to="/Login">
                          <button type="button" className="btn btn-primary">
                            Inscription
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ marginLeft: '15px' }}
                          onClick={() =>
                            shell.openExternal('http://localhost:3000/')
                          }
                        >
                          En savoir plus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
        <Route path="/Signature" component={Signature} />
        <Route path="/Support" component={Support} />
        <Route path="/App_bar" component={App_bar} />
        <Route path="/Medical_file" component={Medical_file} />
        <Route path="/Login" component={Login} />
        <Route path="/LoginForm" component={LoginForm} />
      </Switch>
    </Router>
  );
}
