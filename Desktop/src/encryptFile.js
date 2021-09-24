var fs = require('fs');
var crypto = require('crypto');

function encryptFile (encryptionKey, file){

var cipher = crypto.createCipher('aes-256-cbc', encryptionKey);
var input = fs.createReadStream(file);
var output = fs.createWriteStream(file+'.enc');

input.pipe(cipher).pipe(output);

output.on('finish', function() {
  console.log('Encrypted file written to disk!');
});
}
