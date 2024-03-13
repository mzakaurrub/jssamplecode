let num1=8;
let num2=2;
let result;
document.getElementById("num1-el").textContent=num1;
document.getElementById("num2-el").textContent=num2;
const sumEl=document.getElementById("sum-el");


function add()
        {
            let result=num1+num2;
            sumEl.textContent="Sum: "+result;
        }

function subtract()
        {
            let result=num1-num2;
            sumEl.textContent="Subtraction: "+result;
       }

function multiply()
        {
            let result=num1*num2;
            sumEl.textContent="Product: "+result;
      
        }

function divide()
        {
            let result=num1+num2;
            sumEl.textContent="Division: "+result;
      
        }


