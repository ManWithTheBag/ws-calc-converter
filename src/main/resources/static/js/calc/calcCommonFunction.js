function isNaturalNumber(value) {
    value = Number(value);
    if(value > 0 && value === Math.round(value)){
        return true;
    }
    return false;
}


function hcf(a, b) {
    if (b == 0) {
        return a;
    }
    return hcf(b, a % b);
}
function lcm(a, b) {
    return a * b / hcf(a, b);
}


//
// Create HTML elements use js
function createFraction(numerator, denominator, separateSymbol) {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("_items-align-row-center");

    let fractionDiv = document.createElement("div");
    fractionDiv.classList.add("_frac", "_item-margin-05rem-horizon")

    let numeratorSamp = document.createElement("span");
    numeratorSamp.classList.add("_text-simple")
    numeratorSamp.appendChild(document.createTextNode(numerator));

    let symbolSamp = document.createElement("span");
    symbolSamp.classList.add("symbol");
    symbolSamp.appendChild(document.createTextNode("/"))

    let denominatorSamp = document.createElement("span");
    denominatorSamp.classList.add("bottom", "_text-simple");
    denominatorSamp.appendChild(document.createTextNode(denominator));

    fractionDiv.appendChild(numeratorSamp);
    fractionDiv.appendChild(symbolSamp);
    fractionDiv.appendChild(denominatorSamp);

    let commaSamp = document.createElement("span");
    commaSamp.classList.add("_text-simple", "_item-margin-05rem-horizon");
    commaSamp.appendChild(document.createTextNode(separateSymbol));

    mainDiv.appendChild(fractionDiv);
    mainDiv.appendChild(commaSamp);

    return mainDiv;
}