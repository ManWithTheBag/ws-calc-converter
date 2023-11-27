function trigButton(){
    var value = document.getElementById("trig_value").value.replace(",", '.');
    const func = document.getElementById("trig_func").value;
    var result;
    var unitFactor;

    if(document.getElementById("r_degrees").checked){
        unitFactor = Math.PI / 180;
    }
    else if(document.getElementById("r_radians").checked){
        unitFactor = 1;
    }
    else if(document.getElementById("r_grads").checked){
        unitFactor = Math.PI / 200;
    }

    value *= unitFactor;
    switch (func) {
        case 'sin':
            result = Math.sin(value);
            break;
        case 'cos':
            result = Math.cos(value);
            break;
        case 'tg':
            result = Math.tan(value);
            break;
        case 'ctg':
            result = 1 / Math.tan(value);
    }

    if (Math.abs(result) < Number.EPSILON) {
        result = 0;
    }

    // var test =  (Math.abs(result)).toFixed(4);

    document.getElementById("trig_resul").textContent = result.toFixed(10);
}
