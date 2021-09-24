import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About_patient_app from './Components/About_patient_app';
import aboutimage from './images/pcfix2.png'
import pro from './images/opne.png'
import Installation_info from './Components/Installation_info'
import aboutimage1 from './images/mobile comu.png'
import Info from './Components/Info';
import InstallationD from './Components/InstallationD';
import {BrowserRouter as Router ,Route , Link , Switch, NavLink} from "react-router-dom";
import Navbar from './Components/Navbar';
import InstallationP from './Components/InstallationP';
import ReactNotification from 'react-notifications-component';
import Inscription from './Components/Inscription'
import About_doc_app from './Components/About_doc_app';

function App() {
  
  return (<div>
    
    <Router>
    <Navbar/>
    
      <div>
        <Route path="/" exact render={
          ()=>{
            return(
              <div className="App"> 
              <Header/>
            <Feature/>
            <About_patient_app title="Open-Toubib-Pro" paragraph="Equipez vous de Opentoubib et bénéficiez dune plateforme au plus près de vous qui tient à vous offrir une recherche entre différents médecins afin de respecter vos préférences, grâce à nos options développer vous aurez l’accès aux horaire du médecin choisi avec la possibilité d annulation et de décalage directement en ligne tout cela sera possible grâce à un système 100% décentraliser qui garantit une sécurité ….
. " button="Telecharger" image={pro} />
            <About_doc_app title="Open-Toubib" paragraph="OpenToubib vous propose deux choix suivant vos besoins,
Une application web facilement accessible depuis votre ordinateur ou votre téléphone portable mais qui nécessite faire tourner un serveur et donc une décentralisation qui n'est pas totale mais qui reste sécurisée. Ou si vous désirez une décentralisation totale, Opentoubib vous propose une application Desktop rien que pour vous à installer sur vos ordinateurs qui n'a recours à aucun serveur.
 " button="Telecharger" image={aboutimage1} />
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
