const antipattern = () => (
  `
  var inspect_me = 0,
      result = '';
      
  switch (inspect_me) {
  case 0:
    result = "zero";
    break;
  case 1:
    result = "one";
    break;
  default:
    result = "unknown";
  }
  `
);

const preferred1 = () => (
  `
  var results = {
    0: "zero",
    1: "one"
  };
  `
);

const preferred2 = () => (
  `
  var resultFuncs = {
    0: function () {
      //some code for "zero" case
      return "zero";
    },
    1: function () {
      //some code for one case
      return "one";
    }
  };
  
  result = (resultFuncs[inspect_me] || function () {
    //some code for default case
    return "unknown";
  })();
  `
);

export {antipattern, preferred1, preferred2}