// var fs = require('fs');
//
// fs.readFile('input.txt', function(err, buf) {
//   console.log(buf.toString());
// });


// var usb = require('usb');
// var listDevice = usb.getDeviceList();
// console.log('listDevices',listDevice);
// for (var i = 0; i < listDevice.length; i++) {
//   console.log(listDevice[i] + '\n\n');
// }


const drivelist = require('drivelist');

drivelist.list((error, drives) => {
  if (error) {
    throw error;
  }


  for (var i = 0; i < drives.length; i++) {
    console.log(drives[i]);
    console.log(drives[i].mountpoints);

  }
});
