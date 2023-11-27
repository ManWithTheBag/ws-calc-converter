
let numeratorElement = document.getElementById("input-numerator");
let denominatorElement = document.getElementById("input-denominator");
let resultElement = document.getElementById("result-element");
let exceptionElement = document.getElementById("reduce_exception");

let reduceResult;

function calcButton(){
    let num = numeratorElement.value;
    let  denom = denominatorElement.value;

    if (num != 0 || denom != 0){
        for (let i = num; i > 0; i--) {
            if(!(num % i) && !(denom % i)){
                if(i == 1){
                    setException(true, "Can't be reduced")
                    return;
                }

                setResult(num, denom, i);
                return;
            }
        }
    }
    else {
        setException(true ,"Numerator or denominator is 0")
    }
}

function setResult(num, denom, result){
    setException(false, "");

    document.getElementById("reduce-solve-num").textContent = num.toString() + " : " + result.toString();
    document.getElementById("reduce-solve-denom").textContent = denom.toString() + " : " + result.toString();

    document.getElementById("reduce-result-num").textContent = (num / result).toString();
    document.getElementById("reduce-result-denom").textContent = (denom / result).toString();

    resultElement.style.display = "block";
}

function setException(status, textException){
    if(status){
        resultElement.style.display = "none";
        exceptionElement.textContent = textException;
    }
    else {
        exceptionElement.textContent = "";
    }
}


resetButton();
function resetButton(){
    setException(false, "");

    numeratorElement.value = null;
    denominatorElement.value = null;
    resultElement.style.display = "none";

}
