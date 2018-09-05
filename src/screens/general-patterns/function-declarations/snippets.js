const declaration = () => (
  `function getData() {}`
);

const preferred = () => (
  `const getData = function() {};`
);

const namedExpression = () => (
  `const getData = function getData() {};`
);

const namedExpressionF = () => (
  `const getData = function getDataF() {};`
);

export {declaration, preferred, namedExpression, namedExpressionF};