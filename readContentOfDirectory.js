const fs = require("fs-meta");
const ffss = require('fs');
const dirTree = require("directory-tree");
const PATH = require("path");
const moment = require("moment");

const { count, duplicates, start, end, conta } = require("./include");

const directoryPath = "G:/Foto/";
let filename = moment().format('gg-MM-YYYY--HH-mm-ss');

start();

/**
 * Collects the files and folders for a directory path into an Object, subject
 * to the options supplied, and invoking optional
 * @param  {String} path
 * @param  {Object} options
            exclude : RegExp|RegExp[] - A RegExp or an array of RegExp to test for exlusion of directories.
            extensions : RegExp - A RegExp to test for exclusion of files with the matching extension.
            attributes : string[] - Array of FS.stats attributes
 * @param  {function} onEachFile
 * @param  {function} onEachDirectory
 * @return {Object}
 */
let objKeyByDate = {};
let arrayFileName = [];
let arrayItemName = [];
const tree = dirTree(directoryPath, { attributes: ["birthtime", "size"] }, (item, PATH, stats)=>{
  let objName = {};
  objName['fileName'] = item.name;
  objName['item'] = item;

  arrayFileName.push(item.name);
  arrayItemName.push(item);
  let key = stats.birthtime.getFullYear();
  
  if(!objKeyByDate[key]){
    objKeyByDate[key] = [];
    objKeyByDate[key].push(item)
  }else{
    objKeyByDate[key].push(item);
  }

});

end(`dirTree: ${directoryPath} `);

/* if (ffss.existsSync('./tmp')) {
  debugger;
  ffss.mkdir('./tmp', {}, (err) => {
    if (err) throw err;
  });
} */
//debugger;
const conteggio = conta(arrayFileName);
let objConteggio = {};
for(var key in conteggio) {
  
    var value = conteggio[key];
    if (value > 1) {
      objConteggio[key] = value;
    }
}

fs.writeFile(`./tmp/${filename}__conteggio.json`, JSON.stringify(conteggio), function(err) {
  if (err) throw err;
  console.log("Saved!");
});
fs.writeFile(`./tmp/${filename}__objConteggio.json`, JSON.stringify(objConteggio), function(err) {
  if (err) throw err;
  console.log("Saved!");
});



fs.writeFile(`./tmp/${filename}__tree.json`, JSON.stringify(tree), function(err) {
  if (err) throw err;
  console.log("Saved!");
});

fs.writeFile(`./tmp/${filename}__objKeyByDate.json`, JSON.stringify(objKeyByDate), function(err) {
  if (err) throw err;
  console.log("Saved!");
});

const arryaKeyByDate = Object.getOwnPropertyNames(objKeyByDate);
let objj = {};
arryaKeyByDate.forEach(element => {
  objj[element] = objKeyByDate[element].length;
});

fs.writeFile(`./tmp/${filename}__objKeyByDate_count.json`, JSON.stringify(objj), function(err) {
  if (err) throw err;
  console.log("Saved!");
});