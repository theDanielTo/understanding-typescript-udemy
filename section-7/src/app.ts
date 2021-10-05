// const names: Array<string> = []; // string[]
// generic types = flexible. you don't care what type the generic function/class uses

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

interface Lengthy {
  length: number;
}

// generic function with explicit return types
// <T> makes element flexible
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 elements.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

// constraint: T is object, U needs to be a property of T
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Daniel' }, 'name'));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Daniel');
textStorage.addItem('Bambi');
textStorage.removeItem('Daniel');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const danielObj = { name: "Daniel" };
// objStorage.addItem(danielObj);
// objStorage.addItem({ name: 'Bambi' });
// // ...
// objStorage.removeItem(danielObj);
// console.log(objStorage.getItems());
