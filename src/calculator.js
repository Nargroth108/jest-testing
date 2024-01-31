export default function calculator() {
  function add(num1, num2) {
    const result = num1 + num2;
    return result;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }

  function substract(num1, num2) {
    return num1 - num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  return { add, substract, divide, multiply };
}
