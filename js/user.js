"use strict";

// Requires

let $ = require('jquery'),
    fbConfig = require("./fb-config"),
    db = require("./db-interaction"),
    build = require('./buildFBObj');

var firebase = require("firebase/app");
        require("firebase/auth");
        require("firebase/database");

var provider = new firebase.auth.GoogleAuthProvider();
    
let currentUser = null;



// User login and log out functions

function googlelogIn() {
    return firebase.auth().signInWithPopup(provider);
}

function googleLogOut() {
    return firebase.auth().signOut();
}

function setUser(val) {
    currentUser = val;
}

function getUser(){
    return currentUser;
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        currentUser = user.uid;
        console.log("This user is logged in: ", currentUser);
    } else {
        currentUser = null;
        console.log("user is not logged in.");
    }
});


// End user login  and log out functions


module.exports = {
    googlelogIn,
    googleLogOut,
    setUser,
    getUser
};
