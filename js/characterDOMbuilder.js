"use strict";
console.log("characterDOMbuilder is in the house");

let $ = require('jquery'),
    db = require('./db-interaction');

// All variable
var charInfo;

/////----- Posting Firebase data to DOM -----/////

// --Delete this function. It is for reference only-- //
// function getCharacterFB(charsObj) {
//     return $.ajax({
//         url: `${firebase.getFBsettings().databaseURL}/chars.json?orderBy="uid"`
//     }).done((resolve) => {
//         return resolve;
//     }).fail((error) => {
//         return error;
//     });
// }


/////----- Creating Index.HTML -----/////
function displayCharsDom(char) {
    let showCharsDOM = `<h2>Save Your Favorite Super Hero</h2>
        <div class="card-deck">
            <div class="card col-4">
                <img class="card-img-top" src="images/spiderman.png" alt="Card image cap">
                <div class="card-body"></div>
                <div>
                    <h5 class="card-title">Spider-Man</h5>
                    <p class="card-text">Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider.</p>
                </div>
                <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    <a href="#" class="btn btn-primary float-right disabled">Save</a>
                </div>
            </div>
            <div class="card col-4">
                <img class="card-img-top" src="images/thor.png" alt="Card image cap">
                <div class="card-body"></div>
                <div>
                <h5 class="card-title">Thor</h5>
                <p class="card-text">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir.</p>
                </div>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                <a href="my-favorites.html" class="btn btn-primary float-right">Save</a>
                </div>
            </div>
            <div class="card col-4">
                <img class="card-img-top" src="images/black-widow.png" alt="Card image cap">
                <div class="card-body"></div>
                <div>
                    <h5 class="card-title">Black Natasha Widow</h5>
                    <p class="card-text">Natasha Romanova, known by many aliases, is an expert spy, athlete, and assassin.</p>
                </div>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                <a href="#" class="btn btn-primary float-right disabled">Save</a>
                </div>
            </div>
        </div>`;

    $('#card-container').html(showCharsDOM);

}

function showChars() {
    db.getCharactersFB()
    .then((charData) => {
        charInfo = charData;
        console.log("What's in charData ", charData);
    });
}


module.exports = {
    displayCharsDom,
    showChars};