"use strict";

let $ = require('jquery'),
firebase = require("./fb-config"),
db = require("./db-interaction"),
user = require("./user");

/// This file is test code. Please discard///

function getAllFavChars() {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/userCharacter.json?orderBy="id"`
    }).done((allUserChars) => {
        return allUserChars;
    }).then((allUserChars) => {
        dispAllFavChars(allUserChars);
        // return allUserChars;
    });
}

function dispAllFavChars(allUserChars) {
    console.log("user chars", allUserChars.length);
    for(var k = 0; k <= allUserChars.length; k++) {

        // let singleChar = allChars[eachChar];
        console.log("singleChar id ", allUserChars[k].id);
        console.log("singleChar uid ", allUserChars[k].uid);
        // console.log("Each char id ", eachChar.id);
        // console.log("Each char uid ", eachChar.uid);
    }
}

module.exports = {
    getAllFavChars,
    dispAllFavChars
};