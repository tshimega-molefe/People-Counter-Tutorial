// Console log shortcut:
const log = console.log;

let count = 0;

function increment() {
  count = count + 1;
  document.getElementById("count").innerText = count;
}
console.log(count);
