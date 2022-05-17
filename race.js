const log = console.log;

let completedLaps = 0;

function increment() {
  completedLaps = completedLaps + 1;
}

increment();
increment();
increment();

log(completedLaps);
