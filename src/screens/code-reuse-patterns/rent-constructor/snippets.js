const parentConstructor = () => (
  `
  function Parent(name) {
    this.name = name || 'Adam';
  }
  `
);

const adding = () => (
  `
  Parent.prototype.say = function () {
    return this.name;
  };
  `
);

const child = () => (
  `
  function Child(name) {
    Parent.apply(this, arguments);
  }
  
  var kid = new Child("Patrick");
  console.log(kid.name); // "Patrick"
  `
);

const drawback1 = () => (
  `
  console.log(typeof kid.say); // "undefined"
  `
);

const inheritance = () => (
  `
  function Cat() {
      this.legs = 4;
      
      this.say = function () {
        return "meaowww";
      }
    }

    function Bird() {
      this.wings = 2;
      this.fly = true;
    }

    function CatWings() {
      Cat.apply(this);
      Bird.apply(this);
    }

    var jane = new CatWings();
    console.dir(jane);
`
);

export {
  parentConstructor,
  adding,
  child,
  drawback1,
  inheritance,
}