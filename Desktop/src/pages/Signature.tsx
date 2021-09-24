import React from 'react'
import { useState ,useEffect } from 'react';
import Nav_bar from './Nav_bar';
import {Image} from "semantic-ui-react";
import BackupIcon from '@material-ui/icons/Backup';
import { useTranslation } from 'react-i18next';
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");

const path = require('path');

var fs = require('fs');
var crypto = require('crypto');

var key = '14189dc35ae35e75ff31d7502e245cd9bc7803838fbfd5c773cdcd79b8a28bbd';
var cipher = crypto.createCipher('aes-256-cbc', key);


function fileUpload(event) {
    var file = event.target.files[0];

    const fileReader = new FileReader();

    fileReader.addEventListener("loadend", (evt) => {
        if (evt.target.readyState == FileReader.DONE) {
            const hash = CryptoJS.SHA256(fileReader.result);
            console.log(hash.toString());
        }
    });

    fileReader.readAsDataURL(file);
}

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
   //  console.log(imageFile_Cachet);
     setOrigImage_Cachet(imageFile_Cachet)
     setOrigImageFile_Cachet(URL.createObjectURL(imageFile_Cachet));
     //console.log('create url:::',URL.createObjectURL(imageFile_Cachet))
    
    }

    const [images, setImages] = useState([]);
    const addImage = (e) => {
        const imageFile=e.target.files[0];
        
         setOrigImage(imageFile)
        setImages([...images, ...e.target.files]);
       // le changer avec un code de dectyptage
        //setOrigImageFile(URL.createObjectURL(imageFile));
       // console.log('create url:::',URL.createObjectURL(imageFile))
       // setFileName(imageFile.name);
      };
     

     
      useEffect(() => {

        fs.readFile('assets/Signa.png.enc', 'utf8', function (err,data) {
            if (err) {
              return console.log(err);
            }else{
                 console.log('exist');
                 var cipher = crypto.createDecipher('aes-256-cbc', key);
                 var input = fs.createReadStream('assets/Signa.png.enc');
                 var output = fs.createWriteStream('assets/Signa.png.png');
                 var img= input.pipe(cipher).pipe(output);
                 console.log(img)
                 setOrigImageFile(img);
                 setFileName(img);
  
            }
            
          });
         
        return function cleanup() {
          console.log('Cleanup');
         const assetsPath=  process.env.NODE_ENV === 'development'
         ? path.join(__dirname, '../docs')
          : path.join(process.resourcesPath, 'assets')
          var filePath = `${assetsPath}\\Signa1.png`;
          fs.unlink(filePath, console.log);
      // fs.unlinkSync('C:\\Users\\user\\Desktop\\workspace\\OpenToubib\\Desktop\\soins_0.pdf');
    };
    });

    const { t, i18n } = useTranslation();
    return (
        <div >
           <Nav_bar/> 
           <main className="container-fluid_M ">
             <div className="">
               <div className="">
                 <div className="iq-card">
            <div className="is-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                <h4 className="title_size center_element"><b>Signature</b></h4>
                    </div>
            </div> 
            <div className="iq-card-body">
            <p className="gris">{t('signature.signature')}</p>
           <div className="row" >
           
            <div className="col-md-6 ">
                {
                   origImageFile?<Image  className="img_signature" src={origImageFile}></Image>: <div className="drag-area">
                   <div className="icon"><BackupIcon fontSize="large"/></div>
                    <header>{t('signature.Upload')}</header>
                    </div>
           
                }
            </div>
            <div className="col-md-64 ">
            <input type="file" className="upload-box"    id="signature"
             onChange={(e)=>{
            addImage(e);
            var file = e.target.files[0].path;
            console.log(e.target.files[0].path);
            console.log("onchange de linput")
           // var tmppath = URL.createObjectURL(e.target.files[0]);
            var input = fs.createReadStream(file);
            console.log("url",file)

            const assetsPath=  process.env.NODE_ENV === 'development'
               ? path.join(__dirname, '../assets')
                : path.join(process.resourcesPath, 'assets')

            var out=assetsPath+'/'+e.target.files[0].name +'.enc';
         
            var output = fs.createWriteStream(out);
            
            input.pipe(cipher).pipe(output);
            
            output.on('finish', function() {
              console.log('Encrypted file written to disk!');
            });
            }}

           />
            </div>
            </div> 
           <br/>
           <h4 className="title_size"> <b>Cachet</b></h4>
           
           <div className="row" >
           
           <div className="col-md-6 ">
                {
                   origImageFile_Cachet?<Image  className="img_signature" src={origImageFile_Cachet}></Image>: <div className="drag-area">
                   <div className="icon"><BackupIcon fontSize="large"/></div>
                    <header>{t('signature.Upload')}</header>
                    </div>
           
                }
            </div>
            <div className="col-md-6 ">
            <input type="file" className="upload-box" onChange={(e)=>handle_Cachet(e)}/>
            </div>
            </div> 
        
            </div>
            </div>
            </div>
            </div>
      </main>
        </div>
    )
}

export default Signature
