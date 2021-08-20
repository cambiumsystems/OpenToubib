import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../images/consultationicone.png'
import featureimage1 from '../images/télé appel.png'
import featureimage2 from '../images/blockchainn .png'
import featureimage3 from '../images/séuritée.png'

function feature() {
    return (
        <div id="features">
           <div className='a-container'>
              <FeatureBox image={featureimage} title='Gestion d agenda' paragraph='Un logiciel de gestion des rendez-vous qui offre aux professionel une solution pour gerer leurs agenda en ayant une vue globale sur lensemble de leurs rdv'/>
              <FeatureBox image={featureimage1} title='online consulting' paragraph='Prenez rendez vous en ligne, 24h/24 et 7j/7, pour une consultation physique ou vidéo avec la possibilité de decalage et d annulation
......'/>
              <FeatureBox image={featureimage2} title='Décentralisation' paragraph='Grace a un systeme peer to peer qui fait de chaque ordinateur un mini serveur ce qui signifie une protection absolue de vos donnée ….
......'/>
              <FeatureBox image={featureimage3} title='Sécurité' paragraph='Vos données seront protégées grâce à un systeme  decentralisé qui vous garantie une discretion et une protection complete de votre vie privée
......'/>
          
            </div>
            
        </div>
    )
}

export default feature
