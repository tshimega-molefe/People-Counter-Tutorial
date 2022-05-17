// Console log shortcut:
const log = console.log;

let count = 0;
let countEl = document.getElementById("count");

function increment() {
  count = count + 1;
  countEl.innerText = count;
}
