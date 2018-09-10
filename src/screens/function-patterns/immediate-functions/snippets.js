const example = () => (
  `
  (function () {
    console.log('watch out!');
  }());
`
);

const alternative1 = () => (
  `
  !function () {
    console.log('watch out!');
  }();
`
);

const alternative2 = () => (
  `
  +function () {
    console.log('watch out!');
  }();
`
);

const crockfords = () => (
  `
  (function () {
    console.log('watch out!');
  }());
`
);


export {
  example,
  alternative1,
  alternative2,
  crockfords,
};