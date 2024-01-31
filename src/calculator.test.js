/* eslint-disable no-undef */

import calculator from "./calculator";

test("1 plus 2 equals 3", () => {
  expect(calculator().add(1, 2)).toBe(3);
});

test("6 minus 2 equals 4", () => {
  expect(calculator().substract(6, 2)).toBe(4);
});

test("3 times 2 equals 6", () => {
  expect(calculator().multiply(3, 2)).toBe(6);
});

test("8 divided by 2 equals 4", () => {
  expect(calculator().divide(8, 2)).toBe(4);
});
