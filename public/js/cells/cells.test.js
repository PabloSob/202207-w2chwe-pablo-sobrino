import Bacteria from "./Cells.js";

describe("Given a constructor function", () => {
  describe("When it's called and receives any value", () => {
    test("It should return an object that have a default value 'false' to its property 'isAlive'", () => {
      const expectedResult = { isAlive: false };

      const receivedResult = new Bacteria();

      expect(expectedResult).toEqual(receivedResult);
    });
  });
});
