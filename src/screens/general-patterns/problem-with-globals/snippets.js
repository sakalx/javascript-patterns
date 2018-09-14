const antipattern1 = () => (
  `
  function sum(x, y) {
    // implied global
    result = x + y;
    
    return result;
  }
`
);

const preferred1 = () => (
  `
  function sum(x, y) {
    // a variable declared inside of a function is local to that function and not available outside the function
    var result = x + y;
    
    return result;
  }
`
);

const antipattern2 = () => (
  `
  function foo() {
    var a = b = 0;
    // ...
  }
`
);

const preceding = () => (
  `
  var a = (b = 0);
`
);

const preferred2 = () => (
  `
  function foo() {
    var a, b;
    // ...
    a = b = 0; // both local
  }
`
);

export {
  antipattern1,
  preferred1,
  antipattern2,
  preceding,
  preferred2,
}