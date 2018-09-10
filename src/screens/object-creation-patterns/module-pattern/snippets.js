const example1 = () => (
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

const example2 = () => (
  `
  MYAPP.namespace('MYAPP.utilities.Array');
  
  MYAPP.utilities.array = (function () {
  
    // private properties
    var array_string = "[object Array]",
        ops = Object.prototype.toString,
        
      // private methods
        inArray = function (haystack, needle) {
          for (var i = 0, max = haystack.length; i < max; i += 1) {
            if (haystack[i] === needle) {
              return i;
            }
          }
          
          return -1;
        },
        
        isArray = function (a) {
          return ops.call(a) === array_string;
        };
        
    // end var
    // revealing public API
    return {
      isArray:isArray,
      indexOf:inArray
    };
  }());
  `
);

const example3 = () => (
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

const example4 = () => (
  `
  MYAPP.namespace('MYAPP.utilities.Array');
	
  MYAPP.utilities.Array = (function () {
  
    // dependencies
    var uobj = MYAPP.utilities.object,
        ulang = MYAPP.utilities.lang,
        
      // private properties and methods...
        Constr;
    // end var
    
    // optionally one-time init procedures
    // ...
    // public API -- constructor
    Constr = function (o) {
      this.elements = this.toArray(o);
    };
    
    // public API -- prototype
    Constr.prototype = {
      constructor:MYAPP.utilities.Array,
      version:"2.0",
      
      toArray:function (obj) {
        for (var i = 0, a = [], len = obj.length; i < len; i += 1) {
          a[i] = obj[i];
        }
        
        return a;
      }
    };
    
    // return the constructor
    // to be assigned to the new namespace
    return Constr;
  }());
  
  var arr = new MYAPP.utilities.Array(obj);
  `
);
export {
  example1,
  example2,
  example3,
  example4,
}