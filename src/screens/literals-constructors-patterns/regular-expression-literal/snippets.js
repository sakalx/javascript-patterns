const antipattern = () => (
  `
  var re = new RegExp("\\\\\\\\", "gm");
  `
);

const preferred = () => (
  `
  var re = /\\\\/gm;
  `
);

export {
  antipattern,
  preferred,
}