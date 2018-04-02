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
    // let currentUser = user.getUser();
    db.getNotes(currentUser)
    .then((notesData) => {
        console.log("I got some super heroes here", notesData);
        characterDOMbuilder.displayFavCharacter(notesData);
    });
}

let noteID;
let noteInput;
let noteObjText;
$(document).on("click", ".save-new-note", function(e) {
//    console.log("e inside function", e.currentTarget.parentNode.parentNode.childNodes[2].childNodes[3]);

   let textareaId = e.currentTarget.parentNode.parentNode.childNodes[2].childNodes[3].id;
    let noteObj = db.userChar;
    let textNotes = $("#" + textareaId)["0"].value;
    noteID = $("#" + textareaId)["0"];
    // noteInput = noteInputText();
    noteObjText = characterDOMbuilder.editButtonId();
    // console.log("This noteID should have character Key", noteID);
    let noteIDobj = {
        addNotes: textNotes
    };
    
    // console.log("Text notes value", textNotes);
    // console.log("noteIDObj should have noteID, addnotes and user uid", noteIDobj);
    // console.log("This should contain user Character Record of Save button: Whole Rec", noteID, noteID.id);
    
db.editNotes(noteIDobj, noteID.id)
    .then((userCharacterId) => {
        console.log("What's in the new noteObj ", userCharacterId);
        loadMyNotesToDOM();
    });
});

// Delete notes and reload the DOM with blank notes area --//
$(document).on("click", ".delete-btn", function(e) {
    console.log("e", e);
    
    db.deleteNotes(e.currentTarget.dataset.id)
    .then(() => {
        // function get rid of the card deck
        // parentnode or data id to target the card deck
        loadMyNotesToDOM();
    });
});


// userChar is in db-interaction.js
// Prints on the DOM click FORM function
$("#comment").click(function() {
    var characterNotes = characterDOMbuilder.characterNotes()
    .then(function(characterNotes) {
        $(".body-container").html(characterNotes);
    });
});