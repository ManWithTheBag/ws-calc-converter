
let elements;

function setNewLang(lang){
    localStorage.setItem("preferLang", lang);
    langChange(lang);
}

function langChange(lang){
    if(lang == null) return;

    // Personal JSON
    for (let key in langPersonalJSON) {
        elements = document.querySelectorAll("._lang-" + key);
        for (let element of elements) {
            if(element != null){
                element.textContent = langPersonalJSON[key][lang];
            }
        }
    }

    // Common fragments JSON
    for (let key in langFragmentJSON) {
        elements = document.querySelectorAll("._lang-" + key);
        for (let element of elements) {
            if(element != null){
                element.textContent = langFragmentJSON[key][lang];
            }
        }
    }

    // Common placeholder JSON
    for (let key in langPlaceholderJSON) {
        elements = document.querySelectorAll("._lang-" + key);
        for (let element of elements) {
            if(element != null){
                element.placeholder = langPlaceholderJSON[key][lang];
            }
        }
    }

    // Common tags JSON
    for (let key in langCommonTags) {
        elements = document.querySelectorAll("._lang-" + key);
        for (let element of elements) {
            if(element != null){
                element.textContent = langCommonTags[key][lang];
            }
        }
    }

    // Function in main.js
    setUppercase();
}