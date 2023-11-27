let resultElement = document.getElementById("calc-result");
let numberElement = document.getElementById("input-number");
let exponentElement = document.getElementById("input-exponent");

function calcButton(){
    let number = numberElement.value;
    let exponent = exponentElement.value;
    let result = Math.pow(number, exponent);

    resultElement.textContent = String(result);
}

function resetButton(){
    resultElement.value = null;
    numberElement.value = null;
    exponentElement.value = null;
}