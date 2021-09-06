const crypto = require("crypto");

const algorithm = "aes-256-cbc";
require('dotenv').config();



// protected data
const message = "This is a secret message";

// secret key generate 32 bytes of random data
const Securitykey = crypto.scryptSync('secretKey', 'GfG', 24);


// the cipher function
const cipher = crypto.createCipher(algorithm, Securitykey);

// encrypt the message
// input encoding
// output encoding
let encryptedData = cipher.update(message, "utf-8", "hex");
console.log (Buffer.alloc(16, 0));

encryptedData += cipher.final("hex");

console.log("Encrypted message: " + encryptedData);

// the decipher function
const decipher = crypto.createDecipher(algorithm, Securitykey);

let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

decryptedData += decipher.final("utf8");

console.log("Decrypted message: " + decryptedData);
