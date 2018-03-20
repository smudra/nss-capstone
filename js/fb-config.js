"use strict";

console.log("configure file for Firebase");

let firebase = require("firebase/app");
    require("firebase/auth");
    require("firebase/database");

let fbKey = require("./fb-key"),
    fbData = fbKey();


var config = {
    apiKey: fbData.apiKey,
    authDomain: fbData.authDomain,
    databaseURL: fbData.databaseURL
};
firebase.getFBsettings = function(){
    console.log("getFBsettings", config);
    return config;
};

firebase.initializeApp(config);

module.exports = firebase;