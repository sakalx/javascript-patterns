const example = () => (
  `
  var constant = (function () {
    var constants = {},
        ownProp = Object.prototype.hasOwnProperty,
        allowed = {
          string:1,
          number:1,
          boolean:1
        },
        prefix = (Math.random() + "_").slice(2);
        
    return {
      set: function (name, value) {
        if (this.isDefined(name)) {
          return false;
        }
        if (!ownProp.call(allowed, typeof value)) {
          return false;
        }
        
        constants[prefix + name] = value;
        return true;
      },
      
      isDefined: function (name) {
        return ownProp.call(constants, prefix + name);
      },
      
      get: function (name) {
        if (this.isDefined(name)) {
          return constants[prefix + name];
        }
        
        return null;
      }
    };
  }());
  `
);

const checkDefined = () => (
  `
  console.log(constant.isDefined("maxWidth")); // false
  `
);

const defined = () => (
  `
  console.log(constant.set("maxWidth", 480)); // true
  `
);

const checkAgain = () => (
  `
  console.log(constant.isDefined("maxWidth")); // true
  `
);

const attempt = () => (
  `
  console.log(constant.set("maxWidth", 320)); // false
  `
);

const intact = () => (
  `
  console.log(constant.get("maxWidth")); // 480
  `
);

export {
  example,
  checkDefined,
  defined,
  checkAgain,
  attempt,
  intact,
}