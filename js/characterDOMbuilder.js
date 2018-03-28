"use strict";
console.log("characterDOMbuilder is in the house");

let $ = require('jquery'),
firebase = require("./fb-config"),
db = require("./db-interaction");

// All variables
var showCharsDOM = "";
let displayChars;

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
        // console.log("What's in getCharacterFB charsObj ",charsObj);

// To Display chars on DOM getCharactersFB is in db-interaction
/////----- Posting Firebase data to DOM -----/////
function showChars() {
    getCharactersFB(event)
    .then((getcInfo) => {
        var idArray = Object.keys(getcInfo);
        idArray.forEach((key) => {
        getcInfo[key].userCharid = key;
        console.log("char data", getcInfo[key]);
      });
        listCharacters(getcInfo);
        
    });
} 

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

        

        // displayChars += charName + charId + charDesc + charComics + charThumb + charStories + charSeries + charEvents;

        /////----- Creating Index.HTML -----/////
        displayChars += 
        `<h2>Save Your Favorite Super Hero</h2>
        <div class="card-deck">
            <div class="card col-4">
                <img class="card-img-top" src="${charThumb1}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title"><strong>Name: </strong> ${charName1}</h5>
                    <p class="card-text"><strong>Description: </strong>${charDesc1}<br><strong>Comics: </strong><a href="${charComics1}" target="_blank">Find all  comics relating to ${charName1} here.</a><br><strong>Stories: </strong><a href="${charStories1}" target="_blank">Read all news articles relating to  ${charName1}.</a><br><strong>Series: </strong><a href="${charSeries1}" target="_blank">Here's our latest tv release for ${charName1}.</a><br><strong>Events: </strong><a href="${charEvents1}" target="_blank">Marvel Universe has all events.</a><br></p>
                </div>
                <div class="card-footer">
                        <small class="text-muted">Character ID: ${charId1}</small>
                    <a href="#" class="btn btn-primary float-right save-fav" id="${userCharid1}">Add to Fav</a>
                </div>
            </div>
            <div class="card col-4">
            <img class="card-img-top" src="${charThumb2}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"><strong>Name: </strong> ${charName2}</h5>
                <p class="card-text"><strong>Description: </strong>${charDesc2}<br><strong>Comics: </strong><a href="${charComics2}" target="_blank">Find all  comics relating to ${charName2} here.</a><br><strong>Stories: </strong><a href="${charStories2}" target="_blank">Read all news articles relating to  ${charName2}.</a><br><strong>Series: </strong><a href="${charSeries2}" target="_blank">Here's our latest tv release for ${charName2}.</a><br><strong>Events: </strong><a href="${charEvents2}" target="_blank">Marvel Universe has all events.</a><br></p>
            </div>
            <div class="card-footer">
                    <small class="text-muted">Character ID: ${charId2}</small>
                <button href="#" class="btn btn-primary float-right save-fav" id="${userCharid2}">Add to Fav</button>
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
                <button href="#" class="btn btn-primary float-right save-fav" id="${userCharid3}">Add to Fav</button>
                </div>
            </div>
        </div>`;

        $("#new-chars").html(displayChars);

    }
}

$("#new-chars").html(function() {
    showChars();
});

//////----- Creating my-favorites.HTML -----/////
// Adding characters to my favorites page

// var saveToFavs = document.getElementById("save-fav");


function showFavChars() {
    //here you get info from listChars or getCharactersFB

}

function favoritesDetailDOM(noteList) {

    let $showFavsDetails = $(`<div class="body-container"><h2><a href="my-favorites.html" class="btn btn-primary float-left notes disable">Back to Super Heroes</a></h2></div><br><br>

    <div><h2>My Favorite Super Hero</h2></div>`);
    $(".body-container").html($showFavsDetails);

    for(let myfav in noteList) {
     let currentNotes = noteList[myfav],
        noteListItem = $("<div>", {class: "card col-4"}),
        charImage = $(".card-img-top").prepend($("<img>", {src: "images/dare-devil.png"})),
        notesTitle = $("<textarea/>", {class: "form-control"}).text(currentNotes.notesTitle),
        noteEdit = $("<div>", {"data-edit-id": myfav, class:"edit-btn btn btn-primary float-left notes", text: "Edit Notes"}),
        noteDelete = $("<div>", {"data-delete-id": myfav, class:"delete-btn btn btn-primary float-right", text: "Delete Notes"});

     $(".card").append(noteListItem.append(notesTitle).append(noteEdit).append(noteDelete));
    }
}
// Build Notes area for each character added
function characterNotes(userCharacter, saveNotes) {
    return new Promise(function (resolve, reject) {
        let charNotes = {
            notes: userCharacter ? userCharacter.notes : "",
            notesTitle: userCharacter ? `Edit "${userCharacter.title}"` : "Add My Notes",
            saveNotesText: userCharacter ? "Save Notes" : "Save My Notes",
            SaveEditBtn: userCharacter ? "save-edit-notes" : "save-new-notes"
        },
        notes = 
        `<div class="card-body">
            <p class="card-text">
                <div class="form-group">
                    <h3 for="comment" class="card-title card-uppercase card-margin">${charNotes.notesTitle}</h3>
                    <textarea class="form-control" rows="10" id="comment" placeholder="title" value="my favorite super hero notes"></textarea>
                    <button id="${saveNotes}" class=${charNotes.SaveEditBtn}>${charNotes.saveNotesText}</button>`;
                    resolve(notes);
    });
}



    // saveToFavs.innerHTML = favoritesDetailDOM();

    ///----- Loading on to DOM after user logs in index.HTML -----/////

module.exports = {
    showChars,
    listCharacters,
    getCharactersFB,
    favoritesDetailDOM,
    characterNotes
};

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

// /////----- Creating favorite-details.HTML -----/////
// function favoritesDetailDOM(myfav) {
//     let showFavsDetails = $(`<div><h2><a href="my-favorites.html" class="btn btn-primary float-left notes disable">Back to Super Heroes</a></h2></div><br><br>
//     <h2>Super Hero Detail</h2>
//     <!-- Begin row 1 of Saved Super Heroes Section -->
//     <div class="card-deck card-padding">
//         <div class="card">
//           <img class="card-img-top" src="images/dare-devil.png" alt="Comic Character Daredevil">
//           <div class="card-body">
//             <h3 class="card-title card-uppercase">Daredevil</a></h3>
//             <p class="card-text">Abandoned by his mother, Matt Murdock was raised by his father, boxer "Battling Jack" Murdock, in Hell's Kitchen.</p>
//             <p><strong>Real Name:</strong>  Matthew Michael Murdock<br>
//             <strong>Height:</strong>  6'0"<br>
//             <strong>Powers:</strong> In compensation for his lost sight, Daredevil’s other four senses have been preternaturally enhanced.His sense of touch is sensitive enough to detect the faint impressions of ink on paper, allowing him to read by touch. He is also able more<br>
//             <strong>Abilities:</strong> Daredevil possesses the strength, speed, agility, and endurance, not to mention acrobatic and gymnastic skills, of an Olympic-level athlete. Through a combination of the tutelage of Stick and self-training, Daredevil is a master of more<br>
//             <strong>Group Affiliations:</strong>   Formerly Defenders, Marvel Knights, "Marvel Knights"<br>
//             <strong>First Appearance:</strong>  Daredevil #1 (1964)<br>
//             <strong>Origin:</strong>  Daredevil #1 (1964); Daredevil: The Man Without Fear #1-5 (1993-1994); Daredevil: Yellow #1-6 (2001-2002)</p>
//           </div>
//         </div>
//         <div class="card">
//           <div class="card-body">
//             <p class="card-text">
//                 <div class="form-group">
//                     <h3 for="comment" class="card-title card-uppercase card-margin">Notes</h3>
//                     <textarea class="form-control" rows="10" id="comment">Season 3: In it, Matt is in much the same position we saw him at the end of The Defenders: half dead and being cared for by a group of nuns. One in particular should be his long-absent mother, which means a good portion of Daredevil season 3 could see Matt out of commission as Daredevil.
//                     </textarea>
//                 </div></p>
//             <div class="card-footer">
//                 <a href="#" class="btn btn-primary float-left notes disable">Save</a>
//                 <a href="#" class="btn btn-primary float-right">Delete</a>
//             </div>
//           </div>
//         </div>
//     </div>`);
//     $(".body-container").html(showFavsDetails);
// }

/////----- Loading on to DOM after user logs in index.HTML -----/////
// document.addEventListener('DOMContentLoaded', function() {
//     $('#home-user').on('click', function() {
//         db.getCharacterFB();
//     });
// });

/////----- Loading JSON file on to DOM  -----/////



// === Working file === //


// function showChars() {
//     getCharactersFB(event)
//     .then(function(getcInfo) {
//         console.log("what is in getcInfo showChars", getcInfo);
//         listCharacters(getcInfo);
//     });
// }    


// Loop that works but not useful in this instance


    // for(let characters in getcInfo) {
    //     let charName = getcInfo[characters].name;
    //     let charId = getcInfo[characters].id;
    //     let charDesc = getcInfo[characters].description;
    //     let charComics = getcInfo[characters].comics;
    //     let charThumb = getcInfo[characters].thumbnail;
    //     let charStories = getcInfo[characters].stories;
    //     let charSeries = getcInfo[characters].series;
    //     let charEvents = getcInfo[characters].events;