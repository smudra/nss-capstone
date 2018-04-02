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
module.exports = {
    buildUserObj
};