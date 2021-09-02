const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
// ! means "never null"
// HTML => type casting

function add(num1: number, num2: number) { // parameters are strong typed
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value)); // + converts to 'Number'
});
