"use strict";

let apiURL = "http://gateway.marvel.com/v1/public/comics?&apikey=142fa0a69c8d5f040867a29bac4161a9"


let getApiHash = new XMLHttpRequest();

function getAPIHashRequest(hash) {
    return $.ajax ({
        url: apiURL
        }).done((marvelData) => {
            return marvelData;
        });
    // 
}

// getApiHash.open("GET", "http://gateway.marvel.com/v1/public/comics?&apikey=627ad794bc815b63c59d4751a58222455a1f9feb&hash=142fa0a69c8d5f040867a29bac4161a9");
// getApiHash.send();
// console.log("What's in hash", hash);
    // if(hash.target.status === 200) {
    //     let apiData = JSON.parse(hash.target.responseText);
    //     console.log("I need api hash in apiData", apiData);
    // } else {
    //     console.log("Cannot get hash key");
    // }