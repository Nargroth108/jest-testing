export default function caesarCipher(str, key) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  const string = str.toLowerCase();
  const punctuation = [
    " ",
    ".",
    ",",
    "?",
    "!",
    ":",
    ";",
    '"',
    "(",
    ")",
    "[",
    "]",
  ];
  for (let i = 0; i < string.length; i += 1) {
    if (punctuation.includes(string[i])) result += string[i];
    else {
      const index = alphabet.indexOf(string[i]);
      result += alphabet[(index + key) % 26];
    }
  }
  return result;
}
