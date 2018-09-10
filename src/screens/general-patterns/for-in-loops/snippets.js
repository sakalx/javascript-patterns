const object = () => (
  `
  var man = {
    hands: 2,
    legs: 2,
    heads: 1
  };
  `
);

const addedToAll = () => (
  `
  if (typeof Object.prototype.clone === 'undefined') {
    Object.prototype.clone = function () {
    };
  }
  `
);

const antipattern = () => (
  `
  for (var i in man) {
    console.log(i, ":", man[i]);
  }
  
  /*
   * result in the console
   * hands: 2
   * legs: 2
   * heads: 1
   * clone: function()
   */
  `
);

const preferred1 = () => (
  `
  for (var i in man) {
    if (man.hasOwnProperty(i)) { // filter
      console.log(i, ":", man[i]);
    }
  }
  
  /*
   * result in the console
   * hands: 2
   * legs: 2
   * heads: 1
   */
  `
);

const preferred2 = () => (
  `
  for (var i in man) {
    if (Object.prototype.hasOwnProperty.call(man, i)) { // filter
      console.log(i, ":", man[i]);
    }
  }
  `
);

const preferred3 = () => (
  `
	var i,
      hasOwn = Object.prototype.hasOwnProperty;
      
  for (i in man) {
    if (hasOwn.call(man, i)) { // filter
      console.log(i, ":", man[i]);
    }
  }
  `
);

const preferred4 = () => (
  `
  if (Object.keys(man).length > 0){
       for (var item in man)
     console.log(item,':',man[item]);
  } else { 
      console.log('Empty Object');
      }
  
  /*	
   * hands: 2
   * legs: 2
   * heads: 1
   * clone: function() {
   *		    }
   */
  `
);

export {
  object,
  addedToAll,
  antipattern,
  preferred1,
  preferred2,
  preferred3,
  preferred4,
}