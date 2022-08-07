// https://www.npmjs.com/package/jsqr
import jsQR from "jsqr";
// https://www.npmjs.com/package/image-decode
import decode from "image-decode";
import { readFileSync } from "fs";
import { updateGameOfLive, renderOnConsole } from "./lib/game-of-life.js";
import { extractMatrix } from "./lib/extractMatrix.js";

// const input = "I am a pony!";
const { data, width, height } = decode(
  // this one jsQR fails to recognize
  // readFileSync("./assets/photo of a qr code on paper.jpg")
  // readFileSync("./assets/qr-code-in-some-gallery.jpeg")
  readFileSync("./assets/digital2.png")
);
const code = jsQR(data, width, height, {});

if (!code) {
  console.error("Could not detect QR code from input");
  process.exit(1);
}
console.log("Found QR code", code);

let board = extractMatrix(code.extractedMatrix);
setInterval(() => {
  board = updateGameOfLive(board);
  renderOnConsole(board);
}, 500);
