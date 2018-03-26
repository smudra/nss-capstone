"use strict";

// Requires
let $ = require('jquery'),
    user = require('./user.js');


////////  Functions  /////////
// user object

function buildUserObj(userName, userId, userPhoto) {
    let userObj = {
        name: displayName,
        uid: userId,
        profilepic: userPhoto
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