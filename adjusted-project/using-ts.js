// this is created after running "tsc using-ts.ts" in cmder
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// ! means "never null"
// HTML => type casting
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value)); // + converts to 'Number'
});
