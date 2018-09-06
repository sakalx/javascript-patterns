const optimal = () => (
  `
  for (var i = 0; i < myarray.length; i++) {
    // do something with myarray[i]
  }
  `
);

const optimization1 = () => (
  `
  for (var i = 0, max = myarray.length; i < max; i++) {
    // do something with myarray[i]
  }
  `
);

const optimization2 = () => (
  `
  var i = 0,
  max,
  myarray = [];
  
  for (i = 0, max = myarray.length; i < max; i++) {
    // do something with myarray[i]
  }
  `
);

const optimization3 = () => (
  `
  var i = 0,
  max,
  myarray = [];
  
  for (i = 0, max = myarray.length; i < max; i += 1) {
    // do something with myarray[i]
  }
  `
);

const preferred1 = () => (
  `
  var i, myarray = [];
  
  for (i = myarray.length; i--;) {
    // do something with myarray[i]
  }
  `
);

const preferred2 = () => (
  `
  var myarray = [],
  i = myarray.length;
  
  while (i--) {
    // do something with myarray[i]
  }
  `
);

export {
  optimal,
  optimization1,
  optimization2,
  optimization3,
  preferred1,
  preferred2,
}