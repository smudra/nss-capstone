"use strict";

console.log("DB interaction is here");
let $ = require('jquery'),
    firebase = require("./fb-config"),
    currentUser = null,
    provider = new firebase.auth.GoogleAuthProvider(),
    characterDOMbuilder = require('./characterDOMbuilder'),
    marvelCharacters = require('./marvel-characters'),
    user = require("./user");

    let userChar = {
        id: "",
        charNotes: "",
        uid: user.getUser()
    };
// console.log(" what's in user Character", user.getUser(), user);


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
    console.log("User Character here JSON.stringify(userChar)", JSON.stringify(userChar));
    return $.ajax ({
        url: `${firebase.getFBsettings().databaseURL}/userCharacter.json`,
        type: 'POST',
        data: JSON.stringify(userChar),
        dataType: 'json'
    }).done((charData) => {
        return charData;
    }).fail((error) => {
        // console.log("The addMyFAVCharFB has errored out");
        return error;
    });
}

function saveBtn(e) {
    userChar.id = e.target.id;
    userChar.uid = user.getUser();
    addMyFavCharFB(userChar);
    // characterDOMbuilder.favoritesDetailDOM();
    let singleChar = characterDOMbuilder.showSingleCharacter(e.target.id);
    characterDOMbuilder.listFavCharacters();
    // console.log("Save my Single fav char hero object target", singleChar);
}
// Event listener for save button
    
        $(document).on("click", ".save-fav", function(e) {
            saveBtn(e);
        });

// load fav area after login
function getChars(currentUser) {
    return $.ajax ({
        url: `${firebase.getFBsettings().databaseURL}/userCharacter.json?orderBy="uid"&equalTo="${currentUser}"`
    }).done((notesData) => {
        return notesData;
    });
}



// POST - Submits data to be processed to a userCharacter. Takes one parameter
function addNotes(noteObj) {
    return $.ajax({
        // add notes in the collection
        url: `${firebase.getFBsettings().databaseURL}/userCharacter.json`,
        type: 'POST',
        data: JSON.stringify(noteObj),
        dataType: 'json'
    }).done((charNotes) => {
        return charNotes;
    });
}

// Function to delete Notes info
function deleteNotes(charNotes) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/userCharacter/${charNotes}.json`,
        method: "DELETE"
    }).done((data) => {
        return data;
    });
}

// function for userCharacter notes
function getNotes(charNotes) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/userCharacter/${charNotes}.json`
    }).done((note) => {
        // console.log("Let's see notes", note);
        return note;
    });
}


// GET - Requests/read data from a specified source
// PUT - Update data to a specified resource.
// Takes two parameters.
function editNotes(noteObj, charNotes) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/userCharacter/${charNotes}.json`,
        type: 'PUT',
        data: JSON.stringify(noteObj)
    }).done((data) => {
        return data;
    });
}

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

module.exports = {
    getFBDetails,
    addUserFB,
    updateUserFB,
    createUser,
    loginUser,
    // characterNotes
};











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
