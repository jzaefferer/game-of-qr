// https://www.npmjs.com/package/qrcode
import QRCode from "qrcode";
// https://www.npmjs.com/package/jsqr
import jsQR from "jsqr";
// https://www.npmjs.com/package/image-decode
import decode from "image-decode";
import { readFileSync } from "fs";
import { updateGameOfLive, renderOnConsole } from "./lib/game-of-life.js";
import { extractPixels } from "./lib/extract-pixels.js";

// const input = "I am a pony!";
const { data, width, height } = decode(
  // readFileSync("./assets/photo of a qr code on paper.jpg")
  readFileSync("./assets/qr-code-in-some-gallery.jpeg")
  // readFileSync("./assets/digital2.png")
  // readFileSync("./assets/re-encoded.png")
  // readFileSync("./assets/re-encoded2.png")
);
const code = jsQR(data, width, height, {});
// console.log(code);

if (!code) {
  console.error("Could not detect QR code from input");
  process.exit(1);
}
console.log("Found QR code", code);

// switch to this to see the QR code before png decoding and extraction
// QRCode.toString(
//   code.data,
//   { type: "terminal", version: code.version },
//   function (err, url) {
//     console.log(url);
//   }
// );

// QRCode.toDataURL(input, { scale: 1, version: code.version }, function (err, url) {
//   const { data, width, height } = decode(url);
//   let board = extractPixels(data, width);

//   setInterval(() => {
//     board = updateGameOfLive(board);
//     renderOnConsole(board);
//   }, 500);
// });

function extractMatrix(matrix) {
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

let board = extractMatrix(code.extractedMatrix);
setInterval(() => {
  board = updateGameOfLive(board);
  renderOnConsole(board);
}, 500);
