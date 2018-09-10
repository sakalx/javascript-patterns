const object = () => (
  `
  var obj = {
    myprop: 'my value'
  };
  
  var obj2 = {
    myprop: 'my value'
  };
  
  obj === obj2; // false
  obj == obj2;  // false
  `
);

const universe = () => (
  `
  function Universe() {
  
    // do we have an existing instance?
    if (typeof Universe.instance === 'object') {
      return Universe.instance;
    }
    
    // proceed as normal
    this.start_time = 0;
    this.bang = "Big";
    
    // cache
    Universe.instance = this;
    
    // implicit return:
    // return this;
  }
  `
);

const testing = () => (
  `
  var uni = new Universe();
  var uni2 = new Universe();
  
  uni === uni2; // true
  `
);

const instance1 = () => (
  `
  function Universe() {
  
    // the cached instance
    var instance = this;
    
    // proceed as normal
    this.start_time = 0;
    this.bang = "Big";
    
    // rewrite the contructor
    Universe = function () {
      return instance;
    };
  }
  `
);

const instance2 = () => (
  `
  function Universe() {
  
    // the cached instance
    var instance;
    
    // rewrite the constructor
    Universe = function Universe() {
      return instance;
    };
    
    // carry over the prototype properties
    Universe.prototype = this;
    
    // the instance
    instance = new Universe();
    
    // reset the constructor pointer
    instance.constructor = Universe;
    
    // all the functionality
    instance.start_time = 0;
    instance.bang = "Big";
    
    return instance;
  }
  `
);

const adding1 = () => (
  `
  Universe.prototype.nothing = true;
  
  var uni = new Universe();
  `
);

const adding2 = () => (
  `
  Universe.prototype.everything = true;
  
  var uni2 = new Universe();
  `
);

const originalPrototype = () => (
  `
  uni.nothing; // true
  uni2.nothing; // true
  uni.everything; // true
  uni2.everything; // true
  `
);

const right = () => (
  `
  uni.constructor.name; // "Universe"
  uni.constructor === Universe; // true
  
  var Universe;
  
  (function () {
    var instance;
    
    Universe = function Universe() {
      if (instance) {
        return instance;
      }
      
      instance = this;
      
      // all the functionality
      this.start_time = 0;
      this.bang = "Big";
    };
  }());
  `
);

export {
  object,
  universe,
  testing,
  instance1,
  instance2,
  adding1,
  adding2,
  originalPrototype,
  right,
}