import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import icon from '../assets/logo.png';
import './App.global.css';
import Profile from './pages/Profile';
import Agenda from './pages/Agenda';
import Login from './pages/Login';
import App_bar from './pages/App_bar';

const Hello = () => {
  return (
    <div>
      <Link to="/login">
        <button
          type="button"
          style={{ position: 'absolute', top: '0px', right: '0px' }}
        >
          LogIn
        </button>
      </Link>
      <Link to="/App_bar">
        <button
          type="button"
          style={{ position: 'absolute', top: '0px', right: '0px' }}
        >
          App_bar
        </button>
      </Link>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>Open-Toubib</h1>
      <div className="Hello">
        <Link to="/agenda">
          <button type="button">
            <span role="img" aria-label="books">
              📅
            </span>
            Agenda
          </button>
        </Link>
        <Link to="/profile">
          <button type="button">
            <span role="img" aria-label="books">
              👤
            </span>
            Profil
          </button>
        </Link>
        <div>
        <Link to="/">
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

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/profile" component={Profile} />
        <Route path="/agenda" component={Agenda} />
        <Route path="/login" component={Login} />
        <Route path="/App_bar" component={App_bar} />
      </Switch>
    </Router>
  );
}
