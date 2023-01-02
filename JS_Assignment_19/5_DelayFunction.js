/*
5). Write a function delay that returns a promise. And that promise
should return a setTimeout that calls resolve after 1000ms
*/

let delay = () => {
  return new Promise((resolve) => {
    console.log("before calling resolve");
    setTimeout(() => {
      resolve("resolve");
    }, 1000);
  }).then((res) => {
    console.log(res);
  });
};

delay();
