const object = () => (
  `
  function object(o) {
    function F() {
    }
    
    F.prototype = o;
    return new F();
  }
  `
);

const inheritFrom = () => (
  `
  var parent = {
    name: "Papa"
  };
  `
);

const newObject = () => (
  `
  var child = object(parent);
  
  // testing
  console.log(child.name); // "Papa"
  `
);

const parentConstructor = () => (
  `
  function Person() {
    // an "own" property
    this.name = "Adam";
  }
  `
);

const propertyAdded = () => (
  `
  Person.prototype.getName = function () {
    return this.name;
  };
  `
);

const newPerson = () => (
  `
  var papa = new Person();
  `
);

const inherit = () => (
  `
  var kid = object(papa);
  `
);

const test = () => (
  `
  console.log(kid.getName()); // "Adam"
  `
);

const inherit2 = () => (
  `
  var kid = object(Person.prototype);
  
  console.log(typeof kid.getName); // "function", because it was in the prototype
  console.log(typeof kid.name); // "undefined", because only the prototype was inherited
  `
);

const addition = () => (
  `
  var child = Object.create(parent);
  
  var child = Object.create(parent, {
    age:{ value:2 } // ECMA5 descriptor
  });
  
  console.log(child.hasOwnProperty("age")); // true
  `
);

export {
  object,
  inheritFrom,
  newObject,
  parentConstructor,
  propertyAdded,
  newPerson,
  inherit,
  test,
  inherit2,
  addition,
}