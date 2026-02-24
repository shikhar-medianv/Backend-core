// Event Loop


console.log("Start")

setTimeout(() => {
  console.log("Inside setTimeout")
}, 0);

Promise.resolve().then(() => {
  console.log("Inside Promise")
});

console.log("End")

// console.log("Start") executes first.
// setTimeout schedules its callback but does not execute it immediately.
// Promise.resolve().then() is placed in the microtask queue and executes before the callback queue.
// Promise Resolved appears before setTimeout Callback due to microtask priority.
