const antipattern = () => (
  `
  var myFunc = function (param) {
    if (!myFunc.cache[param]) {
      var result = {};
      
      // ... expensive operation ...
      myFunc.cache[param] = result;
    }
    
    return myFunc.cache[param];
  };
  
  // cache storage
  myFunc.cache = {};
`
);

const preferred1 = () => (
  `
  var myFunc = function (param) {
    if (!myFunc.cache.hasOwnProperty(param)) {
      var result = {};
      
      // ... expensive operation ...
      myFunc.cache[param] = result;
    }
    
    return myFunc.cache[param];
  };
  
  // cache storage
  myFunc.cache = {};
`
);

const preferred2 = () => (
  `
  var myFunc = function () {
    var cachekey = JSON.stringify(Array.prototype.slice.call(arguments)),
        result;
        
    if (!myFunc.cache[cachekey]) {
      result = {};
      
      // ... expensive operation ...
      myFunc.cache[cachekey] = result;
    }
    
    return myFunc.cache[cachekey];
  };
  
  // cache storage
  myFunc.cache = {};
  `
);

const preferred3 = () => (
  `
	var myFunc = function (param) {
    var f = arguments.callee,
        result;
        
    if (!f.cache[param]) {
      result = {};
      
      // ... expensive operation ...
      f.cache[param] = result;
    }
    
    return f.cache[param];
  };
  
  // cache storage
  myFunc.cache = {};
`
);

export {
  antipattern,
  preferred1,
  preferred2,
  preferred3,
};