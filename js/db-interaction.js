"use strict";

let $ = require('jquery'),
    firebase = require("./fb-config"),
    currentUser = null,
    provider = new firebase.auth.GoogleAuthProvider(),
    marvelCharacters = require('./marvel-characters');

function getFBDetails(user) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/user.json?orderBy="uid"&equalTo="${user}"`
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
    }).done((fbID) => {
        return fbID;
    });
}

function updateUserFB(userObj) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/user/${userObj.fbID}.json`,
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

function googlelogIn() {
    return firebase.auth().signInWithPopup(provider);
}

function googleLogOut() {
    return firebase.auth().signOut();
}

function setUser(val) {
    currentUser = val;
}

function getUser() {
    return currentUser;
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        currentUser = user;
        console.log("This user is logged in: ", currentUser);
    } else {
        currentUser = null;
        console.log("user is not logged in.");
    }
});


/////----- Posting API data into Firebase -----/////

function addCharacterFB(characterObj) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/characters.json`,
        type: 'PUT',
        data: JSON.stringify(characterObj),
        dataType: 'json'
    }).done((tacoFBId) => {
        return tacoFBId;
    });
}

/////----- Getting API data From Firebase -----/////
// Find out what else you need to show on to the DOM

function getCharacterFB(chars) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/characters/${chars}.json`,
    }).done((charInfo) => {
        return charInfo;
    }).fail((error) => {
        return error;
    });
}

module.exports = {
    getFBDetails,
    addUserFB,
    updateUserFB,
    createUser,
    loginUser,
    googlelogIn,
    googleLogOut,
    addCharacterFB
};
