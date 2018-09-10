const example = () => (
  `
  function Gadget() {
  
      // private member
      var name = 'iPod';
      
      // privileged function
      this.getName = function () {
        return name;
      };
    }
    
  var toy = new Gadget();
  `
);

const undefined = () => (
  `
  console.log(toy.name); // undefined
  `
);

const publicMethod = () => (
  `
  console.log(toy.getName()); // "iPod" 
  `
);

const object = () => (
  `
  var bob = (function () {
  
      // private members
      var name = "Bob";
      
      // implement the public interface
      var person = {
      
        // public method
        getName:function () {
          return name;
        }
      };
      
      return person;
    })();
    
    console.log(bob.getName()); // "Bob"
  `
);

export {
  example,
  undefined,
  publicMethod,
  object,
}