// const names: Array<string> = []; // string[]
// // generic types = flexible

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve(10); // has to be string
//     resolve('This is done!');
//   }, 2000);
// });

// promise.then(data => {
//   data.split(' '); // can call string method
// })

// creating a generic function
// object is a highly unspecific type
// T and U can be of any type.
// TS can now see that merge returns intersection of T & U
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB); // merge 2 objects into 1
}

const mergedObj = merge({ name: "Daniel", hobbies: ['Sports'] }, { age: 32 });
console.log(mergedObj);
