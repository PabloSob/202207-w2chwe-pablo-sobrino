import Board from "./grid";

describe("Given a function Board()", () => {
  describe("When it receives the value of 3", () => {
    test("It should return an array with 9 arrays with 1 values of 0", () => {
      const expectedResult = [0, 0, 0, 0, 0, 0, 0, 0, 0];

      const receivedResult = Board(3);

      expect(receivedResult).toStrictEqual(expectedResult);
    });
  });
});
