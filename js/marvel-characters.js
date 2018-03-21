"use strict";
let $ = require('jquery'),
    apiKey = require('./api-request');

    // getting api info based on date modified

const marvelApiURL = apiKey.marvelApiURL;

function getCharactersById() {
    let characterDtUrl = marvelApiURL;
    return $.ajax({
        url: characterDtUrl,
        method: "GET"
    }).done((data) => {
        return data;
        // console.log("What's in data ", data);
    }).fail((error) => {
        return error;
    });
}


module.exports = getCharactersById;
/// Not sure this file is necessary. It's not complete.

// Place the info into Firebase
