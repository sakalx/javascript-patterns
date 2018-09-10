const antipattern = () => (
  `
  var a = new Array();
  `
);

const preferred = () => (
  `
  var a = [];
  `
);


export {
  antipattern,
  preferred,
}