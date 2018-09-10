const unsafe = () => (
  `
  var MYAPP = {};
  `
);

const better = () => (
  `
  if (typeof MYAPP === "undefined") {
      var MYAPP = {};
    }
  `
);


const shorter = () => (
  `
  var MYAPP = MYAPP || {};
  
  MYAPP.namespace = function (ns_string) {
      var parts = ns_string.split('.'),
          parent = MYAPP,
          i;
          
      // strip redundant leading global
      if (parts[0] === "MYAPP") {
        parts = parts.slice(1);
      }
      
      for (i = 0; i < parts.length; i += 1) {
      
        // create a property if it doesn't exist
        if (typeof parent[parts[i]] === "undefined") {
          parent[parts[i]] = {};
        }
        
        parent = parent[parts[i]];
      }
      
      return parent;
    }; 
    `
);

const assign = () => (
  `
  var module2 = MYAPP.namespace('MYAPP.modules.module2');
  
  console.log(module2 === MYAPP.modules.module2); // true
  `
);

const skip = () => (
  `
  MYAPP.namespace('modules.module51');
  `
);

const long = () => (
  `
  MYAPP.namespace('once.upon.a.time.there.was.this.long.nested.property');
  `
);

export {
  unsafe,
  better,
  shorter,
  assign,
  skip,
  long,
}