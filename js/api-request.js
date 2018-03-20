"use strict";

let $ = require('jquery');
let marvelApiURL = "http://gateway.marvel.com/v1/public/characters?apikey=a0e48461d9a3fb743776209380da6b53";


// get the API from Marvel Comics

function getAPIKeyRequest() {
    return $.ajax ({
        url: marvelApiURL,
        method: "GET"
        }).done((marvelData) => {
            return marvelData;
        });
}
getAPIKeyRequest()
    .then((marvelData) => {
        console.log("What's in Marvel Data", marvelData);
    }).fail((error) => {});

    module.exports = getAPIKeyRequest;
