import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import aboutimage from './images/pcfix2.png'
import aboutimage1 from './images/consultation.png'
import Info from './Components/Info';
import InstallationD from './Components/InstallationD';
import {BrowserRouter as Router ,Route , Link , Switch, NavLink} from "react-router-dom";
import Navbar from './Components/Navbar';
import InstallationP from './Components/InstallationP';
import ReactNotification from 'react-notifications-component';
import Inscription from './Components/Inscription'

function App() {
  
  return (<div>
    
    <Router>
    <Navbar/>
    
      <div >
        <Route path="/" exact render={
          ()=>{
            return(
              <div className="App"> 
               
               <Header/>
             <Feature/>
          <Info/>
           </div>
            )
          }
        }/>
        <Route path="/InstallationD" exact strict component={InstallationD}/>
        <Route path="/InstallationP" exact strict component={InstallationP}/>
        <Route path="/Inscription" exact strict component={Inscription}/>
      </div>
    </Router>
    
   
</div>
  );
}


export default App;
