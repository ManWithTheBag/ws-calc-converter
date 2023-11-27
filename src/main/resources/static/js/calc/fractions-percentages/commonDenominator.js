let numeratorArray = [];
let denominatorArray = [];
let mainFractionElementArray = [];
let inputSectionElement = document.getElementById("input-section");
let subtractButtonElement = document.getElementById("subtract-item");
let exceptionMassageElement = document.getElementById("exception-massage");

let resultTaskFractElement = document.getElementById("result-task-fract-div");
let resultSolveUL = document.getElementById("solve-ul");
let answerDivElement = document.getElementById("answer-div");

let resultDivElement = document.getElementById("result-div");


appearDisappearSubtractButton();
resetButton();

function calcButton() {
    clearResultSection();
    getFractionArrays();
    exceptionMassageElement.textContent = null;

    if (checkException(denominatorArray) === true){
        clearResultSection();
        return;
    }

    let resultLCM = calcLCM(denominatorArray);

    createResultInHTML(resultLCM);

    resultDivElement.style.display = "block";
}

function getFractionArrays() {
    numeratorArray.length = 0;
    denominatorArray.length = 0;

    let numeratorArrayElement = document.querySelectorAll("._js-numerator");
    let denominatorArrayElement = document.querySelectorAll("._js-denominator");

    for (let i = 0; i < numeratorArrayElement.length; i++) {
        numeratorArray.push(numeratorArrayElement[i].value);
        denominatorArray.push(denominatorArrayElement[i].value);
    }
}
function checkException(checkedArray) {
    for (let item of checkedArray) {
        //calcCommonFunction
        if (!isNaturalNumber(item)) {
            exceptionMassageElement.textContent = "Enter a natural number!";
            return true;
        }
    }
}
function calcLCM(taskArray) {
    return taskArray.reduce(lcm);
}



function createResultInHTML(resultLCM) {
    createTaskFractions();
    contentToSolutionText(resultLCM);
    contentToUl(resultLCM);
    answerFraction(resultLCM);
}
function createTaskFractions(){
    // Create task fractions
    for (let i = 0; i < denominatorArray.length; i++) {
        if (i < denominatorArray.length - 1) {
            let newFraction = createFraction(numeratorArray[i], denominatorArray[i], ",");
            resultTaskFractElement.appendChild(newFraction);

        } else {
            let newFraction = createFraction(numeratorArray[i], denominatorArray[i], ".");
            resultTaskFractElement.appendChild(newFraction);
        }
    }
}
function contentToSolutionText(resultLCM){
    // Content to solution text
    let solveDenominatorContent = "";
    for (let i = 0; i < denominatorArray.length; i++) {
        if (i < denominatorArray.length - 1) {
            solveDenominatorContent += denominatorArray[i] + ", ";
        } else {
            solveDenominatorContent += denominatorArray[i];
        }
    }
    document.getElementById("solve-denominator").textContent = solveDenominatorContent;

    for (let solveLCM_Element of document.querySelectorAll("._solve-lcm")) {
        solveLCM_Element.textContent = resultLCM;
    }
}
function contentToUl(resultLCM){
    // Content to ul
    for (let i = 0; i < denominatorArray.length; i++) {
        let newLi = document.createElement("li");

        let textSolve6Samp = document.createElement("samp");
        textSolve6Samp.classList.add("_lang-solve-6", "_text-simple");
        textSolve6Samp.appendChild(document.createTextNode("multiply the numerator and denominator of the "));

        let countOfLiSamp = document.createElement("samp");
        countOfLiSamp.classList.add("_text-simple");
        let currentCount = i + 1;
        countOfLiSamp.appendChild(document.createTextNode(currentCount.toString()));

        let textSolve7Samp = document.createElement("samp");
        textSolve7Samp.classList.add("_lang-solve-7", "_text-simple");
        textSolve7Samp.appendChild(document.createTextNode("st fraction by "));

        let multipleNumberSamp = document.createElement("samp");
        multipleNumberSamp.classList.add("_text-simple");
        let multipleNumber = resultLCM / denominatorArray[i];
        multipleNumberSamp.appendChild(document.createTextNode(multipleNumber.toString()));

        let textSolve8Samp = document.createElement("samp");
        textSolve8Samp.classList.add("_lang-solve-8", "_text-simple");
        textSolve8Samp.appendChild(document.createTextNode(". We get:"));


        newLi.appendChild(textSolve6Samp);
        newLi.appendChild(countOfLiSamp);
        newLi.appendChild(textSolve7Samp);
        newLi.appendChild(multipleNumberSamp);
        newLi.appendChild(textSolve8Samp);


        let fractionDiv = document.createElement("div");
        fractionDiv.classList.add("_fraction-list", "_flex-justify-center", "_item-margin-05rem-vertical");
        let fractionTask = createFraction(numeratorArray[i], denominatorArray[i], "=");
        let fractionSolve = createFraction(numeratorArray[i] + " ⋅ " + multipleNumber, denominatorArray[i] + " ⋅ " + multipleNumber, "=");
        let fractionResult = createFraction(numeratorArray[i] * multipleNumber, denominatorArray[i] * multipleNumber, "");
        fractionDiv.appendChild(fractionTask);
        fractionDiv.appendChild(fractionSolve);
        fractionDiv.appendChild(fractionResult);


        newLi.appendChild(fractionDiv);
        resultSolveUL.appendChild(newLi);
    }
}
function answerFraction(resultLCM){
    for (let i = 0; i < denominatorArray.length; i++) {

        let multipleNumber = resultLCM / denominatorArray[i];

        if (i < denominatorArray.length - 1) {
            let answerFraction = createFraction(numeratorArray[i] * multipleNumber, denominatorArray[i] * multipleNumber, ",");
            answerDivElement.appendChild(answerFraction);

        } else {
            let answerFraction = createFraction(numeratorArray[i] * multipleNumber, denominatorArray[i] * multipleNumber, ".");
            answerDivElement.appendChild(answerFraction);
        }
    }
}



function addFraction() {
    createNewInputFormFraction()
    appearDisappearSubtractButton();
}
function subtractFraction() {
    mainFractionElementArray.length = 0;
    mainFractionElementArray = document.querySelectorAll("._main-fraction");

    if (mainFractionElementArray.length <= 2) {
        return;
    }

    let lastElement = mainFractionElementArray[mainFractionElementArray.length - 1];
    lastElement.remove();

    appearDisappearSubtractButton();
}
function appearDisappearSubtractButton() {
    mainFractionElementArray.length = 0;
    mainFractionElementArray = document.querySelectorAll("._main-fraction");

    if (mainFractionElementArray.length <= 2) {
        subtractButtonElement.style.display = "none";
    } else {
        subtractButtonElement.style.display = "block";
    }

}


function createNewInputFormFraction() {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("_main-fraction", "_items-align-row-center", "_item-margin-05rem-vertical");

    let fractionDiv = document.createElement("div");
    fractionDiv.classList.add("_items-column");

    let numeratorInput = document.createElement("input");
    numeratorInput.classList.add("_js-numerator", "_lang-placeholder-numerator", "_input-number", "_input-number-short", "_border-light", "_numeration-border");
    numeratorInput.type = "number";
    numeratorInput.placeholder = "Numer.";
    numeratorInput.step = "1";

    let denominatorInput = document.createElement("input");
    denominatorInput.classList.add("_js-denominator", "_lang-placeholder-denominator", "_input-number", "_input-number-short", "_border-light", "_denominator-border");
    denominatorInput.type = "number";
    denominatorInput.placeholder = "Denom.";
    denominatorInput.step = "1";

    let comma = document.createElement("samp");
    let commaNode = document.createTextNode(",");
    comma.appendChild(commaNode);
    comma.classList.add("_text-simple", "_item-margin-1rem-around");

    fractionDiv.appendChild(numeratorInput);
    fractionDiv.appendChild(denominatorInput);

    mainDiv.appendChild(fractionDiv);
    mainDiv.appendChild(comma);

    inputSectionElement.appendChild(mainDiv);
}


function clearResultSection(){
    resultTaskFractElement.textContent = null;
    resultSolveUL.textContent = null;
    answerDivElement.textContent = null;

    resultDivElement.style.display = "none";
}

function resetButton(){
    let numeratorArrayElement = document.querySelectorAll("._js-numerator");
    let denominatorArrayElement = document.querySelectorAll("._js-denominator");
    for (let i = 0; i < numeratorArrayElement.length; i++) {
        numeratorArrayElement[i].value = null;
        denominatorArrayElement[i].value = null;
    }

    exceptionMassageElement.textContent = null;
    resultDivElement.style.display = "none";
}