const accessToGlobalObject = () => (
  `
  var global = (function (g) {
    return g;
  })(this);
`
);


export {
  accessToGlobalObject,
};