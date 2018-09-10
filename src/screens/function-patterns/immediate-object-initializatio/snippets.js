const pattern = () => (
  `
  ({
    // here you can define setting values
    // a.k.a. configuration constants
    maxWidth: 600,
    maxHeight: 400,
    
    // you can also define utility methods
    gimmeMax: function () {
      return this.maxWidth + "x" + this.maxHeight;
    },
    
    // initialize
    init: function () {
      console.log(this.gimmeMax());
      
      // more init tasks...
    }
  }).init();
`
);


export {
  pattern,
};