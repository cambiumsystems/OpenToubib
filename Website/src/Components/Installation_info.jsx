import React from 'react'
import ReactPlayer from 'react-player'
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
    return <MuiAlert elevation={6} 
                     variant="filled" {...props} />;
  }
function Installation_info(props) {
    
    return (
        <div>
             
        <div id='installation'>
        <div className='installation-image'>
            <img src={props.image} alt=''/>

        </div>
        <div className='installation-text'>
            <h2>{props.title}</h2>
            <p>
                {props.paragraph}
           </p>
           <Alert severity="success">Video demenstrative <ReactPlayer   width='500px' height='100px'controls url='https://www.youtube.com/watch?v=kTfwTbf-dkg'/></Alert>
            <button>{props.button}</button>
            
        </div>
        
    </div>
   
    </div>
    )
}

export default Installation_info
