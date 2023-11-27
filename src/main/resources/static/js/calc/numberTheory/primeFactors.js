
let sequenceTask = [];
let sequenceResult = [];
let resultExceptionElement = document.getElementById("result-exception");
let resultTableBodyElement = document.getElementById("result-table-body");

function calcButton(){
    let value = document.getElementById("input-number").value;

    //calcCommonFunction
    if(isNaturalNumber(value)){
        primeNumber(document.getElementById("input-number").value)
    }else {
        clearResult();
        resultExceptionElement.textContent = "Enter a natural number!"
    }
}

function primeNumber(inputNumber) {
    sequenceTask.length = 0;
    sequenceResult.length = 0;
    clearResult();

    let isDone = false;
    let currentNumber = inputNumber;

    while (isDone == false){
        currentNumber = getTest(currentNumber);
        if(currentNumber == 1){
            sequenceTask.push(currentNumber);
            isDone = true;
        }
    }
    setResult();
}

function isPrime(m) {
    let i;
    for (i = 2; i < m; i++) {
        if (m % i === 0) {
            return false;
        }
    }
    return true;
}

function getTest(inputNumber2){
    for (j = 2; j <= inputNumber2; j++) {
        if (inputNumber2 % j === 0 && isPrime(j)) {
            sequenceTask.push(inputNumber2);
            sequenceResult.push(j);
            return inputNumber2 / j;
        }
    }
}

function setResult(){
    for (let i = 0; i < sequenceTask.length; i++) {
        let taskValue = sequenceTask[i];
        let resultValue = sequenceResult[i];

        createRowInTable(taskValue, resultValue)
    }
}

function createRowInTable(taskValue, resultValue){
    let row = document.createElement("tr");
    let tdLeft = document.createElement("td");
    let tdRight = document.createElement("td");

    let nodeLeft = document.createTextNode(taskValue);
    let nodeRight;
    if(typeof resultValue !== 'undefined'){
        nodeRight = document.createTextNode(resultValue);
    }
    else {
        nodeRight = document.createTextNode(" ");
    }

    tdLeft.appendChild(nodeLeft);
    tdLeft.classList.add("_text-simple", "_left-column");

    tdRight.appendChild(nodeRight);
    tdRight.classList.add("_text-simple", "_right-column");

    row.appendChild(tdLeft);
    row.appendChild(tdRight);
    resultTableBodyElement.appendChild(row);
}


function resetButton(){
    resultTableBodyElement.replaceChildren();
    document.getElementById("input-number").value = null;
    resultExceptionElement.textContent = null;
}

function clearResult(){
    resultTableBodyElement.replaceChildren();
    resultExceptionElement.textContent = null;
}