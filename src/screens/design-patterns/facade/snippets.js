const mobileEvent = () => (
  `
  var mobileEvent = {
    // ...
    stop: function (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    // ...
  };
  `
);

export {
  mobileEvent,
}