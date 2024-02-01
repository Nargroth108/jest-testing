export default function analyzeArray(array) {
  const { length } = array;
  const average = array.reduce((a, b) => a + b, 0) / length;
  //   const sortedArray = array.sort((a, b) => (a > b ? 1 : -1));
  const min = Math.min(...array);
  //   const min = sortedArray[0];
  const max = Math.max(...array);
  return { average, length, min, max };
}
