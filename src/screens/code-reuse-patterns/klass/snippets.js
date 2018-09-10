const klass = () => (
  `
  var klass = function (Parent, props) {
    var Child, F, i;
    
    // 1.
    // new constructor
    Child = function () {
      if (Child.uber && Child.uber.hasOwnProperty("__construct")) {
        Child.uber.__construct.apply(this, arguments);
      }
      if (Child.prototype.hasOwnProperty("__construct")) {
        Child.prototype.__construct.apply(this, arguments);
      }
    };
    
    // 2.
    // inherit
    Parent = Parent || Object;
    F = function () {
    };
    
    F.prototype = Parent.prototype;
    
    Child.prototype = new F();
    Child.uber = Parent.prototype;
    Child.prototype.constructor = Child;
    
    // 3.
    // add implementation methods
    for (i in props) {
      if (props.hasOwnProperty(i)) {
        Child.prototype[i] = props[i];
      }
    }
    
    // return the "class"
    return Child;
  };
  `
);

const man = () => (
  `
  var Man = klass(null, {
  
    __construct: function (what) {
      console.log("Man's constructor");
      this.name = what;
    },
    
    getName: function () {
      return this.name;
    }
    
  });
  
  var first = new Man('Adam'); // logs "Man's constructor"
  first.getName(); // "Adam"
  `
);

const superMan = () => (
  `
  var SuperMan = klass(Man, {
  
    __construct: function (what) {
      console.log("SuperMan's constructor");
    },
    
    getName: function () {
      var name = SuperMan.uber.getName.call(this);
      return "I am " + name;
    }
    
  });
  
  var clark = new SuperMan('Clark Kent');
  clark.getName(); // "I am Clark Kent"
  
  console.log(clark instanceof Man); // true
  console.log(clark instanceof SuperMan); // true
  `
);

export {
  klass,
  man,
  superMan,
}