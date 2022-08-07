import { readFileSync } from "fs";

// const file = "./assets/digital qr code for wikipedia.png";
const file = "./assets/digital2.png";
// const output = readFileSync(file);
// console.log(output);

// import PNG from "png-js";
// // var PNG = require("png-js");
// var myimage = new PNG(file);

// var width = myimage.width;
// var height = myimage.height;

// myimage.decode(function (pixels) {
//   console.log("pixels", pixels);
//   //Pixels is a 1D array containing pixel data
// });

import decode from "image-decode";
const { data, width, height } = decode(readFileSync(file));
// some pixels look like this: 84,  84,  84, 255
// generally how to map actual pixels to visible-chunky QR "pixels"?
console.log(width, height, data.slice(21040));
