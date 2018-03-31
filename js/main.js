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
    allSavedChars = require('./allSavedChars'),
    marvelCharacters = require('./marvel-characters');

    var firebase = require("firebase/app");
        require("firebase/auth");
        require("firebase/database");

function createUserObj(fan) {
    let userObj = {
        name: '',
        email: '',
        uid: user.getUser()
    };
    return userObj;
}

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

//-------- Load the Notes Area to DOM --------//
// Using the REST API
function loadMyNotesToDOM() {
    console.log("Need some Super Heroes here");
    let currentUser = user.getUser();
    db.getNotes(currentUser)
    .then((notesData) => {
        console.log("I got some super heroes here", notesData);
        characterDOMbuilder.makeNotesPageFormat(notesData);
    });
}
// Send New Notes to FB and reload updated notes to DOM
$(document).on("click", ".save-new-note", function() {
    let noteObj = db.userChar;
    db.addNotes(noteObj)
    .then((userCharacterId) => {
        console.log("What's in the new noteObj ", userCharacterId);
        loadMyNotesToDOM();
    });
});

// Get the notes from database for editing on DOM
$(document).on("click", ".edit-btn", function() {
    let charNotes = $(this).data("edit-id");
    db.getNotes(charNotes)
    .then((note) => {
        return characterDOMbuilder.characterNotes(note, charNotes);
    }).then((finishedNote) => {
        $(".card-padding").html(finishedNote);
    });
});

// Save edited notes to FB then reload DOM with updated notes Data
$(document).on("click", ".save-notes-edit", function() {
    let noteObj = db.userChar,
    charNotes = $(this).atrr("id");
    console.log("charNotes ", charNotes);
    db.editNotes(noteObj, charNotes)
    .then((data) => {
        loadMyNotesToDOM();
    });
});


// Delete notes and reload the DOM with blank notes area --//
$(document).on("click", ".delete-btn", function() {
    let charNotes = $(this).data("delete-id");
    db.deleteNotes(charNotes)
    .then(() => {
        loadMyNotesToDOM();
    });
});

// userChar is in db-interaction.js

// Prints on the DOM click FORM function
$("#comment").click(function() {
    console.log("Clicked the text area");
    var characterNotes = characterDOMbuilder.characterNotes()
    .then(function(characterNotes) {
        $(".body-container").html(characterNotes);
    });
});

//-------- Save char info to Firebase --------//
$("#login").click(function() {
    user.googlelogIn()
    .then((result) => {
        console.log("result from login ", result.user.uid);
        user.setUser(result.user.uid);
        $("#login").addClass("is-hidden");
        $("#log-out").removeClass("is-hidden");
        loadMyNotesToDOM();
    });
});


// $(document).on("click", "#save-fav", function() {
//     console.log("saving my fav hero");
//     console.log(event.target.id);
//     var id = event.target.id;

//     var myFav = build.userChar(id);
//     db.saveMyFavChar(myFav);
// });

















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
