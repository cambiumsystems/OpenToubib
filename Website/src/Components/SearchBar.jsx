import React,{useState} from 'react'
import RoomIcon from '@material-ui/icons/Room';
import CloseIcon from '@material-ui/icons/Close'; 

function SearchBar({placeholder,data}) {
   const [selectState,setSelectState]=useState("");



   const [details, setDetails] = useState(null);

   const getUserGeolocationDetails = () => {
       fetch(
           "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
       )
           .then(response => response.json())
           .then(data => setDetails(data))
           .then(data => setSelectState(data));
          
 
   };


console.log(details);

   const[filteredData,setFilteredData]=useState([]);
 
   const handleFIlter=(event)=>{
     const searchWord=event.target.value
     const newFilter=data.filter((value)=>{
         return value.title.toLowerCase().includes(searchWord.toLowerCase())
             });
       if(searchWord ==="") {
           setFilteredData([]);
       } else{
        setFilteredData(newFilter);
       }   

      
 };


   return (
        <div className="search">
            <div className="searchInputs" >
               <input type="text" placeholder={`Localisation`,details &&(details.city)} onChange={handleFIlter} ></input>
               <div className="searchIcon" onClick={getUserGeolocationDetails} ><RoomIcon/></div>
            </div>

            {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div className="dataItem" >
                <p onClick={()=>setDetails(value.title)}>{value.title} </p>
              </div>
            );
          })}
        </div>
      )}

        </div>
    )
}

export default SearchBar
