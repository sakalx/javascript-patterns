const tree = () => (
  `
  var tree = {};
  
  tree.decorate = function () {
    console.log('Make sure the tree won\\'t fall');
  };
  `
);

const getDecorator = () => (
  `
  tree.getDecorator = function (deco) {
    tree[deco].prototype = this;
    
    return new tree[deco];
  };
  `
);

const redBalls = () => (
  `
  tree.RedBalls = function () {
    this.decorate = function () {
    
      this.RedBalls.prototype.decorate();
      console.log('Put on some red balls');
    }
  };
  `
);

const blueBalls = () => (
  `
  tree.BlueBalls = function () {
    this.decorate = function () {
    
      this.BlueBalls.prototype.decorate();
      console.log('Add blue balls');
    }
  };
  `
);

const angel = () => (
  `
  tree.Angel = function () {
    this.decorate = function () {
    
      this.Angel.prototype.decorate();
      console.log('An angel on the top');
    }
  };
  `
);

const invoke = () => (
  `
  tree = tree.getDecorator('BlueBalls');
  tree = tree.getDecorator('Angel');
  tree = tree.getDecorator('RedBalls');
  tree.decorate();
  `
);

export {
  tree,
  getDecorator,
  redBalls,
  blueBalls,
  angel,
  invoke,
}