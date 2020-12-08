const fs = require('fs');

exports.sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

exports.readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', function (error, data) {
      if (error) return reject(error);

      resolve(data);
    })
  });
}
