const mix = () => (
  `
  function mix() {
    var arg,
        prop, 
        child = {};
        
    for (arg = 0; arg < arguments.length; arg += 1) {
    
      for (prop in arguments[arg]) {
        if (arguments[arg].hasOwnProperty(prop)) {
          child[prop] = arguments[arg][prop];
        }
      }
      
    }
    
    return child;
  }
  `
);

const cake = () => (
  `
  var cake = mix(
      {eggs: 2, large: true},
      {butter: 1, salted: true},
      {flour: '3 cups'},
      {sugar: 'sure!'}
  );
  
  console.dir(cake);
  `
);

export {
  mix,
  cake,
}