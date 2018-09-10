const findNodes = () => (
  `
  var complexComputation = function () { 
    /* do some complex stuff and return a node */
  };
  
  var findNodes = function (callback) {
    var nodes = [];
    var node = complexComputation();
    
    // call if callback is callable
    if (typeof callback === "function") {
      callback(node);
    }
    
    nodes.push(node);
    return nodes;
  };
  `
);

const hide = () => (
  `
  var hide = function (node) {
    node.style.display = "none";
  };
  `
);

const hiddenNodes = () => (
  `
  var hiddenNodes = findNodes(hide);
  `
);

const blockNodes = () => (
  `
  var blockNodes = findNodes(function (node) {
    node.style.display = 'block';
  });
  `
);

export {
  findNodes,
  hide,
  hiddenNodes,
  blockNodes,
};