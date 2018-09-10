const antipattern1 = () => (
  `
  var property = "name",
      obj = {name: "John"};
      
  alert(eval("obj." + property));
  `
);

const preferred1 = () => (
  `
  alert(obj[property]);
  `
);

const antipattern2 = () => (
  `
  setTimeout("myFunc()", 1000);
  setTimeout("myFunc(1, 2, 3)", 1000);
  `
);

const preferred2 = () => (
  `
  setTimeout(myFunc, 1000);
  
  setTimeout(function () {
    myFunc(1, 2, 3);
  }, 1000);
  
  // in supported browsers (i.e. not IE)
  setTimeout(myFunc, 1000, 1, 2, 3);
  `
);

export {
  antipattern1,
  preferred1,
  antipattern2,
  preferred2,
}