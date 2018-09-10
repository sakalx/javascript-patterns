const constructor = () => (
  `
  function Waffle() {
    this.tastes = "yummy";
  }
  `
);

const antipattern = () => (
  `
  var good_morning = Waffle();

  console.log(typeof good_morning); // "undefined"
  console.log(window.tastes); // "yummy"
  `
);

const preferred1 = () => (
  `
  var good_morning = new Waffle();

  console.log(typeof good_morning); // "object"
  console.log(good_morning.tastes); // "yummy"
  `
);

const preferred2 = () => (
  `
  function Waffle() {
    if (!(this instanceof Waffle)) {
      return new Waffle();
    }

    this.tastes = "yummy";
  }
  
  var good_morning = new Waffle();
  var good_evening = Waffle();
  
  console.log(typeof good_morning); // "object"
  console.log(good_morning.tastes); // "yummy"
  console.log(typeof good_evening); // "object"
  console.log(good_evening.tastes); // "yummy"
  `
);

export {
  constructor,
  antipattern,
  preferred1,
  preferred2,
}