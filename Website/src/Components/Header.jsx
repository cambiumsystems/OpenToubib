import React from 'react'
import Navbar from './Navbar';
function Header() {
    return (
        <div id="main">
            <Navbar/>
            <div className='name'>
                <h1>« <span>On ne soigne pas une maladie</span>  mais des malades . »</h1>
            <p className='details'>faites partie de notre communoté </p>
            <a href='' className='cv-btn'> Download</a>
            </div>
        </div>
    )
}

export default Header
