"use strict";

window.addEventListener("load", start);

let result;
function start() {
  const array = [];
  let counter = 0;
  while (counter < 10) {
    countDelay(counter, array);
    counter++;
  }
}

function countDelay(counter, array) {
  setTimeout(() => {
    array.push(counter);
    console.log(counter, array);
  }, counter * 1000);
}
