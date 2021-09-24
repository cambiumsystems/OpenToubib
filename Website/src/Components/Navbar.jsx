import React,{useState} from 'react'
import logo from '../images/logo (1).png'
import {Link }from 'react-router-dom'
import InstallationP from './InstallationP'
function Navbar() {
    const [nav,setnav]=useState(false)
    const changeBackground=()=>{
        if(window.scrollY >=50){
          setnav(true);
        }else{
           setnav(false); 
        }
    }
    window.addEventListener('scroll',changeBackground);
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
         <a href='' className='logo'>
             <img src={logo} alt=''/>
         </a>
         <inout type='checkbox' className='menu-btn' id='menu-btn'/>
         <label className='menu-icon' for='menu-btn'>
             <span className='nav-icon'></span>
         </label>
         <ul className='menu'>
             <Link to="/"><li><a href='' className=''>Home</a></li></Link>
             <Link to="/InstallationD"><li><a href=''>Connexion</a></li></Link>
            <Link to="/InstallationP"> <li><a href=''>Vous etes un professionel ? </a></li></Link>
            
         </ul>
        </nav>
    )
}

export default Navbar
