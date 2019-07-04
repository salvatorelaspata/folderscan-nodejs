const fs = require("fs-meta");
const dirTree = require("directory-tree");
const PATH = require("path");

const { count, duplicates, start, end } = require("./include");

const directoryPath = "E:/Foto/";
let array = [];
let arrayNameFile = [];
let arrayItem = [];
//let arrayDirectory = [];
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
//console.log('dirTree - i ', new Date());
start();
let objKeyByDate = {};
const tree = dirTree(directoryPath, { attributes: ["birthtime", "size"] }, (item, PATH, stats)=>{
  let obj = {};
  arrayNameFile.push(item.name);
  arrayItem.push(item);
  obj[item.path] = item;
  array.push(obj);

  let key = stats.birthtime.getFullYear();
  
  if(!objKeyByDate[key]){
    objKeyByDate[key] = [];
    objKeyByDate[key].push(item)
  }else{
    objKeyByDate[key].push(item);
  }
  /* if( objKeyByDate[key]){
    objKeyByDate[key].push(item);
  }else{

  } */
} /*
, (item, PATH, stats)=>{
  let objDir = {};

  if(stats.isDirectory()){ //sempre true.
    debugger;
    objDir[item.path] = item.children;
  }
  arrayDirectory.push(objDir);
} */);
end('dirTree');

//let uniqueArrayNameFile = [...new Set(arrayNameFile)];
//let uniqueArrayFile = [... new Set(arrayItem)];
//console.log('count - i ', new Date());
//start();
//let countResults = count(arrayNameFile);
//console.log('count - f ', new Date());
//end('count');
//start();
//let duplicatesResults = duplicates(count(arrayNameFile));
//end('duplicates');

fs.writeFile("tree.json", JSON.stringify(tree), function(err) {
  if (err) throw err;
  console.log("Saved!");
});

fs.writeFile("objKeyByDate.json", JSON.stringify(objKeyByDate), function(err) {
  if (err) throw err;
  console.log("Saved!");
});

const arryaKeyByDate = Object.getOwnPropertyNames(objKeyByDate);
let objj = {};
arryaKeyByDate.forEach(element => {
  objj[element] = objKeyByDate[element].length;
});

fs.writeFile("objKeyByDate_count.json", JSON.stringify(objj), function(err) {
  if (err) throw err;
  console.log("Saved!");
});

console.log('FINISH');



