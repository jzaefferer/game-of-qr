export function extractPixels(data, width) {
  // data = 1D array with r, g, b, a, r, g, b, a, ...
  const result = [];
  let row = [];
  result.push(row);
  for (let i = 0; i <= data.length; i += 4) {
    if ((i / 4) % width === 0) {
      row = [];
      result.push(row);
    }
    const redPixel = data[i];
    row.push(redPixel === 255 ? "0" : "1");
  }
  // must've miscounted somewhere - drop the last line with a single cell
  if (row.length <= 1) {
    result.splice(-1, 1);
  }
  return result;
}
