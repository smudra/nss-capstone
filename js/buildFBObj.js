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


function buildUserCharObj(characters) {
    var charObj = {
        id: "1",
        uid: user.getUser(),
        notes: "4"
    };
    console.log("Het hey", Object.values(charObj.id));
    return charObj;
}
console.log("Outside", Object.values(buildUserCharObj));
module.exports = {
    buildUserObj, 
    buildUserCharObj
};