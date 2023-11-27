let langPersonalJSON;
let langFragmentJSON;
let langPlaceholderJSON;
let langCommonTags;

//
// Get personal JSON
getPersonalJSON();
function getPersonalJSON(){
    let jsonPath = document.getElementById("langJSONPath").value;
    fetch(jsonPath).
    then(function (response){
        return response.json();
    })
        .then(function (data){
            langPersonalJSON = data;

            getCommonFragmentJSON();
        })
}


//
// Get common fragments JSON
function getCommonFragmentJSON(){
    fetch('/json/lang/langFragment.json').
    then(function (response){
        return response.json();
    })
        .then(function (data){
            langFragmentJSON = data;

            getCommonPlaceholderJSON()
        })
}


//
// Get common placeholder JSON
function getCommonPlaceholderJSON(){
    fetch('/json/lang/langPlaceholder.json').
    then(function (response){
        return response.json();
    })
        .then(function (data){
            langPlaceholderJSON = data;

            getCommonTagsJSON();
        })
}


//
// Get common tags JSON
function getCommonTagsJSON(){
    fetch('/json/lang/langCommonTags.json').
    then(function (response){
        return response.json();
    })
        .then(function (data){
            langCommonTags = data;

            langChange(localStorage.getItem("preferLang"));
        })
}

