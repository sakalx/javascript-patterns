const func = () => (
  `
  var scareMe = function () {
    alert("Boo!");
    
    scareMe = function () {
      alert("Double boo!");
    };
  };
`
);

const adding = () => (
  `
  scareMe.property = "properly";
`
);

const assigning = () => (
  `
  var prank = scareMe;
`
);

const usingAsMethod = () => (
  `
  var spooky = {
    boo: scareMe
  };  
`
);

const callingWithNewName = () => (
  `
  prank(); // "Boo!"
  prank(); // "Boo!"
  
  console.log(prank.property); // "properly"
`
);

const callingAsMethod = () => (
  `
  spooky.boo(); // "Boo!"
  spooky.boo(); // "Boo!"
  
  console.log(spooky.boo.property); // "properly"
`
);

const usingSelfDefined = () => (
  `
  scareMe(); // Double boo!
  scareMe(); // Double boo!
  
  console.log(scareMe.property); // undefined
`
);

export {
  func,
  adding,
  assigning,
  usingAsMethod,
  callingWithNewName,
  callingAsMethod,
  usingSelfDefined,
};