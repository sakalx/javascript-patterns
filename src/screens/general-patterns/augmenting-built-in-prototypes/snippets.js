const example = () => (
  `
  if (typeof Object.prototype.myMethod !== "function") {
    Object.prototype.myMethod = function () {
      // implementation...
    };
  }
  `
);

export {example}