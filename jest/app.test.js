const { add, subtract } = require("./app"); // assuming your functions are in app.js

describe("add function", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("adds -1 + 1 to equal 0", () => {
    expect(add(-1, 1)).toBe(0);
  });
});

describe("subtract function", () => {
  test("subtracts 3 - 2 to equal 1", () => {
    expect(subtract(3, 2)).toBe(1);
  });

  test("subtracts 10 - 5 to equal 5", () => {
    expect(subtract(10, 5)).toBe(5);
  });
});
