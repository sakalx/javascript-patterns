const antipattern = () => (
  `
  var car = new Object();
  car.goes = "far";
  `
);

const preferred = () => (
  `
  var car = {goes:"far"};
  `
);

const primitiveString = () => (
  `
  var car = new Object();
  car.goes = "far";
  `
);

const primitiveWrapper = () => (
  `
  var car = {goes:"far"};
  `
);

export {
  antipattern,
  preferred,
  primitiveString,
  primitiveWrapper,
}