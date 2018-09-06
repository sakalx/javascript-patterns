const pattern = () => (
  `
  function func() {
    var a = 1
      , b = 2
      , sum = a + b
      , myobject = {}
      , i
      , j;
    // function body...
  }
  
  function updateElement() {
    var el = document.getElementById("result")
      , style = el.style;
    // do something with el and style...
  }
  `
);

const preferredWay = () => (
  `
  function func() {
    var a = 1
      , b = 2
      , sum = a + b
      , myobject = {}
      , i
      , j;
    // function body...
  }
  `
);


export {pattern, preferredWay};