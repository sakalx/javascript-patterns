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
    Parent.apply(this, arguments);
  }
  
  Child.prototype = new Parent();
  var kid = new Child("Patrick");
  
  console.log(kid.name); // "Patrick"
  console.log(typeof kid.say); // function
  console.log(kid.say()); // Patrick
  console.dir(kid);
  
  delete kid.name;
  console.log(kid.say()); // "Adam"
  `
);

export {
  parentConstructor,
  adding,
  child,
}