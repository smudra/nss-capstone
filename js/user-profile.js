"use strict";

let $ = require('jquery'),
    user = require('./user'),
    fbConfig = require("./fb-config"),
    db = require("./db-interaction"),
    build = require('./buildFBObj'),
    firebase = require('firebase/app');
    var provider = new firebase.auth.GoogleAuthProvider();

let fan = document.getElementById("body-container");

$('#user-pic').click(() => {
    userProfile();
});

function userProfile() {
    $('#body-container').html(`<p id="log-out"><span class="user-style">Logout</span></p>
    <p id="second-login" class="no-user"><span class="fas fa-user"></span>Login</p>`);
}


// ======= User Login and Logout functions ========

$(document).on("click", "#logout", () => {
    // console.log("On Clicking logout ");
    user.googleLogOut();
    $("#user-pic").addClass("no-user");
    $("#login").removeClass("no-user");
    $("#log-out").addClass("no-user");
    $("#second-login").removeClass("no-user");
});



//------- When user clicks login --------//
// $(document).on("click", "#second-login", () => {
//     user.googlelogIn()
//     .then((result) => {
//         user.setUser(result.user.uid);
//         $("#second-login").addClass("no-user");
//         $("#login").addClass("no-user");
//         $("#log-out").removeClass("no-user");
//         $("#user-pic").removeClass("no-user").html(`img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google User" class="profPic">`);
//         console.log("login complete!");
//         sendToFirebase();
//     });
// });


//-------- Send user info to Firebase --------//
// function sendToFirebase() {
//     let userBuilder = build.buildUserObj();
//     // build comes from buildFBObj. 
//     console.log("What's in userBuilder ", userBuilder);
//     db.addUserFB(userBuilder);
//     // db comes from addUserFB in db - interaction. 
// }

module.exports = {
    userProfile,
    // sendToFirebase
};