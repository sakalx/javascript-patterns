const example = () => (
  `
  function inherit(C, P) {
    C.prototype = P.prototype;
  }
  `
);

const parentConstructor = () => (
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
  
  var kid = new Child('Patrick');
  
  console.log(kid.name); // undefined
  console.log(typeof kid.say); // function
  
  kid.name = 'Patrick';
  
  console.log(kid.say()); // Patrick
  console.dir(kid);
  `
);

export {
  example,
  parentConstructor,
  adding,
  child,
}