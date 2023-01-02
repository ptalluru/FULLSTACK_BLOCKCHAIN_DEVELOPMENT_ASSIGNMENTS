/*
2). Write a sleep function using a promise in javascript?
*/
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

sleep(1000);
