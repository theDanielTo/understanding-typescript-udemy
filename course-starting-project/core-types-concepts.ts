type NumStrType = number | string; // custom type
type ConversionTypes = "as-number" | "as-text"; // custom & literal type

function combine(
  input1: NumStrType,
  input2: NumStrType,
  resultConversion: ConversionTypes
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    // if type ('as-numbe') ==> error
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  // if (resultConversion === 'as-numer') {
  //   return +result; // or parseFloat(result)
  // } else {
  //   return result.toString();
  // }

  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number')
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
