/* eslint-disable no-undef */

import caesarCipher from "./caesarCipher";

test("abcde to be bcdef", () => {
  expect(caesarCipher("abcde", 1)).toBe("bcdef");
});

test("ab cde to be bc def", () => {
  expect(caesarCipher("ab cde", 1)).toBe("bc def");
});

test("ab c.de to be bc d.ef", () => {
  expect(caesarCipher("ab c.de", 1)).toBe("bc d.ef");
});

test("AbcDe to be bcdef", () => {
  expect(caesarCipher("AbcDe", 1)).toBe("bcdef");
});

test("abcde to be cdefg", () => {
  expect(caesarCipher("AbcDe", 2)).toBe("cdefg");
});

test("abcde to be uvwxy", () => {
  expect(caesarCipher("abcde", 20)).toBe("uvwxy");
});
