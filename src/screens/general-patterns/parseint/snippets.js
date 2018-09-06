const pattern1 = () => (
  `
  var month = "06",
  year = "09";
  
  month = parseInt(month, 10);
  year = parseInt(year, 10);
  `
);

const pattern2 = () => (
  `
  +"08" // result is 8
  Number("08") // 8
  `
);

const pattern3 = () => (
  `
  ("789"|0) // => 789
  ("sds"|0) // => 0
  (8.45|0) // => 8
  ("8.55"|0) // => 8
  `
);

export {
  pattern1,
  pattern2,
  pattern3,
};