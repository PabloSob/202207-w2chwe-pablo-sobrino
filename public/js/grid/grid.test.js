import Grid from "./Grid.js";

describe("Given a function Grid", () => {
  describe("When it receives the value of 2 for columns", () => {
    test("Then it should return twice the following array: [Bacteria{}]", () => {
      const expectedResult = {
        columns: 2,
        /*  rows: 0, */
        boxes: [
          {
            isAlive: false,
            positionY: undefined,
            positionX: undefined,
          },
          {
            isAlive: false,
            positionY: undefined,
            positionX: undefined,
          },
        ],
      };

      const receivedResult = new Grid(2);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
