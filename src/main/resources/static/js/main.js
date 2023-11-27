//
// Header fix on the top viewport
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("_sticky");
    } else {
        header.classList.remove("_sticky");
    }
}
//
// Do Uppercase for first later in each sentences
var textElements = document.querySelectorAll("._uppercase-each-sentences");

setUppercase();
function setUppercase(){
    textElements.forEach((element) => elementToUppercase(element))

}

function elementToUppercase(textElement){
    var preparedText = textElement.textContent.replace(/^\s+|\s+$/gm,'').split(".").map((item) =>{
        let clearElement = item.replace(/^\s+|\s+$/gm,'');
        if(clearElement[0] != null) {
            return  clearElement[0].toUpperCase() + clearElement.substring(1);
        }
    }).join(". ") ;

    textElement.textContent = preparedText;
}
//
