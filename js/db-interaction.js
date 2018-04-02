"use strict";

console.log("DB interaction is here");
let $ = require('jquery'),
    firebase = require("./fb-config"),
    currentUser = null,
    provider = new firebase.auth.GoogleAuthProvider(),
    characterDOMbuilder = require('./characterDOMbuilder'),
    user = require("./user");

    let userChar = {
        id: "",
        addNotes: "",
        uid: user.getUser()
    };

function getFBDetails(user) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}//user.json?orderBy="uid"&equalTo="${user}"`
    }).done((resolve)  => {
        return resolve;
    }).fail((error) => {
        return error;
    });
}

function addUserFB(userObj) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/user.json`,
        type: 'POST',
        data: JSON.stringify(userObj),
        dataType: 'json'
    }).done((userID) => {
        return userID;
    });
}

function updateUserFB(userObj) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/user/${userObj.userID}.json`,
        type: 'PUT',
        data: JSON.stringify(userObj),
        dataType: 'json'
    }).done((userID) => {
        return userID;
    });
}

function createUser(userObj) {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
        .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log("check if you get error: ", errorCode, errorMessage);
        });
}

function loginUser(userObj) {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
        .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log("Error: either email or password is incorrect ", errorCode, errorMessage);
    });
}

// This is also in user.js you can delete here.
function googlelogIn() {
    return firebase.auth().signInWithPopup(provider);
}

function googleLogOut() {
    return firebase.auth().signOut();
}

/////----- End User Login Area -----/////

/////----- Adding characters to my favorites -----/////
// Put characters in FB
function addMyFavCharFB(userChar) {
    return $.ajax ({
        url: `${firebase.getFBsettings().databaseURL}/userCharacter.json`,
        type: 'POST',
        data: JSON.stringify(userChar),
        dataType: 'json'
    }).done((charData) => {
        return charData;
    }).fail((error) => {
        return error;
    });
}

// What is makeCharacterPageFormat
//When loading sav fav page user needs to log in
function loadMyFavCharToDom() {
    let currentUser = user.getUser();
    characterDOMbuilder.showSingleCharacter(currentUser)
    .then((characters) => {
        characterDOMbuilder.displayFavCharacter(characters);
    });
}

$("#card-fav").click(function() {
    $(".card-fav").html("");
    loadMyFavCharToDom();
});

function saveBtn(e) {
    userChar.id = e.target.id;
    userChar.uid = user.getUser();
    addMyFavCharFB(userChar);
    characterDOMbuilder.showFavChars();
}
// Event listener for save button
    
    $(document).on("click", ".save-fav", function(e) {
        saveBtn(e);
    });

// GET - Requests/read data from a specified source
// PUT - Update data to a specified resource.
// PATCH - Updates only the Object key specified. In this case Adding Notes
// Takes two parameters.
function editNotes(noteFormObj, userCharacterId) {
    console.log("editNotes noteFormObj, userCharacterId", noteFormObj, userCharacterId);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/userCharacter/${userCharacterId}.json`,
        type: 'PATCH',
        data: JSON.stringify(noteFormObj)
    }).done((data) => {
        console.log("url for firebase", `${firebase.getFBsettings().databaseURL}/userCharacter/${userCharacterId}.json`);
        return data;
    });
}

// Function to delete Notes info
function deleteNotes(userCharacterId) {
    // console.log("deleteNotes userCharacterId", userCharacterId);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/userCharacter/${userCharacterId}.json`,
        method: "DELETE"
    }).done((data) => {
        // console.log("deleteNotes data", data);
        return data;
    });
}
// load notes area after login
function getNotes(charNotes) {
    console.log("GetNotes running charNotes", charNotes);
    return $.ajax ({
        url: `${firebase.getFBsettings().databaseURL}/userCharacter/${charNotes}.json`
    }).done((notesData) => {
        return notesData;
    });
}

module.exports = {
    getFBDetails,
    addUserFB,
    updateUserFB,
    createUser,
    loginUser,
    saveBtn,
    addMyFavCharFB,
    deleteNotes,
    editNotes,
    getNotes
};













// function addMyFavCharFB(myFav) {
//     return $.ajax ({
//         url: `${firebase.getFBsettings().databaseURL}/userCharacter.json`,
//         type: 'POST',
//         data: JSON.stringify(myFav),
//         dataType: 'json'
//     }).done((charData) => {
//         return charData;
//     });
// }

// addMyFavCharFB(userChar)
// .then((taco) => {
//     console.log("Show object User character ", taco);
// }).reject((error) => {
//     console.log("The user Characters has a problem");
//     return error;
// });


// function setCharObj(obj) {
//     console.log("What's in setCharObj: ", obj);

//     for(var i = 0; i < characterData.length; i++) {

//         var charId = characterData[i].id;
//         var charName = characterData[i].name;
//         var charDescrip = characterData[i].description;
//         var charThumbnail = characterData[i].thumbnail.path;
//         var charThumbnailExt = characterData[i].thumbnail.extension;
//         var charUrl = characterData[i].urls[0].url;

//         // Add dom element here. target class card-body <div class="card-body">

//         characterInfo.innerHTML = `<h5 class="card-title">${charName}</h5>
//         <p class="card-text">ID: ${charId}<br>
//         DESCRIPTION: ${charDescrip}<br>
//         THUMBNAIL: ${charThumbnail} + "." + ${charThumbnailExt}<br>
//         URL: ${charUrl}</p>`;
//     }
//     return characterData;
// }


///// ----- Working file for API ------ /////

// function getCharacterFB(charsObj) {
//     return $.ajax({
//         url: `${firebase.getFBsettings().databaseURL}/characters.json?orderBy="uid"`
//     }).done((getInfo) => {
//         console.log("what's in getInfo from JSON FB ", getInfo)
//         return getInfo;
//     }).fail((error) => {
//         return error;
//     });
// }
//         console.log("What's in getCharacterFB charsObj ", getCharacterFB());



/////----- Posting API data into Firebase -----/////

// function addCharacterFB(characterObj) {
//     return $.ajax({
//         url: `${firebase.getFBsettings().databaseURL}/characters.json`,
//         type: 'PATCH',
//         data: JSON.stringify(characterObj),
//         dataType: 'json'
//     }).done((tacoFBId) => {
//         return tacoFBId;
//     });
// }
