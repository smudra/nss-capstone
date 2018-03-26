"use strict";

// Requires
let $ = require('jquery'),
    marvelKey = require('./marvel-key'),
    apiRequest = require('./api-request'),
    build = require('./buildFBObj'),
    db = require('./db-interaction'),
    fbConfig = require('./fb-config'),
    user = require('./user'),
    userProfile = require('./user-profile'),
    characterDOMbuilder = require('./characterDOMbuilder'),
    marvelCharacters = require('./marvel-characters');

function createUserObj(fan) {
    let userObj = {
        name: '',
        email: '',
        uid: user.getUser()
    };
    return userObj;
}
var userID = "";

//------- When user clicks login --------//
$("#login").click(function() {
    user.googlelogIn()
    .then((result) => {
        user.setUser(result.user.uid);
        $("#login").hide();
        $("#log-out").show();
        sendToFirebase();
    });
});


//-------- Send user info to Firebase --------//

function sendToFirebase() {
    let userBuilder = createUserObj();
    db.addUserFB(userBuilder);
}

$("#log-out").click(function(){
    user.googleLogOut();
    $("#log-out").hide();
    $("#login").show();
   });






















// $("#login").click(function() {
//     user.googlelogIn()
//     .then((result) => {
//         db.addUserFB(build.buildUserObj(result.addUserFB.displayName, result.user.uid, result.user.photoURL));
//         user.setUser(result.user.uid);
//         // $("#login").addClass("no-user");
//         // $("#user-pic").removeClass("no-user").html(`img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google User" class="profPic">`);
//         userID = result.user.uid;
//         console.log("login complete!", userID);
//         // sendToFirebase();
//     });
// });

// function sendToFirebase() {
//     let userBuilder = build.buildUserObj();
//     // build comes from buildFBObj. 
//     console.log("What's in userBuilder ", userBuilder);
//     db.addUserFB(userBuilder);
//     // db comes from addUserFB in db - interaction. 
// }
