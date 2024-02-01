/* eslint-disable no-undef */

import analyzeArray from "./analyzeArray";

test.skip("Return average and length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    length: 6,
  });
});

test.skip("Return average, length and min", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    length: 6,
    min: 1,
  });
});

test("Return average, min and max", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    length: 6,
    min: 1,
    max: 8,
  });
});
