const constructor = () => (
  `
  var Gadget = function () {
  };
  `
);

const staticMethod = () => (
  `
  Gadget.isShiny = function () {
    return "you bet";
  };
  `
);

const normalMethod = () => (
  `
  Gadget.prototype.setPrice = function (price) {
    this.price = price;
  };
  `
);

const callingStatic = () => (
  `
  console.log(Gadget.isShiny()); // "you bet"
  `
);

const creatingInstance = () => (
  `
  var iphone = new Gadget();
  iphone.setPrice(500);
  
  console.log(typeof Gadget.setPrice); // "undefined"
  console.log(typeof iphone.isShiny); // "undefined"
  
  Gadget.prototype.isShiny = Gadget.isShiny;
  console.log(iphone.isShiny()); // "you bet"
  `
);


const constructor2 = () => (
  `
  var Gadget = function (price) {
    this.price = price;
  };
  `
);

const staticMethod2 = () => (
  `
  Gadget.isShiny = function () {
    // this always works
    var msg = "you bet";
    
    if (this instanceof Gadget) {
      // this only works if called non-statically
      msg += ", it costs $" + this.price + '!';
    }
    
    return msg;
  };
  `
);

const normalMethod2 = () => (
  `
  Gadget.prototype.isShiny = function () {
    return Gadget.isShiny.call(this);
  };
  
  console.log(Gadget.isShiny()); // "you bet"
  
  var a = new Gadget('499.99');
  console.log(a.isShiny()); // "you bet, it costs $499.99!"
  };
  `
);

const method1 = () => (
  `
  var Gadget = (function () {
    // static variable/property
    var counter = 0;
    
    // returning the new implementation
    // of the constructor
    return function () {
      console.log(counter += 1);
    };
    
  }()); // execute immediately
  
  var g1 = new Gadget(); // logs 1
  var g2 = new Gadget(); // logs 2
  var g3 = new Gadget(); // logs 3
  `
);

const method2 = () => (
  `
  var Gadget = (function () {
    // static variable/property
    var counter = 0,
        NewGadget;
        
    // this will become the
    // new constructor implementation
    NewGadget = function () {
      counter += 1;
    };
    
    // a priviledged method
    NewGadget.prototype.getLastId = function () {
      return counter;
    };
    
    // overwrite the constructor
    return NewGadget;
  }()); // execute immediately
  
  
  var iphone = new Gadget();
  iphone.getLastId(); // 1
  
  var ipod = new Gadget();
  ipod.getLastId(); // 2
  
  var ipad = new Gadget();
  ipad.getLastId(); // 3
  `
);

export {
  constructor,
  staticMethod,
  normalMethod,
  callingStatic,
  creatingInstance,
  constructor2,
  staticMethod2,
  normalMethod2,
  method1,
  method2,
}