var num1 = prompt("Enter Number 1: ");
var num2 = prompt("Enter Number 2: ");
var operator = prompt("Enter Required Operation: ");
num1 =  Number(num1);
num2 =  Number(num2);

console.log(num1);
if (operator === "+") {
  var result = num1 + num2;
  document.write("Result is: " + result );
}
else if (operator === "-") {
    var result = num1 - num2;
    document.write("Result is: " + result );
  }
  else if (operator === "*") {
    var result = num1 * num2;
    document.write("Result is: " + result );
  }
  if (operator === "/") {
    var result = num1 / num2;
    document.write("Result is: " + result );
  }