const seed = `
01100000000000
01100000000000
00000000111000
00000000000000
00000000000000
00111000000000
01110000000000
00000000000000
00000000100000
00000010100000
00010001100000
00101000000000
00010000000000
00000000000000
00000000000000
`;

// [
//   [
//     '0', '1', '1', '0',
//     '0', '0', '0', '0',
//     '0', '0', '0', '0',
//     '0', '0'
//   ],
//   [
//     '0', '1', '1', '0',
//     '0', '0', '0', '0',
//     '0', '0', '0', '0',
//     '0', '0'
//   ],
// console.log(board);

import { updateGameOfLive, renderOnConsole } from "./lib/game-of-life.js";

console.log("Game of life!");
let board = seed
  .trim()
  .split("\n")
  .map((i) => i.split(""));
setInterval(() => {
  board = updateGameOfLive(board);
  renderOnConsole(board);
}, 500);
