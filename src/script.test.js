const esmImport = require("esm")(module);
const xxx = esmImport("../src/script2");

test("whatever", () => {
  xxx.foo();
  expect(1 + 1).toBe(2);
});

// test("saveColorsToLocalStorage", () => {
//   window.colors = ["#111111"];

//   saveColorsToLocalStorage();
// });
