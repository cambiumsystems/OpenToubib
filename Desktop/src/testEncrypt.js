const electron = require('electron');

const userDataPath = (electron.app || electron.remote.app).getPath(
  'userData'
);
console.log(userDataPath)
