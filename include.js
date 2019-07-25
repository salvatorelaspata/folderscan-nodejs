module.exports = {
  count: arrayNameFile =>
    arrayNameFile.reduce((a, b) => ({ ...a, [b]: (a[b] || 0) + 1 }), {}), // don't forget to initialize the accumulator
  duplicates: dict => Object.keys(dict).filter(a => dict[a] > 1),
  start: () => {
    startTime = new Date();
  },
  end: (name) => {
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds
    var seconds = Math.round(timeDiff);
    console.log("name: " + name + "seconds: " + seconds);
  },
  conta: unique => {
    var  count = {};
    unique.forEach((i) => { 
      count[i] = ( count[i] || 0 ) + 1;
    });
    return count;
  }
};

/* export const count = arrayNameFile =>
  arrayNameFile.reduce((a, b) => ({ ...a,
    [b]: (a[b] || 0) + 1
  }), {}) // don't forget to initialize the accumulator

export const duplicates = dict =>
  Object.keys(dict).filter((a) => dict[a] > 1)

var startTime, endTime;

export function start() {
  startTime = new Date();
};

export function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
} */
