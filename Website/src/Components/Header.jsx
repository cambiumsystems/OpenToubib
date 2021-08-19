import React from 'react'
import SearchBar from './SearchBar'
import BookData from '../Data.json'

function Header() {
    const submit =()=>{
        alert(JSON.stringify())
    }
    return (
        <div id="main">
           
            <div className='name'>
                <h1>Votre professionnel de santé <br/> a la portée de vos main</h1>
            <p className='details'>Rapide, gratuit et sécurisé </p>
            
            <form className="bag" >
             
                  <select>
                      <option>Recherche a établir selon </option>
                      <option></option>
                  </select>
             <SearchBar placeholder="ou ?" data={BookData}/>
             <input type="submit" onClick={submit} value="Rechercher" className="bl"/>
            </form>
            </div>
        </div>
    )
}

export default Header
