//1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
//2. Any live cell with two or three live neighbours lives on to the next generation.
//3. Any live cell with more than three live neighbours dies, as if by overpopulation.
//4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

export function updateGameOfLive(board) {
  // stupid copy
  const nextBoard = JSON.parse(JSON.stringify(board));
  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const neighbours = getNeighbors(board, rowIndex, colIndex);
      // underpopulation or overpopulation
      if (col === "1" && (neighbours < 2 || neighbours > 3)) {
        nextBoard[rowIndex][colIndex] = "0";
      }
      // reproduction
      if (col === "0" && neighbours === 3) {
        nextBoard[rowIndex][colIndex] = "1";
      }
    });
  });
  return nextBoard;
}

function getNeighbors(board, rowIndex, colIndex) {
  let alive = 0;
  for (let col = -1; col <= 1; col++) {
    for (let row = -1; row <= 1; row++) {
      if (col === 0 && row === 0) {
        continue;
      }
      const r = rowIndex + row;
      const c = colIndex + col;

      if (
        board[r] !== undefined &&
        board[r][c] !== undefined &&
        parseInt(board[r][c])
      ) {
        alive += 1;
      }
    }
  }
  return alive;
}

// TODO check how the qrcode lib renders for the terminal - that's much cleaner
export function renderOnConsole(board) {
  const black = "⬛️";
  // const black = "👻";
  const white = "⬜️";
  const boardString = board
    .map((col) => col.join(" ").replace(/0/g, white).replace(/1/g, black))
    .join("\n");
  console.clear();
  console.log(boardString);
  console.log("");
}
