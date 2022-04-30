const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        
    fs.writeFile('./dist/index.html', fileContent, err => {
       // if there is an error with the function reject it and send it to the .catch() method
        if (err) {
          reject(err);
          // returns us out of function if the promise is rejected
          return;
        }
        // if everything went well resolve the promise and send the successful data to the .then() method
        resolve({
            ok: true,
            message: 'File Created!'
        });      
     });
    }); 
};
// copying file
const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
};
module.exports = { writeFile, copyFile };
