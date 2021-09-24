var fs = require('fs');
var crypto = require('crypto');

function decryptFile(encryptionKey, file){
var decipher = crypto.createDecipher('aes-256-cbc', encryptionKey);
var input = fs.createReadStream(file);
var output = fs.createWriteStream(file.replace('.enc',''));

input.pipe(decipher).pipe(output);

output.on('finish', function() {
  console.log('Decrypted file written to disk!');
});
}
