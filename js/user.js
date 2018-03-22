"use strict";

// Requires

let $ = require('jquery'),
    fbConfig = require("./fb-config"),
    db = require("./db-interaction"),
    build = require('./buildFBObj');


let userLogin = document.getElementById("#login");

let currentUser = {
    name: "",
    uid: null
};

$('#user-pic').click(() => {
    userProfile();
});

function userProfile() {
    $('#nav-container').html(`<p id="user-pic" class="fas fa-user"><span class="user-style" id="login"> &nbsp; <a href="#">Login</a> </span></p>
    <p id="log-out"><span class="user-style"> &nbsp; <a href="#">Logout</a> </span></p>`);
}

function setUserVars(obj) {
    return new Promise((resolve, reject) => {
    currentUser.name = obj.name;
    currentUser.uid = obj.uid;
        resolve(currentUser);
    });
}

// ======= User Login and Logout functions ========

$(document).on("click", "#logout", () => {
    // console.log("On Clicking logout ");
    db.googleLogOut();
    $("#user-pic").addClass("no-user");
    $("#login").removeClass("no-user");
    $("#log-out").addClass("no-user");
});

$(document).on("click", "#login", () => {
    db.googleLogIn()
    .then((result) => {
        db.setUser(result.user.uid);
        $("#login").addClass("no-user");
        $("#log-out").removeClass("no-user");
        $("#user-pic").removeClass("no-user").html(`img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google User" class="profPic">`);
        console.log("login complete!");
        sendToFirebase();
    });
});

function sendToFirebase() {
    let userBuilder = build.buildUserObj();
    // build comes from buildFBObj. 
    console.log("What's in userBuilder ", userBuilder);
    db.addUserFB(userBuilder);
    // db comes from addUserFB in db - interaction. 
}

module.exports = {sendToFirebase};

// function getUserMarvelCharacter(userObj) {

// }