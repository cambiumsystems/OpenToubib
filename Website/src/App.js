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
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (<div>
    
    <Router>
    <Navbar/>
    
      <div className="App">
        <Route path="/" exact render={
          ()=>{
            return(
              <div className="App"> 
               
               <Header/>
             <Feature/>
              <About image={aboutimage} title='Plateforme dediée aux medecins' button='Installation Desktop' paragraph='
           Une réponse stable, sécurisée et adaptable a vos besoins afin de vous donner la main de gérer votre planning et de le personnaliser avec la possibilité de prise de rdv
           en téléconsultation ou en présentiel
           tout en  ayant un accès aux dossiers médicaux et aux informations du patient instantanément  ainsi que la possibilité de les modifier en temps réel. 
           Grâce a Opentoubib jamais la barrière médecin patient n a été aussi fine 
                      ' />
             <About image={aboutimage1} title='Plateforme dediée aux patients' button='Installation Mobile ' paragraph='Une plateforme au plus près de vous qui tient à vous offrir une recherche entre différents médecins afin de respecter vos préférences, grâce à nos options développer vous aurez l’accès aux horaire du médecin choisi avec la possibilité d annulation et de décalage directement en ligne tout cela sera possible grâce à un système 100% décentraliser qui garantit une sécurité …. '/>
           <Info/>
           </div>
            )
          }
        }/>
        <Route path="/InstallationD" exact strict component={InstallationD}/>
        <Route path="/InstallationP" exact strict component={InstallationP}/>
      </div>
    </Router>
    
   
</div>
  );
}


export default App;
