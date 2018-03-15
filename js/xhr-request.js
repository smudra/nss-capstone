"use strict";

let getApiHash = new XMLHttpRequest();

function getAPIHashRequest(hash) {
    if(hash.target.status === 200) {
        let apiData = JSON.parse(hash.target.responseText);
    } else {
        console.log("Cannot get hash key");
    }
}

getApiHash.open("GET", "http://gateway.marvel.com/v1/public/comics?apikey=142fa0a69c8d5f040867a29bac4161a9");
getApiHash.send();