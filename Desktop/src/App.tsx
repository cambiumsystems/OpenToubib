import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import icon from '../assets/logo.png';
import './App.global.css';
import  Profile  from './pages/Profile';
import  Agenda  from './pages/Agenda';
import  Login  from './pages/Login';


const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
};
const Hello = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Link to="/login">
      <button type="button" style={{position: "absolute", top: "0px",right: "0px",}}>
        LogIn
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
      </div>
      <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
      </Trans>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('description.part2')}
        </a>
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
      </Switch>
    </Router>
  );
}
