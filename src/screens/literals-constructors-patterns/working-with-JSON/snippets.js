const inputJSON = () => (
  `
  var jstr = '{"myKey": "my value"}';
  `
);

const antipattern = () => (
  `
  var data = eval('(' + jstr + ')');
  `
);

const preferred = () => (
  `
  var data = JSON.parse(jstr);

  console.log(data.myKey); // "my value"
  `
);

export {
  inputJSON,
  antipattern,
  preferred,
}