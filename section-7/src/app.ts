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
// T extends object => adds constraints (Object.assign() requires 2 objects)
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB); // merge 2 objects into 1
}

const mergedObj = merge({ name: "Daniel", hobbies: ['Sports'] }, { age: 32 });
// const mergedObj2 = merge({ name: "Daniel", hobbies: ['Sports'] }, 32); // 32 is not an object. silently fails
console.log(mergedObj);
