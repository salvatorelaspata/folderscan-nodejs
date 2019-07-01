
//requiring path and fs modules
const path = require('path');
const fs = require('fs-meta');
// const sizeOf = require('image-size');
//joining path of directory
//const directoryPath = path.join(__dirname, 'C:/Users/cube27/Desktop/nodejs/u/');
const directoryPath = 'C:/Users/cube27/Pictures/';
//passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      }
      // console.log(files);

      files.forEach(function (file) {

          var dir = directoryPath + file;
            
          fs.stat(dir, function (err, stats) {
              if (err)
                 throw err;
              /*if (stats.isFile()) {
                  console.log('\n\nIt\'s a file!',stats);
              }*/
              if (stats.isDirectory()) {
                console.log('\n\nIt\'s a directory!',dir);
              }
          });
      });
  });

