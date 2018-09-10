const basic = () => (
  `
  function inherit(C, P) {
    var F = function () {
    };
    
    F.prototype = P.prototype;
    C.prototype = new F();
  }
  `
);

const superclass = () => (
  `
  function inherit(C, P) {
    var F = function () {};
    
    F.prototype = P.prototype;
    C.prototype = new F();
    C.uber = P.prototype;
  }
  `
);

const resetting = () => (
  `
  function inherit(C, P) {
    var F = function () {
    };
    
    F.prototype = P.prototype;
    C.prototype = new F();
    C.uber = P.prototype;
    C.prototype.constructor = C;
  }
  `
);

const closure1 = () => (
  `
  var inherit = (function () {
    var F = function () {
    };
    
    return function (C, P) {
      F.prototype = P.prototype;
      C.prototype = new F();
      C.uber = P.prototype;
      C.prototype.constructor = C;
    }
    
  }());
  `
);

const closure2 = () => (
  `
  function Parent(name) {
    this.name = name || 'Adam';
  }
  `
);

const adding = () => (
  `
  Parent.prototype.say = function () {
    return this.name;
  };
  `
);

const child = () => (
  `
  function Child(name) {
  }
  
  inherit(Child, Parent);
  
  var kid = new Child();
  
  console.log(kid.name); // undefined
  console.log(typeof kid.say); // function
  
  kid.name = 'Patrick';
  
  console.log(kid.say()); // Patrick
  console.log(kid.constructor.name); // Child
  console.log(kid.constructor === Parent); // false
  `
);

export {
  basic,
  superclass,
  resetting,
  closure1,
  closure2,
  adding,
  child,
}