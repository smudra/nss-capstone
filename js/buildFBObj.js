"use strict";

console.log("Object.values(charObj) in the house");
// Requires
let $ = require('jquery'),
    user = require('./user.js'),
    firebase = require("./fb-config");
    
let character = `${firebase.getFBsettings().databaseURL}/character.json`;
////////  Functions  /////////
// user object

function buildUserObj(uid) {
    let userObj = {
        name: "",
        uid: user.getUser()
    };
    return userObj;
}


// get character index from function to populate in charObj
// Under id add character index which is character > Object.key. 
// Char info should go under id

let userChar = firebase.database().ref("userCharacter");

function buildUserCharObj(characters) {
    let userChar = {
        id: $("#userCharid3").key,
        uid: user.getUser().uid,
        charNotes: ""
    };
    return userChar;
}


// function buildUserCharObj(characters) {
//     var userChar = {
//         id: characterDOMbuilder.listCharacters(),
//         uid: user.getUser(),
//         notes: ""
//     };
//     console.log("Het hey", Object.values(charObj.id));
//     return userChar;
// // }
// console.log("Outside", Object.values(buildUserCharObj));


module.exports = {
    buildUserObj, 
    buildUserCharObj
};