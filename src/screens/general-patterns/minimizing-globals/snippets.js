const myGlobal = () => (
  `
  myGlobal = "hello"; // antipattern
  
  console.log(myGlobal); // "hello"
  console.log(window.myGlobal); // "hello"
  console.log(window["myGlobal"]); // "hello"
  console.log(this.myGlobal); // "hello"
`
);

const prefix_myGlobal = () => (
  `
  prefix_myGlobal = {
      method: function () {},
      property: "hello"
  }
`
);

export {
  myGlobal,
  prefix_myGlobal,
}
