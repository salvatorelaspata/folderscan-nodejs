const ftpsync = require("ftpsync"); //https://github.com/evanplaice/node-ftpsync
const watch = require("node-watch");
const localDir = "C:/Users/cube27/AppData/Roaming/SAP/";
const remoteDir = "/Sync"
const localDirHost = "C:/Windows/System32/drivers/etc/"
const remoteDirHost = "/Sync/ETC";
/*
    ftp sync
*/
const options = {
    host: "151.54.46.63",
    user: "admin",
    pass: "asdfghjkl",
    local: localDir,
    remote: remoteDir
};
ftpsync.settings = options;

ftpsync.run(function(err, result) {
    console.log("[ftpsync] err", err);
    console.log("[ftpsync] result", result);
});

options['local'] = localDirHost;
options['remote'] = remoteDirHost;
ftpsync.settings = options;

ftpsync.run(function(err, result) {
    console.log("[ftpsync] err", err);
    console.log("[ftpsync] result", result);
});

/*
    watch
*/
/* const options = {
    host: "151.54.46.63",
    user: "admin",
    pass: "asdfghjkl",
    local: localDir,
    remote: remoteDir
};
ftpsync.settings = options;

watch(localDir, { recursive: true }, (evt, name) => { 
    console.log('evt', evt);
    if (evt != 'remove') {
        ftpsync.run(function(err, result) {
            console.log("[ftpsync] err", err);
            console.log("[ftpsync] result", result);
        });
    }
});  */