const antipattern = () => (
  `
  var zero = 0;
  
  if (zero == false) {
    // this block is executed...
  }
`
);

const preferred = () => (
  `
  var zero = 0;
  
  if (zero === false) {
    // not executing because zero is 0, not false
  }
`
);

export {
  antipattern,
  preferred,
}