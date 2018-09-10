const antipattern = () => (
  `
  wontchange = "global"; // global variable
  willchange = "global"; // global variable
  
  function func_bad() {
    alert(wontchange); // "global"
    alert(willchange); // "undefined" due to the var below
    
    var willchange = "local"; // This rescopes willchange inside this function
    alert(willchange); // "local"
  }

  func_bad();
  `
);

const pattern = () => (
  `
  wontchange = "global"; // global variable
  willchange = "global"; // global variable
  
  function func() {
    // This still rescopes, but it is a lot more explicit
    var willchange; // same as -> var willchange = undefined;
    
    alert(wontchange); // "global"
    alert(willchange); // "undefined"
    
    willchange = "local";
    alert(willchange); // "local"
  }

  func();
`
);

export {
  antipattern,
  pattern,
}