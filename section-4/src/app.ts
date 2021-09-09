// const userName = 'Daniel';
// userName = 'Daniel To';

// let age = 32;
// age = 33;

// let & const are block scoped
// var is global

// function add(a:number, b:number) {
//   let result;
//   result = a + b;
//   return result
// }

// const add = (a:number, b:number = 1) => a + b; // default parameter. default must be last
// console.log("arrow function add(2, 5):", add(2, 5));

const printOutput: (output:string | number) => void = output => console.log(output);
// printOutput(add(5));

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies); // spread operator points at the array & takes all elements

const person = {
  firstName: 'Daniel',
  age: 32
}

const copiedPerson = { ...person } // brand new object with 'copied' properties

// spread operator creates a comma-seperated list
const add = (...numbers:number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0)
}

const addNumbers = add(5, 10, 2, 3.7)
console.log(addNumbers);

const [ hobby1, hobby2, ...remainingHobbies ] = hobbies;
console.log('destructured array:', hobby1, hobby2, remainingHobbies);

const { firstName: userName, age } = person;
// firstName is aliased to userName
console.log("destructured obj:", userName, age);
