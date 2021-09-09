"use strict";
// const userName = 'Daniel';
// userName = 'Daniel To';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var printOutput = function (output) { return console.log(output); };
// printOutput(add(5));
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log(event); });
}
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies); // spread operator points at the array & takes all elements
var person = {
    firstName: 'Daniel',
    age: 32
};
var copiedPerson = __assign({}, person); // brand new object with 'copied' properties
// spread operator creates a comma-seperated list
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addNumbers = add(5, 10, 2, 3.7);
console.log(addNumbers);
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log('destructured array:', hobby1, hobby2, remainingHobbies);
var userName = person.firstName, age = person.age;
// firstName is aliased to userName
console.log("destructured obj:", userName, age);
