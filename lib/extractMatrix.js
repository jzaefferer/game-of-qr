export function extractMatrix(matrix) {
  // console.log(code);
  const result = [];
  let row = [];
  result.push(row);
  for (let i = 0; i <= matrix.data.length; i++) {
    if (i % matrix.width === 0) {
      row = [];
      result.push(row);
    }
    row.push(matrix.data[i] === 1 ? "1" : "0");
  }
  // must've miscounted somewhere - drop the last line with a single cell
  if (row.length <= 1) {
    result.splice(-1, 1);
  }
  return result;
}
