//add
function add(num1, num2){

  var add = parseFloat(num1) + parseFloat(num2),
      addString = num1 + ' + ' + num2 + ' = ' + add;

      onclick=function(){
        document.getElementById('result').innerHTML=addString;
      }

}

// subtract

function subtract(num1, num2){

  var sub = parseFloat(num1) - parseFloat(num2),
      subString = num1 + ' - ' + num2 + ' = ' + sub;

      onclick=function(){
        document.getElementById('result').innerHTML=subString;
      }
}

// multiply

function multiply(num1, num2){

  var mult = parseFloat(num1) * parseFloat(num2),
    multString = num1 + ' * ' + num2 + ' = ' + mult;
      document.getElementById('result').innerHTML=multString;

      onclick=function(){
        document.getElementById('result').innerHTML=multString;
      }
}


// divide

function divide(num1, num2){

  var divide = parseFloat(num1) / parseFloat(num2),
    divideString = num1 + ' / ' + num2 + ' = ' + divide;

    onclick=function(){
        document.getElementById('result').innerHTML=divideString;
      }
}

// this function will grab the inputs, populate the result div
// and run an operation
function populatehtml(operation){
  var run1 = document.getElementById('first').value;
  var run2 = document.getElementById('second').value;
  var output = operation(run1,run2);
    document.getElementById('result').innerText += output;


// this if else statement will return a statement if no
// value is entered

    if (run1 == "" || run2 == ""){

      document.getElementById('result').innerHTML="You must input numbers to calculate"
    } else {

    }
}


document.getElementById('add').onclick = function(){
    populatehtml(add) };
document.getElementById('subtract').onclick = function(){
    populatehtml(subtract) };
document.getElementById('multiply').onclick = function(){
    populatehtml(multiply) };
document.getElementById('divide').onclick = function(){
    populatehtml(divide) };
