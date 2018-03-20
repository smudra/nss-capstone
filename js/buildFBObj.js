"use strict";

// Requires
let user = require('./user.js'),
    $ = require('jquery');


////////  Functions  /////////
// user object

function buildUserObj(uid) {
    let userObj = {
        name: "",
        uid: user.getUser()
    };
    return userObj;
}