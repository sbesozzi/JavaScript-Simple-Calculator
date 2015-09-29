// Our Calculation Function
var add = function (answer) {
  console.log(answer);
  return numberInput1 + numberInput2;
}

// Grab My Elements
var numberInput1 = document.querySelector('#num_one');
var numberInput2 = document.querySelector('#num_two');
var calculateBtn = document.querySelector('#calculateBtn');
var answerElem = document.querySelector('#answer');

//Variable Declarartions
var number1, number2, answerText;


//Function to Preform the Caculation
var calculate =function() {
  number1 =  numberInput1.value, 
  number2 = numberInput2.value;
  answerText = answer;
  answerElem.textContent = answerText;

}

//Button Click
calculateBtn.addEventListener('click', calculate);