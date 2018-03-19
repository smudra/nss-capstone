"use strict";

let $ = require('jquery'),
    firebase = require("./fb-config"),
    provider = new firebase.auth.GoogleAuthProvider();

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
        data: JSON.stringify(UserObj),
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

function logInGoogle() {
    return firebase.auth().signInWithPopup(provider);
}

function logOut() {
    return firebase.auth().signOut();
}

module.exports = {
    getFBDetails,
    addUserFB,
    updateUserFB,
    createUser,
    loginUser,
    logInGoogle,
    logOut
};
