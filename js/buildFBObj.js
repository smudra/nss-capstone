"use strict";

// Requires
let $ = require('jquery'),
    user = require('./user.js');


////////  Functions  /////////
// user object

function buildUserObj(uid) {
    let userObj = {
        name: "",
        uid: user.getUser()
    };
    return userObj;
}

function buildCharObj(id) {
    var uid = user.getUser();
}

module.exports = {
    buildUserObj, 
    buildCharObj
};