const example = () => (
  `
  function inherit(C, P) {
      C.prototype = new P();
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

const empty = () => (
  `
  function Child(name) {
  
  }
  `
);

const inheritance = () => (
  `
  inherit(Child, Parent);
  
  var kid = new Child();
  console.log(kid.say()); // "Adam"
  `
);

const drawback1 = () => (
  `
  var kiddo = new Child();
  kiddo.name = "Patrick";
  
  console.log(kiddo.say()); // "Patrick"
  `
);

const drawback2 = () => (
  `
  var s = new Child('Seth');
  
  console.log(s.say()); // "Adam"
  `
);

export {
  example,
  parentConstructor,
  adding,
  empty,
  inheritance,
  drawback1,
  drawback2,
}