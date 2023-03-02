let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
const result = document.getElementById('result');

function addNumbers() {
  // Get the values of the input elements
  num1 = parseInt(num1.value, 10);
  num2 = parseInt(num2.value, 10);

  // Add the two numbers together
  const sum = num1 + num2;

  // Display the result in the paragraph element
  result.textContent = `Result = ${sum}`;
}

// function subtractNumbers() {
//   // Get the values of the input elements
//   const num1 = parseInt(document.getElementById('num1').value, 10);
//   const num2 = parseInt(document.getElementById('num2').value, 10);

//   // Add the two numbers together
//   const difference = num1 - num2;

//   // Display the result in the paragraph element
//   document.getElementById('result').textContent = `Result = ${difference}`;
// }

// function multiplyNumbers() {
//   // Get the values of the input elements
//   const num1 = parseInt(document.getElementById('num1').value, 10);
//   const num2 = parseInt(document.getElementById('num2').value, 10);

//   // Add the two numbers together
//   const product = num1 * num2;

//   // Display the result in the paragraph element
//   document.getElementById('result').textContent = `Result = ${product}`;
// }

// function divideNumbers() {
//   // Get the values of the input elements
//   const num1 = parseInt(document.getElementById('num1').value, 10);
//   const num2 = parseInt(document.getElementById('num2').value, 10);

//   // Add the two numbers together
//   const quotient = num1 / num2;

//   // Display the result in the paragraph element
//   document.getElementById('result').textContent = `Result = ${quotient.toFixed(2)}`;
// }

// function clearScreen() {
//   document.getElementById('result').textContent = '';
//   document.getElementById('num1').value = '';
//   document.getElementById('num2').value = '';
// }

module.exports.addNumbers = addNumbers;
