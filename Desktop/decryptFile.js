var fs = require('fs');
var crypto = require('crypto');

var key = '14189dc35ae35e75ff31d7502e245cd9bc7803838fbfd5c773cdcd79b8a28bbd';
var cipher = crypto.createDecipher('aes-256-cbc', key);
var input = fs.createReadStream('soins_0.pdf.enc');
var output = fs.createWriteStream('soins_0_decrypted.pdf');

input.pipe(cipher).pipe(output);

output.on('finish', function() {
  console.log('Decrypted file written to disk!');
});
