import React from 'react'

function About_doc_app(props) {
    return (
        <div id='about'>
           
            
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>
                    {props.paragraph}
               </p>
                <button>{props.button}</button>
            </div>
            <div className='about-image'>
                <img src={props.image} alt=''/>

            </div>
        </div>
    )
}

export default About_doc_app
