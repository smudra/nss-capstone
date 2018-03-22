"use strict";
console.log("characterDOMbuilder is in the house");

let $ = require('jquery'),
    db = require('./db-interaction');

// All variable
var charInfo;

/////----- Posting Firebase data to DOM -----/////

// --Delete this function. It is for reference only-- //
// function getCharacterFB(charsObj) {
//     return $.ajax({
//         url: `${firebase.getFBsettings().databaseURL}/chars.json?orderBy="uid"`
//     }).done((resolve) => {
//         return resolve;
//     }).fail((error) => {
//         return error;
//     });
// }

function showChars() {
    db.getCharactersFB().then((charData) => {
        charInfo = charData;
        console.log("What's in charData ", charData);
    });
}


module.exports = showChars;