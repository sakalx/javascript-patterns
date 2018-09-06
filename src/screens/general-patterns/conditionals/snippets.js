const normal = () => (
  `
  if (type === 'foo' || type === 'bar') {
  
  }
  `
);

const alternative1 = () => (
  `
  if (/^(foo|bar)$/.test(type)) {

  }
  `
);

const alternative2 = () => (
  `
  if (({foo: 1, bar: 1})[type]) {

  }
  `
);

const alternative3 = () => (
  `
  if (value < 6) {
    if (value < 3) {
      if (value == 0) {
        return result0;
      } else if (value == 1) {
        return result1;
      } else {
        return result2;
      }
    } else {
      if (value == 3) {
        return result3;
      } else if (value == 4) {
        return result4;
      } else {
        return result5;
      }
    }
  } else {
    if (value < 8) {
      if (value == 6) {
        return result6;
      } else {
        return result7;
      }
    } else {
      if (value == 8) {
        return result8;
      } else if (value == 9) {
        return result9;
      } else {
        return result10;
      }
    }
  }
  `
);

const alternative4 = () => (
  `
  if (value == 0) {
    return result0;
  } else if (value == 1) {
    return result1;
  } else if (value == 2) {
    return result2;
  }

  // define the array of results
  const results = [result0, result1, result2];
  // return the correct result
  return results[value];
  `
);

const alternative5 = () => (
  `
  let
    type = 'foo',
    type2 = 'bar',
    result = 0;

  type == 'foo' && result++;
  console.log(result); // 1

  !type == 'foo' || result++;
  console.log(result); // 2

  type == 'foo' && type2 == 'bar' && result++;
  console.log(result); //3

  type == 'foo' && type2 == 'bar' && result == 3 && (result = 0); //parentheses avoid "invalid assignment left-hand side" error
  console.log(result); //0

  type == 'OOF' || result++; //equivalent: type != 'OOF' && result++;
  console.log(result); //1
  `
);

export {
  normal,
  alternative1,
  alternative2,
  alternative3,
  alternative4,
  alternative5,
};