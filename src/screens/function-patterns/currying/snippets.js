const define = () => (
  `
  var sayHi = function (who) {
    return "Hello" + (who ? ", " + who : "") + "!";
  };
`
);

const invoke = () => (
  `
  sayHi(); // "Hello!"
  sayHi('world'); // "Hello, world!"
`
);

const apply = () => (
  `
  sayHi.apply(null, ["hello"]); // "Hello, hello!"
  
  var alien = {
    sayHi:function (who) {
      return "Hello" + (who ? ", " + who : "") + "!";
    }
  };
  
  alien.sayHi('world'); // "Hello, world!"
  sayHi.apply(alien, ["humans"]); // "Hello, humans!"
`
);

const efficient = () => (
  `
  sayHi.apply(alien, ["humans"]); // "Hello, humans!"
  sayHi.call(alien, "humans"); // "Hello, humans!
`
);

const add = () => (
  `
  function add(x, y) {
    return x + y;
  }
`
);

const invokeAdd = () => (
  `
  add(5, 4);
`
);

const step1 = () => (
  `
  function add(5, y) {
    return 5 + y;
  }
`
);

const step2 = () => (
  `
  function add(5, 4) {
    return 5 + 4;
  }
`
);

const curriedAdd = () => (
  `
  function add(x, y) {
    var oldx = x, oldy = y;
    
    if (typeof oldy === "undefined") { // partial
      return function (newy) {
        return oldx + newy;
      }
    }
    
    // full application
    return x + y;
  }
`
);

const test = () => (
  `
  typeof add(5); // "function"
  add(3)(4); // 7
`
);

const schonfinkelize = () => (
  `
  var add2000 = add(2000);
  add2000(10); // 2010
  
  function schonfinkelize(fn) {
    var slice = Array.prototype.slice,
        stored_args = slice.call(arguments, 1);
        
    return function () {
      var new_args = slice.call(arguments),
          args = stored_args.concat(new_args);
          
      return fn.apply(null, args);
    };
  }
`
);

const curry = () => (
  `
  function curry(func, minArgs) {
    if (minArgs == undefined) {
      minArgs = 1;
    }
    
    function funcWithArgsFrozen(frozenargs) {
      return function () {
        // could do an optimisation here - if called with no arguments
        // return exactly this function.
        
        var args = Array.prototype.slice.call(arguments);
        var newArgs = frozenargs.concat(args);
        
        if (newArgs.length >= minArgs) {
          return func.apply(this, newArgs);
        } else {
          return funcWithArgsFrozen(newArgs);
        }
      };
    }
    
    return funcWithArgsFrozen([]);
  }
`
);

const plus = () => (
  `
  var plus = curry(function () {
    var result = 0;
    
    for (var i = 0; i < arguments.length; ++i) {
      result += arguments[i];
    }
    
    return result;
  }, 2);
`
);

const minus = () => (
  `
  var minus = curry(function (x) {
    var result = x;
    
    for (var i = 1; i < arguments.length; ++i) {
      result -= arguments[i];
    }
    
    return result;
  }, 2);
`
);

const flip = () => (
  `
  var flip = curry(function (func) {
    return curry(function (a, b) {
      return func(b, a);
    }, 2);
  });
`
);

export {
  define,
  invoke,
  apply,
  efficient,
  add,
  invokeAdd,
  step1,
  step2,
  curriedAdd,
  test,
  schonfinkelize,
  curry,
  plus,
  minus,
  flip,
};