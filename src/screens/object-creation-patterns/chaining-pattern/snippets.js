const example = () => (
  `
  var obj = {
    value:1,
    
    increment:function () {
      this.value += 1;
      return this;
    },
    
    add:function (v) {
      this.value += v;
      return this;
    },
    
    shout:function () {
      console.log(this.value);
    }
  };
  `
);

const methodCall = () => (
  `
  obj.increment().add(3).shout(); // 5
  `
);

export {
  example,
  methodCall,
}