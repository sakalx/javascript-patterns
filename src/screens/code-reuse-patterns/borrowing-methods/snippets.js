const functionF = () => (
  `
  function f() {
    var args = [].slice.call(arguments, 1, 3);
    return args;
  }
  
  var one = {
    name:'object',
    
    say:function (greet) {
      return greet + ', ' + this.name;
    }
  };
  `
);

const test = () => (
  `
  console.log(one.say('hi')); // "hi, object"
  
  var two = {
    name:'another object'
  };
  `
);

const apply = () => (
  `
  var say = one.say;
  console.log(say('hoho')); // "hoho, undefined"
  `
);

const assigning = () => (
  `
  console.log(one.say.apply(two, ['hello'])); // "hello, another object"
  `
);

const passing = () => (
  `
  var yetanother = {
    name: 'Yet another object',
    method: function (callback) {
      return callback('Hola');
    }
  };
  console.log(yetanother.method(one.say)); // "Hola, undefined"
  
  function bind(o, m) {
    return function () {
      return m.apply(o, [].slice.call(arguments));
    };
  }
  
  var twosay = bind(two, one.say);
  console.log(twosay('yo')); // "yo, another object"
  `
);

const bind = () => (
  `
  if (typeof Function.prototype.bind === 'undefined') {
  
    Function.prototype.bind = function (thisArg) {
      var fn = this,
          slice = Array.prototype.slice,
          args = slice.call(arguments, 1);
          
      return function () {
        return fn.apply(thisArg, args.concat(slice.call(arguments)));
      };
      
    };
  }
  
  var twosay2 = one.say.bind(two);
  console.log(twosay2('Bonjour')); // "Bonjour, another object"
  
  var twosay3 = one.say.bind(two, 'Enchanté');
  console.log(twosay3()); // "Enchanté, another object"
  `
);

export {
  functionF,
  test,
  apply,
  assigning,
  passing,
  bind,
}