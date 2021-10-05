"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: "Daniel", hobbies: ['Sports'] }, { age: 32 });
console.log(mergedObj);
