import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import icon from '../assets/logo.png';
import './App.global.css';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Agenda = () =>  {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
    )
  };

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>Open-Toubib</h1>
      <div className="Hello">
          <button type="button">
            <span role="img" aria-label="books">
            📅
            </span>
            Agenda
          </button>
        
          <button type="button">
            <span role="img" aria-label="books">
            👤
            </span>
            Profil
          </button>
      </div>
      <Agenda/>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
        <Route path="/agenda" ><Agenda/></Route>
      </Switch>
    </Router>
  );
}
