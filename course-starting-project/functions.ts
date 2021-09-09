function add(n1:number, n2:number) { // can explicitly set type :type (after parameters)
  return n1 + n2;
}

function printResult(num:number) { // return type void (doesn't have return statement)
  console.log('Result: ' + num);
}
// can explicitly set return value of 'undefined' if function has return statement
// but doesn't return a value

function addAndHandle(n1:number, n2:number, cb:(num:number) => void) {
  const result = n1 + n2;
  cb(result);
}
// even though the cb function explicitly sets return value as void
// you can still return something without errors

printResult(add(5, 12));

let combineValues: (a:number, b:number) => number;
// any function that takes 2 numbers as parameters & returns a number
combineValues = add;
// combineValues = printResults; // doesn't match (num, num) => num
// combineValues = 5; // doesn't match function type
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log('addAndHandle()', result);
})
