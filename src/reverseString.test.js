/* eslint-disable no-undef */

import reverseString from "./reverseString";

test("convert abc to cba", () => {
  expect(reverseString("abc")).toBe("cba");
});
