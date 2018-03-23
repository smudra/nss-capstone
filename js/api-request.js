"use strict";

let $ = require('jquery'),
    marvelApiURL = require('./marvel-key'),
    db = require('./db-interaction'),
    firebase = require("./fb-config"),
    user = require("./user");

// let marvelApiURL = 
// "https://gateway.marvel.com:443/v1/public/characters?modifiedSince=01%2F01%2F2015&orderBy=modified&limit=99&apikey=a0e48461d9a3fb743776209380da6b53";

var characterInfo = document.getElementsByClassName("card-body");
var characterData = "";
var requiredCharData = "";
var charId = "";
var charName = "";
var charDescrip = "";
var charThumbnail = "";
var charThumbnailExt = "";
var charUrl = "";
let characterObj = {
    id: characterData.id,
    name: characterData.name,
    description: "",
    thumbnail: "",
    thumbnailext: "", // add extension .jpg to this path.jpg
    powers: ""
};

// get the API from Marvel Comics

function getAPIKeyRequest() {
    console.log("MarvelAPIURL ", marvelApiURL().marvelApiKey);
    return $.ajax ({
        url: marvelApiURL().marvelApiKey,
        method: "GET"
        }).done((marvelData) => {
            return marvelData;
        });
}

    getAPIKeyRequest()
    .then((marvelData) => {

        // refining only the data that is necessary
        characterData = marvelData.data.results;
        console.log("What's in characterData ", characterData);

        // =====================

        // Push info into firebase.

        db.addCharacterFB(characterData)
        .then((result) => {
            charLoop();
            // console.log("Characters added using object CharacterObj", characterData);

            // var refinedData = [];
            // for(var i = 0; i < characterData.length; i++) {

            // charId = characterData[i].id;
            // charName = characterData[i].name;
            // charDescrip = characterData[i].description;
            // charThumbnail = characterData[i].thumbnail.path;
            // charThumbnailExt = characterData[i].thumbnail.extension;
            // charUrl = characterData[i].urls[0].url;

            //     let characterObj = {
            //             id: charId,
            //             name: charName,
            //             description: charDescrip,
            //             thumbnail: charThumbnail,
            //             thumbnailext: charThumbnailExt, // add extension .jpg to this path.jpg
            //             powers: charUrl
            //     };

            //     refinedData.push(characterObj);

            //     let chars = firebase.database().ref('chars/');
            //     refinedData.forEach(item => {
            //         chars.push(item);
            //     });
            // }
            //     console.log("refined Data ", refinedData);            
            //     console.log("What's in .then characterData ", characterData);
            // return characterObj;
        });
    });
    
    var refinedData = [];
function charLoop() {
            for(var i = 0; i < characterData.length; i++) {

            charId = characterData[i].id;
            charName = characterData[i].name;
            charDescrip = characterData[i].description;
            charThumbnail = characterData[i].thumbnail.path;
            charThumbnailExt = characterData[i].thumbnail.extension;
            charUrl = characterData[i].urls[0].url;

                var characterObj = {
                        id: charId,
                        name: charName,
                        description: charDescrip,
                        thumbnail: charThumbnail,
                        thumbnailext: charThumbnailExt, // add extension .jpg to this path.jpg
                        powers: charUrl
                };
/////----- Working Code for POST API data to Firebase  -----/////
                // refinedData.push(characterObj);
                // charsToFB();                
                // // var chars = firebase.database().ref('chars/');
                // // refinedData.forEach((item) => {
                // //     chars.push(item);
                // // });
            }
}
// var chars = firebase.database().ref('chars/');
// function charsToFB() {
// refinedData.forEach((item) => {
//     chars.push(item);
// });
// }
/////----- Working Code for POST API data to Firebase  -----/////
// I had to gray out because everytime the page is refreshed it uploads api info to FB causing Objects created 56 times every time the page loads in the browser"
//

// var chars = firebase.database().ref('chars/');
// Create an Object with the necessary character Info

    module.exports = getAPIKeyRequest;















    


// console.log("What's in charInfo: ", charInfo);

            // console.log(" What's in these charId + charName + charDescrip + charThumbnail + charThumbnailExt + charUrl", charId + charName + charDescrip + charThumbnail + charThumbnailExt + charUrl);

            // =====================

// function addCharacterFB(characterObj) {
//     return $.ajax({
//         url: `${firebase.getFBsettings().databaseURL}/characters.json`,
//         type: 'PUT',
//         data: JSON.stringify(characterObj),
//         dataType: 'json'
//     }).done((tacoFBId) => {
//         return tacoFBId;
//     });
// }

// console.log("CharacterData ", characterData);

// function sendToFB(mData) {
//     return $.ajax({
//         url: 
//     })
// }
        
//     var characterData = marvelData.data.results;
//     return characterData;
//     db.addCharacterFB(marvelData);
//     for(var i = 0; i < characterData.length; i++) {
//     // console.log("What's in characterData[i].thumbnail.path ",characterData[i].thumbnail.path);
//     var characterInfo = characterData[i].name;

//     console.log("What's in CharacterInfo ", characterInfo);
// }

// "https://gateway.marvel.com:443/v1/public/characters?modifiedSince=01%2F01%2F2013&limit=99&apikey=a0e48461d9a3fb743776209380da6b53";

// "https://gateway.marvel.com:443/v1/public/characters?modifiedSince=2015&limit=99&apikey=a0e48461d9a3fb743776209380da6b53";

// "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=av&limit=99&apikey=a0e48461d9a3fb743776209380da6b53";

// "https://gateway.marvel.com:443/v1/public/characters?limit=99&apikey=a0e48461d9a3fb743776209380da6b53";

// "http://gateway.marvel.com/v1/public/characters?apikey=a0e48461d9a3fb743776209380da6b53";

