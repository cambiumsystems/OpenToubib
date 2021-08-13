import React from 'react'

function Installation(props) {
    return (
        <div id='installation'>
        <div className='installation-image'>
            <img src={props.image} alt=''/>

        </div>
        <div className='installation-text'>
            <h2>{props.title}</h2>
            <p>
                {props.paragraph}
           </p>
            <button>{props.button}</button>
        </div>
    </div>
    )
}

export default Installation
