import React from 'react'
import { useState } from 'react';
import Nav_bar from './Nav_bar';
import {Image} from "semantic-ui-react";
function Signature() {
    const[origImage,setOrigImage]=useState("");
    const[origImageFile,setOrigImageFile]=useState("");
    const [fileName,setFileName]=useState("")
    const handle=(e)=>{
     const imageFile=e.target.files[0];
     setOrigImage(imageFile)
     setOrigImageFile(URL.createObjectURL(imageFile));
    
     setFileName(imageFile.name);
    }
    const[origImage_Cachet,setOrigImage_Cachet]=useState("");
    const[origImageFile_Cachet,setOrigImageFile_Cachet]=useState("");
    const [fileName_Cachet,setFileName_Cachet]=useState("")
    const handle_Cachet=(e)=>{
     const imageFile_Cachet=e.target.files[0];
     setOrigImage_Cachet(imageFile_Cachet)
     setOrigImageFile_Cachet(URL.createObjectURL(imageFile_Cachet));
     console.log(origImageFile_Cachet)
     setFileName_Cachet(imageFile_Cachet.name);
    }
    
    return (
        <div>
           <Nav_bar/> 
           <main className="container-fluid iq-card">
            <div className="is-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                <h4 className="title_size"><b>Signature</b></h4>
                    </div>
            </div> 
            <div className="iq-card-body">
            <p className="gris">Cette signatute electronique fera office d'une signature numerique pour cela veuiller la scanner dans une feuille blache </p>
           <div className="row" >
           
            <div className="col-md-6 ">
                {
                   origImageFile?<Image  className="img_signature" src={origImageFile}></Image>: <Image className="img_signature"   src="http://navparivartan.in/wp-content/uploads/2018/11/placeholder.png"></Image>
           
                }
            </div>
            <div className="col-md-6 ">
            <input type="file"  onChange={(e)=>handle(e)}/>
            </div>
            </div> 
           <br/>
           <h4 className="title_size"> <b>Cachet</b></h4>
           
           <div className="row" >
           
           <div className="col-md-6 ">
                {
                   origImageFile_Cachet?<Image  className="img_signature" src={origImageFile_Cachet}></Image>: <Image className="img_signature"   src="http://navparivartan.in/wp-content/uploads/2018/11/placeholder.png"></Image>
           
                }
            </div>
            <div className="col-md-6 ">
            <input type="file"  onChange={(e)=>handle_Cachet(e)}/>
            </div>
            </div> 
        
       
            </div>
           
       
      </main>
        </div>
    )
}

export default Signature
