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
              <FeatureBox image={featureimage} title='sécurité' paragraph='blablabla ///// BLABLAB......'/>
              <FeatureBox image={featureimage1} title='online consulting' paragraph='blablabla.....blabla/////'/>
              <FeatureBox image={featureimage2} title='Décentraliser' paragraph='blablabla....blabla...blabla'/>
              <FeatureBox image={featureimage3} title='Décentraliser' paragraph='blablabla....blabla...blabla'/>
          
            </div>
            
        </div>
    )
}

export default feature
