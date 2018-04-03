"use strict";

let $ = require('jquery'),
firebase = require("./fb-config"),
db = require("./db-interaction");

// All variables
var showCharsDOM = "";
let displayChars;
let showCFavsDetails;

/////----- Getting data From Firebase -----/////
// Find out what else you need to show on to the DOM

function getCharactersFB(charsObj) {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/characters.json?orderBy="uid"`
    }).done((getInfo) => {
        return getInfo;
    }).fail((error) => {
        return error;
    });
}

function getFavCharactersFB(charsObj) {
    console.log("What's in getFavCharactersFB");
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/userCharacter.json?orderBy="id"`
    }).done((getAhaInfo) => {
        return getAhaInfo;
    }).then((newInfo) => {
        return newInfo;
    }).fail((error) => {
        return error;
    });
}

// To Display chars on DOM getCharactersFB is in db-interaction
/////----- Posting Firebase data to DOM -----/////
function showChars() {
    getCharactersFB(event)
    .then((getcInfo) => {
        var idArray = Object.keys(getcInfo);
        idArray.forEach((key) => {
        getcInfo[key].userCharid = key;
      });
        listCharacters(getcInfo);      
    });
} 

let showSingleCharacter = (myFavs) => { 
    return new Promise((resolve, reject) => {
       return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/characters/${myFavs.id}.json`
    }).done((getInfo) => {
        displayFavCharacter(getInfo, myFavs);
            resolve (getInfo.responseJSON);
        }).fail((error) => {
            return reject(error);
        }); 
    });   
};

//here you get info from listChars or getCharactersFB

function showFavChars() {
    getFavCharactersFB(event)
    .then((getuchInfo) => {
        var idFavs = Object.keys(getuchInfo);
        idFavs.forEach((key) => {
            getuchInfo[key].userFavid = key;
        });
        favoritesDetailDOM(getuchInfo);
    }); 
}

function favoritesDetailDOM(getuchInfo) {
    console.log("What is in getuchInfo", getuchInfo);
    let characterPromises = [];
    for(let myfav in getuchInfo) {
        showSingleCharacter(getuchInfo[myfav]);
    }  
}

$("#card-fav").html(favoritesDetailDOM()); 
$("#card-fav").html(showSingleCharacter);


//Loop through Object to place in Array
function listCharacters(getcInfo) {
        for(var i = 0; i < getcInfo.length; (i = i + 3)) {
            let charName1 = getcInfo[i].name;
            let charId1 = getcInfo[i].id;
            let userCharid1 = getcInfo[i].userCharid;
            let charDesc1 = getcInfo[i].description;
            let charComics1 = getcInfo[i].comics;
            let charThumb1 = getcInfo[i].thumbnail;
            let charStories1 = getcInfo[i].stories;
            let charSeries1 = getcInfo[i].series;
            let charEvents1 = getcInfo[i].events;

            let charName2 = getcInfo[i + 1].name;
            let charId2 = getcInfo[i + 1].id;
            let userCharid2 = getcInfo[i + 1].userCharid;
            let charDesc2 = getcInfo[i + 1].description;
            let charComics2 = getcInfo[i + 1].comics;
            let charThumb2 = getcInfo[i + 1].thumbnail;
            let charStories2 = getcInfo[i + 1].stories;
            let charSeries2 = getcInfo[i + 1].series;
            let charEvents2 = getcInfo[i + 1].events;

            let charName3 = getcInfo[i + 2].name;
            let charId3 = getcInfo[i + 2].id;
            let userCharid3 = getcInfo[i + 2].userCharid;
            let charDesc3 = getcInfo[i + 2].description;
            let charComics3 = getcInfo[i + 2].comics;
            let charThumb3 = getcInfo[i + 2].thumbnail;
            let charStories3 = getcInfo[i + 2].stories;
            let charSeries3 = getcInfo[i + 2].series;
            let charEvents3 = getcInfo[i + 2].events;

        

        /////----- Creating Index.HTML -----/////
        displayChars += 
        `<h2>Save Your Favorite Super Hero</h2>
        <div class="card-deck">
            <div class="card col-4">
                <img class="card-img-top" src="${charThumb1}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title"><strong>Name: </strong> ${charName1}</h5>
                    <p class="card-text"><strong>Description: </strong>${charDesc1}<br>
                    <strong>Comics: </strong><a href="${charComics1}" target="_blank">Find all  comics relating to ${charName1} here.</a><br>
                    <strong>Stories: </strong><a href="${charStories1}" target="_blank">Read all news articles relating to  ${charName1}.</a><br>
                    <strong>Series: </strong><a href="${charSeries1}" target="_blank">Here's our latest tv release for ${charName1}.</a><br>
                    <strong>Events: </strong><a href="${charEvents1}" target="_blank">Marvel Universe has all events.</a><br></p>
                </div>
                <div class="card-footer">
                        <small class="text-muted">Character ID: ${charId1}</small>
                    <a href="javascript: void(0)" class="btn btn-primary float-right save-fav" id="${userCharid1}">Add to Fav</a>
                </div>
            </div>
            <div class="card col-4">
            <img class="card-img-top" src="${charThumb2}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"><strong>Name: </strong> ${charName2}</h5>
                <p class="card-text"><strong>Description: </strong>${charDesc2}<br>
                    <strong>Comics: </strong><a href="${charComics2}" target="_blank">Find all  comics relating to ${charName2} here.</a><br>
                    <strong>Stories: </strong><a href="${charStories2}" target="_blank">Read all news articles relating to  ${charName2}.</a><br>
                    <strong>Series: </strong><a href="${charSeries2}" target="_blank">Here's our latest tv release for ${charName2}.</a><br>
                    <strong>Events: </strong><a href="${charEvents2}" target="_blank">Marvel Universe has all events.</a><br>
                </p>
            </div>
            <div class="card-footer">
                    <small class="text-muted">Character ID: ${charId2}</small>
                <button href="javascript: void(0)" class="btn btn-primary float-right save-fav" id="${userCharid2}">Add to Fav</button>
                </div>
            </div>
            <div class="card col-4">
            <img class="card-img-top" src="${charThumb3}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"><strong>Name: </strong> ${charName3}</h5>
                <p class="card-text"><strong>Description: </strong>${charDesc3}<br><strong>Comics: </strong><a href="${charComics3}" target="_blank">Find all  comics relating to ${charName3} here.</a><br><strong>Stories: </strong><a href="${charStories3}" target="_blank">Read all news articles relating to  ${charName3}.</a><br><strong>Series: </strong><a href="${charSeries3}" target="_blank">Here's our latest tv release for ${charName3}.</a><br><strong>Events: </strong><a href="${charEvents3}" target="_blank">Marvel Universe has all events.</a><br></p>
            </div>
            <div class="card-footer">
                    <small class="text-muted">Character ID: ${charId3}</small>
                <button href="javascript: void(0)" class="btn btn-primary float-right save-fav" id="${userCharid3}">Add to Fav</button>
                </div>
            </div>
        </div>`;

        $("#new-chars").html(displayChars);

    }
}

$("#new-chars").html(function() {
     showChars();
});

let showFavsDetails;
let showFavsHeader;
let noteDisplay;
let loadNotes;
let dispMyFavid;
let dispMyCharid;
let dispMyFavs;
let userCharInfo;

// get info from displayFavCharacter() into 
//favoritesDetailDom()
    function displayFavCharacter(getInfo, myFavs) {
        console.log("displayFavCharacter getInfo, myFavs", getInfo, myFavs);
        dispMyFavid = myFavs.userFavid;
        dispMyCharid = myFavs.id;
        dispMyFavs = myFavs;
        

        showFavsHeader = `<button onclick="pageRefresh()"><a href="javascript: void(0)" class="btn btn-primary float-left notes disable">Back to Super Heroes</a></button><br><br>
        <div><h2>My Favorite Super Hero</h2></div>`;

        showFavsDetails += 
        `<div class="card-deck card-group card-resize" data-card-deck-id=${myFavs.userFavid}>
            <div class="card">
                <img class="card-img-top" src="${getInfo.thumbnail}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title"><strong>Name: </strong> ${getInfo.name}</h5>
                    <p class="card-text"><strong>Description: </strong>${getInfo.description}<br>
                    <strong>Comics: </strong><a href="${getInfo.comics}" target="_blank">Find all  comics relating to ${getInfo.name} here.</a><br>
                    <strong>Stories: </strong><a href="${getInfo.stories}" target="_blank">Read all news articles relating to  ${getInfo.name}.</a><br>
                    <strong>Series: </strong><a href="${getInfo.series}" target="_blank">Here's our latest tv release for ${getInfo.name}.</a><br>
                    <strong>Events: </strong><a href="${getInfo.events}" target="_blank">Marvel Universe has all events.</a><br></p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Character ID: ${getInfo.id}</small>
                    <a href="javascript: void(0)" class="btn btn-primary float-right delete-btn" id="delete-id" data-id=${myFavs.userFavid} onmousedown="return false">Delete SuperHero</a>
                </div>
            </div>

            <div class="card card-padding">
                <div class="card-body">
                    <p class="card-text">
                        <div class="form-group">
                            <h3 class="card-title card-uppercase card-margin">Notes</h3>
                            <textarea class="form-control" rows="10" id=${myFavs.userFavid}>${myFavs.addNotes}
                            </textarea>
                        </div>
                        </p>
                    <div class="card-footer">
                        <a href="javascript: void(0)" class="btn btn-primary float-right notes save-new-note" onmousedown="return false">Save / Edit</a>
                    </div>
                </div>
            </div>
        </div>`;

    $("#body-container").html(showFavsDetails).prepend(showFavsHeader);

    return dispMyFavs;
}

function editButtonId() {
    return dispMyFavs;
}
function pageRefresh() {
    location.reload();
}
module.exports = {
    showChars,
    listCharacters,
    getCharactersFB,
    favoritesDetailDOM,
    showSingleCharacter,
    getFavCharactersFB,
    showFavChars,
    displayFavCharacter,
    editButtonId,
    pageRefresh
};
