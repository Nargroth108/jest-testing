/* eslint-disable no-undef */
import capitalize from "./capitalize";

test("convert abc to ABC", () => {
  expect(capitalize("abc")).toBe("ABC");
});
