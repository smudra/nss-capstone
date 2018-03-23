"use strict";
console.log("characterDOMbuilder is in the house");

let $ = require('jquery'),
    db = require('./db-interaction');

// All variables
var charInfo;

function showChars(showData) {
    db.getCharactersFB(showData)
    .then((charData) => {
        charInfo = charData;
        console.log("What's in charData ", charData);
    });
}

showChars();


/////----- Posting Firebase data to DOM -----/////


/////----- Creating Index.HTML -----/////
function displayCharsDom(char) {
    let showCharsDOM = $(`<h2>Save Your Favorite Super Hero</h2>
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
        </div>`);

    $("#card-container").html(showCharsDOM);
}


/////----- Creating my-favorites.HTML -----/////
function myfavoritesDOM(myfav) {
    let showMyFavs = $(`
    <h2>My Favorite Super Heroes</h2>
    <!-- Begin row 1 of Saved Super Heroes Section -->
    
    <div class="card-deck card-padding">
        <div class="card">
          <img class="card-img-top" src="images/dare-devil.png" alt="Comic Character Daredevil">
          <div class="card-body">
            <h3 class="card-title card-uppercase"><a href="favorites-detail.html">Daredevil</a></h3>
            <p class="card-text">Abandoned by his mother, Matt Murdock was raised by his father, boxer "Battling Jack" Murdock, in Hell's Kitchen.</p>
            <p><strong>Real Name:</strong>  Matthew Michael Murdock<br>
            <strong>Height:</strong>  6'0"</p>
          </div>
          <div class="card-footer">
            <a href="favorites-detail.html" class="btn btn-primary float-left notes">Make Notes</a>
            <a href="#" class="btn btn-primary float-right">Delete</a>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="images/spiderman.png" alt="Comic Character Spider-Man">
          <div class="card-body">
            <h3 class="card-title card-uppercase"><a href="#">Spider-Man</a></h3>
            <p class="card-text">Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider.</p>
            <p><strong>Real Name:</strong> Peter Benjamin Parker<br>
            <strong>Height:</strong> 5'10"</p>
          </div>
            <div class="card-footer">
                <a href="my-favorites.html" class="btn btn-primary float-left notes disable">Edit Notes</a>
                <a href="#" class="btn btn-primary float-right">Delete</a>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src="images/black-widow.png" alt="Comic Character Black Widow">
            <div class="card-body">
                <h3 class="card-title card-uppercase"><a href="#">Black Widow</a></h3>
                <p class="card-text">Natasha Romanova, known by many aliases, is an expert spy, athlete, and assassin.</p>
                <p><strong>Real Name:</strong> Natasha Romanova<br>
                <strong>Height:</strong> not known</p>
            </div>
            <div class="card-footer">
                <a href="#" class="btn btn-primary float-left notes disable">Edit Notes</a>
                <a href="#" class="btn btn-primary float-right">Delete</a>
            </div>
        </div>
    </div>`);
    $("body-container").html(showMyFavs);
}

/////----- Creating favorite-details.HTML -----/////
function favoritesDetailDOM(myfav) {
    let showFavsDetails = $(`<div><h2><a href="my-favorites.html" class="btn btn-primary float-left notes disable">Back to Super Heroes</a></h2></div><br><br>
    <h2>Super Hero Detail</h2>
    <!-- Begin row 1 of Saved Super Heroes Section -->
    <div class="card-deck card-padding">
        <div class="card">
          <img class="card-img-top" src="images/dare-devil.png" alt="Comic Character Daredevil">
          <div class="card-body">
            <h3 class="card-title card-uppercase">Daredevil</a></h3>
            <p class="card-text">Abandoned by his mother, Matt Murdock was raised by his father, boxer "Battling Jack" Murdock, in Hell's Kitchen.</p>
            <p><strong>Real Name:</strong>  Matthew Michael Murdock<br>
            <strong>Height:</strong>  6'0"<br>
            <strong>Powers:</strong> In compensation for his lost sight, Daredevil’s other four senses have been preternaturally enhanced.His sense of touch is sensitive enough to detect the faint impressions of ink on paper, allowing him to read by touch. He is also able more<br>
            <strong>Abilities:</strong> Daredevil possesses the strength, speed, agility, and endurance, not to mention acrobatic and gymnastic skills, of an Olympic-level athlete. Through a combination of the tutelage of Stick and self-training, Daredevil is a master of more<br>
            <strong>Group Affiliations:</strong>   Formerly Defenders, Marvel Knights, "Marvel Knights"<br>
            <strong>First Appearance:</strong>  Daredevil #1 (1964)<br>
            <strong>Origin:</strong>  Daredevil #1 (1964); Daredevil: The Man Without Fear #1-5 (1993-1994); Daredevil: Yellow #1-6 (2001-2002)</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <p class="card-text">
                <div class="form-group">
                    <h3 for="comment" class="card-title card-uppercase card-margin">Notes</h3>
                    <textarea class="form-control" rows="10" id="comment">Season 3: In it, Matt is in much the same position we saw him at the end of The Defenders: half dead and being cared for by a group of nuns. One in particular should be his long-absent mother, which means a good portion of Daredevil season 3 could see Matt out of commission as Daredevil.
                    </textarea>
                </div></p>
            <div class="card-footer">
                <a href="#" class="btn btn-primary float-left notes disable">Save</a>
                <a href="#" class="btn btn-primary float-right">Delete</a>
            </div>
          </div>
        </div>
    </div>`);
    $("body-container").html(showFavsDetails);
}

/////----- Loading on to DOM after user logs in index.HTML -----/////
document.addEventListener('DOMContentLoaded', function() {
    $('#home-user').on('click', function() {
        db.getCharacterFB();
    });
});

module.exports = {
    displayCharsDom,
    showChars,
    myfavoritesDOM};