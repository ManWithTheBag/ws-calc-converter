let inputElement = document.getElementById("input-number");
let resultElement = document.getElementById("result");
let resultTitleElement = document.getElementById("result-title");
resultTitleElement.style.display = "none";

function calcButton(){
    let inputText = inputElement.value;

    let taskArray = getTaskArray(inputText);

    for (let item of taskArray) {
        //calcCommonFunction
        if (!isNaturalNumber(item)) {
            setExceptionMassage();
            return;
        }
    }

    let resultLCM = calcLCM(taskArray);

    resultTitleElement.style.display = "inline";
    resultElement.textContent = resultLCM;
}

function getTaskArray(inputText){
    let taskArray = [];
    let inputArray = inputText.split(',');
    for (let item of inputArray) {
        taskArray.push(item.replace(/^\s+|\s+$/gm,''));
    }
    return taskArray;
}
function setExceptionMassage(){

    resultElement.textContent = "Enter a natural number!";
    resultTitleElement.style.display = "none";
}
function calcLCM(taskArray){
    return taskArray.reduce(lcm);
}


function resetButton(){
    inputElement.value = null;
    resultElement.textContent = null;
    resultTitleElement.style.display = "none";
}