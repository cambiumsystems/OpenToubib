import React from 'react';
import { useState, useEffect } from 'react';
import Nav_bar from './Nav_bar';
import { Image } from 'semantic-ui-react';
import BackupIcon from '@material-ui/icons/Backup';
var AES = require('crypto-js/aes');
var SHA256 = require('crypto-js/sha256');

const path = require('path');

var fs = require('fs');
var crypto = require('crypto');

var key = '14189dc35ae35e75ff31d7502e245cd9bc7803838fbfd5c773cdcd79b8a28bbd';
var cipher = crypto.createCipher('aes-256-cbc', key);

function fileUpload(event) {
  var file = event.target.files[0];

  const fileReader = new FileReader();

  fileReader.addEventListener('loadend', (evt) => {
    if (evt.target.readyState == FileReader.DONE) {
      const hash = CryptoJS.SHA256(fileReader.result);
      console.log(hash.toString());
    }
  });

  fileReader.readAsDataURL(file);
}

function Signature() {
  const [origImage, setOrigImage] = useState('');
  const [origImageFile, setOrigImageFile] = useState('');
  const [fileName, setFileName] = useState('');
  const handle = (e) => {
    const imageFile = e.target.files[0];
    setOrigImage(imageFile);
    setOrigImageFile(URL.createObjectURL(imageFile));

    setFileName(imageFile.name);
  };
  const [origImage_Cachet, setOrigImage_Cachet] = useState('');
  const [origImageFile_Cachet, setOrigImageFile_Cachet] = useState('');
  const [fileName_Cachet, setFileName_Cachet] = useState('');
  const handle_Cachet = (e) => {
    const imageFile_Cachet = e.target.files[0];
    //  console.log(imageFile_Cachet);
    setOrigImage_Cachet(imageFile_Cachet);
    setOrigImageFile_Cachet(URL.createObjectURL(imageFile_Cachet));
    //console.log('create url:::',URL.createObjectURL(imageFile_Cachet))
    setFileName_Cachet(imageFile_Cachet.name);
  };

  const [images, setImages] = useState([]);
  const addImage = (e) => {
    const imageFile = e.target.files[0];

    setOrigImage(imageFile);
    setImages([...images, ...e.target.files]);
    // le changer avec un code de dectyptage
    //setOrigImageFile(URL.createObjectURL(imageFile));
    // console.log('create url:::',URL.createObjectURL(imageFile))
    // setFileName(imageFile.name);
  };

  useEffect(() => {
    fs.readFile('docs/Signa.png.enc', 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      } else {
        console.log('exist');
        var cipher = crypto.createDecipher('aes-256-cbc', key);
        let input = fs.createReadStream('docs/Signa.png.enc');
        let output = fs.createWriteStream('docs/Signa1.png');
        input.pipe(cipher).pipe(output);
        // console.log(img);
        // setOrigImageFile(img);
        // setFileName(img);
      }
    });

    return function cleanup() {
      console.log('GOODBYE');
      const assetsPath=  process.env.NODE_ENV === 'development'
         ? path.join(__dirname, '../docs')
          : path.join(process.resourcesPath, 'assets')
          var filePath = `${assetsPath}\\Signa1.png`;

      fs.unlink(filePath, console.log);
      // fs.unlinkSync('C:\\Users\\user\\Desktop\\workspace\\OpenToubib\\Desktop\\soins_0.pdf');
    };
  });

  return (
    <div>
      <Nav_bar />
      <main className="container-fluid iq-card">
        <div className="is-card-header d-flex justify-content-between">
          <div className="iq-header-title">
            <h4 className="title_size">
              <b>Signature</b>
            </h4>
          </div>
        </div>
        <div className="iq-card-body">
          <p className="gris">
            Cette signatute electronique fera office d'une signature numerique
            pour cela veuiller la scanner dans une feuille blache{' '}
          </p>
          <div className="row">
            <div className="col-md-6 ">
              {origImageFile ? (
                <Image className="img_signature" src={origImageFile}></Image>
              ) : (
                <div className="drag-area">
                  <div className="icon">
                    <BackupIcon fontSize="large" />
                  </div>
                  <header>Upload file</header>
                </div>
              )}
            </div>
            <div className="col-md-6 ">
              <input
                type="file"
                className="upload-box"
                id="signature"
                onChange={(e) => {
                  addImage(e);
                  var file = e.target.files[0].path;
                  console.log(e.target.files[0].path);
                  console.log('onchange de linput');
                  // var tmppath = URL.createObjectURL(e.target.files[0]);
                  var input = fs.createReadStream(file);
                  console.log('url', file);

                  const assetsPath =
                    process.env.NODE_ENV === 'development'
                      ? path.join(__dirname, '../docs')
                      : path.join(process.resourcesPath, 'assets');

                  var out = assetsPath + '/' + e.target.files[0].name + '.enc';

                  var output = fs.createWriteStream(out);

                  input.pipe(cipher).pipe(output);

                  output.on('finish', function () {
                    console.log('Encrypted file written to disk!');
                  });
                }}

                //  console.log("obtenir le lien");
                //      const imageFile=event.target.files[0];
                //     setOrigImage(imageFile)
                //     setOrigImageFile(window.URL.createObjectURL(imageFile));

                //     setFileName(imageFile.name);

                //    console.log("crypter le fichier");
              />
            </div>
          </div>
          <br />
          <h4 className="title_size">
            {' '}
            <b>Cachet</b>
          </h4>

          <div className="row">
            <div className="col-md-6 ">
              {origImageFile_Cachet ? (
                <Image
                  className="img_signature"
                  src={origImageFile_Cachet}
                ></Image>
              ) : (
                <div className="drag-area">
                  <div className="icon">
                    <BackupIcon fontSize="large" />
                  </div>
                  <header>Upload file</header>
                </div>
              )}
            </div>
            <div className="col-md-6 ">
              <input
                type="file"
                className="upload-box"
                onChange={(e) => handle_Cachet(e)}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signature;
