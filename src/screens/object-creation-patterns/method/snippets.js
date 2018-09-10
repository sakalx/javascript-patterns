const example1 = () => (
  `
  if (typeof Function.prototype.method !== "function") {
				Function.prototype.method = function (name, implementation) {
					this.prototype[name] = implementation;
					
					return this;
				};
			}
  `
);

const example2 = () => (
  `
  var Person = function (name) {
        this.name = name;
      }
      .method('getName',
          function () {
          
            return this.name;
          })
      .method('setName', function (name) {
        this.name = name;
        
        return this;
      });
  `
);

const example3 = () => (
  `
  var a = new Person('Adam');
  
  console.log(a.getName()); // 'Adam'
  console.log(a.setName('Eve').getName()); // 'Eve'
  `
);

export {
  example1,
  example2,
  example3,
}