"use strict";

let $ = require('jquery'),
firebase = require("./fb-config"),
db = require("./db-interaction"),
user = require("./user");

/// This file is different test code. Please discard///

function getAllFavChars() {
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/userCharacter.json?orderBy="id"`
    }).done((allUserChars) => {
        return allUserChars;
    }).then((allUserChars) => {
        dispAllFavChars(allUserChars);
        // return allUserChars;
    });
}

function dispAllFavChars(allUserChars) {
    console.log("user chars", allUserChars.length);
    for(var k = 0; k <= allUserChars.length; k++) {

        // let singleChar = allChars[eachChar];
        console.log("singleChar id ", allUserChars[k].id);
        console.log("singleChar uid ", allUserChars[k].uid);
        // console.log("Each char id ", eachChar.id);
        // console.log("Each char uid ", eachChar.uid);
    }
}

module.exports = {
    getAllFavChars,
    dispAllFavChars
};


//// ++++ All Working Codes ++++ ////

//-- characterDOMbuilder.js --//

// working code --- Save this ---
// {/* <textarea class="form-control" rows="10" id=${dispMyFavid}>${addingNotes}
//                             </textarea>
//  */}


// $("#body-container").html(showFavsDetails).prepend(showFavsHeader).append(makeNotesPageFormat());



// Build Notes area for each character added
// What is this function for? Ref in db-interaction
//line 105.

// function makeNotesPageFormat(noteList) {
//     // console.log("What's in notelist. It comes undefined ", noteList);
//     let noteDisplay = $(`
//         <div class="card-body">
//             <p class="card-text">
//                 <div class="form-group" id="comment"></div>
//             </p>
//         </div>`);

//     for(let note in noteList) {
//             let currentNotes = noteList[note],
//             noteListItem = $("<h3>", {class: "card-title card-uppercase card-margin"}),
//             notesTitle = $("<textarea/>", {class: "form-control"}).text(currentNotes.notesTitle),
//             noteFooter = $("<div>", {class: "card-footer"}),
//             noteEdit = $("<div>", {"data-edit-id": note, class:"edit-btn btn btn-primary float-left notes", text: "Edit Notes"}),
//             noteDelete = $("<div>", {"data-delete-id": note, class:"delete-btn btn btn-primary float-right", text: "Delete Notes"});

//             notesTitle.append(
//                 `<p>${currentNotes.addNotes}</p>`
//             );
    
//             $(".card").append(noteListItem.append(notesTitle).append(noteFooter).append(noteEdit).append(noteDelete));
//     }
// }

// function characterNotes(userCharacter, userCharacterId) {
//     return new Promise(function (resolve, reject) {
//         let charNotes = {
//             addNotes: userCharacter ? userCharacter.addNotes : "",
//             notesTitle: userCharacter ? `Edit "${userCharacter.title}"` : "Add My Notes",
//             btnText: userCharacter ? "Save Notes" : "Save My Notes",
//             btnId: userCharacter ? "save-edit-notes" : "save-new-notes"
//         },
//         notes = 
//         `<div class="card-body">
//             <p class="card-text">
//                 <div class="form-group">
//                     <h3 id="comment" class="card-title card-uppercase card-margin">${charNotes.notesTitle}</h3>
//                     <textarea class="form-control" id="form-notes" rows="10" id="comment" placeholder="title" value="my favorite super hero notes"></textarea>
//                     <button id="${userCharacterId}" class=${charNotes.btnId}>${charNotes.btnText}</button>
//                 </div>
//             </p>
//         </div>`;
        
//         resolve(notes);
//     });
// }


// <div class="card-footer">
//                 <a href="#" class="btn btn-primary float-left notes disable">Add Notes</a>
//                 <a href="#" class="btn btn-primary float-right">Save Notes</a>
//             </div>
//           </div>


/////----- Creating my-favorites.HTML -----/////
// function myfavoritesDOM(myfav) {
//     let showMyFavs = $(`
//     <h2>My Favorite Super Heroes</h2>
//     <!-- Begin row 1 of Saved Super Heroes Section -->
    
//     <div class="card-deck card-padding">
//         <div class="card">
//           <img class="card-img-top" src="images/dare-devil.png" alt="Comic Character Daredevil">
//           <div class="card-body">
//             <h3 class="card-title card-uppercase"><a href="favorites-detail.html">Daredevil</a></h3>
//             <p class="card-text">Abandoned by his mother, Matt Murdock was raised by his father, boxer "Battling Jack" Murdock, in Hell's Kitchen.</p>
//             <p><strong>Real Name:</strong>  Matthew Michael Murdock<br>
//             <strong>Height:</strong>  6'0"</p>
//           </div>
//           <div class="card-footer">
//             <a href="favorites-detail.html" class="btn btn-primary float-left notes">Make Notes</a>
//             <a href="#" class="btn btn-primary float-right">Delete</a>
//           </div>
//         </div>
//         <div class="card">
//           <img class="card-img-top" src="images/spiderman.png" alt="Comic Character Spider-Man">
//           <div class="card-body">
//             <h3 class="card-title card-uppercase"><a href="#">Spider-Man</a></h3>
//             <p class="card-text">Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider.</p>
//             <p><strong>Real Name:</strong> Peter Benjamin Parker<br>
//             <strong>Height:</strong> 5'10"</p>
//           </div>
//             <div class="card-footer">
//                 <a href="my-favorites.html" class="btn btn-primary float-left notes disable">Edit Notes</a>
//                 <a href="#" class="btn btn-primary float-right">Delete</a>
//             </div>
//         </div>
//         <div class="card">
//             <img class="card-img-top" src="images/black-widow.png" alt="Comic Character Black Widow">
//             <div class="card-body">
//                 <h3 class="card-title card-uppercase"><a href="#">Black Widow</a></h3>
//                 <p class="card-text">Natasha Romanova, known by many aliases, is an expert spy, athlete, and assassin.</p>
//                 <p><strong>Real Name:</strong> Natasha Romanova<br>
//                 <strong>Height:</strong> not known</p>
//             </div>
//             <div class="card-footer">
//                 <a href="#" class="btn btn-primary float-left notes disable">Edit Notes</a>
//                 <a href="#" class="btn btn-primary float-right">Delete</a>
//             </div>
//         </div>
//     </div>`);
//     $("body-container").html(showMyFavs);
// }

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





    // let $showFavsDetails = $(`<h2><a href="my-favorites.html" class="btn btn-primary float-left notes disable">Back to Super Heroes</a></h2><br><br>

    // <div><h2>My Favorite Super Hero</h2></div>
    // <div class="card card-fav"></div>`
    // <div class="card-deck card-padding">
    //         <div class="card col-4">
    //             <img class="card-img-top" src="images/thor.png" alt="Card image cap">
    //             <div class="card-body">
    //                 <h5 class="card-title"><strong>Name: </strong> userFavCharId</h5>
    //             </div>
    //         </div>
    //         <div class="card">
    //       <div class="card-body">
    //         <p class="card-text">
    //             <div class="form-group">
    //                 <h3 for="comment" class="card-title card-uppercase card-margin">Notes</h3>
    //                 <textarea class="form-control" rows="10" id="comment">Season 3: In it, Matt is in much the same position we saw him at the end of The Defenders: half dead and being cared for by a group of nuns. One in particular should be his long-absent mother, which means a good portion of Daredevil season 3 could see Matt out of commission as Daredevil.
    //                 </textarea>
    //             </div></p>
    //         <div class="card-footer">
    //             <a href="#" class="btn btn-primary float-left notes disable">Save</a>
    //             <a href="#" class="btn btn-primary float-right">Delete</a>
    //         </div>
    //       </div>
    //     </div>
    //     </div>
        
        
// );
//     $(".body-container").html($showFavsDetails);


// Build a Note Object buildNotesObj() is userChar 
// in db-interaction page
// function buildNotesObj() {
//     let noteObj = {
//         addNotes: $("#form-notes").val(),
//         uid: user.getUser()
//     };
//     return noteObj;
// }


    // saveToFavs.innerHTML = favoritesDetailDOM();

    ///----- Loading on to DOM after user logs in index.HTML -----/////

    ////// End Delete extra code //////



//////----- Creating my-favorites.HTML -----/////
// Adding characters to my favorites page

// var saveToFavs = document.getElementById("save-fav");

// get fav characters from userCharacter based on id



// function getFavCharactersFB(userCharsObj) {
//     return $.ajax({
//         url: `${firebase.getFBsettings().databaseURL}/characters.json?orderBy="uid"`
//     }).done((getuInfo) => {
//         console.log("user char ucInfo data", getuInfo);
//         return getuInfo;
//     }).fail((error) => {
//         return error;
//     });
// }


//--- db Interaction page information ---//
// load notes area after login
// function getNotes(charNotes) {
//     return $.ajax ({
//         url: `${firebase.getFBsettings().databaseURL}/userCharacter/${charNotes}.json`
//     }).done((notesData) => {
//         return notesData;
//     });
// }

// Load Notes to DOM

// POST - Submits Notes to be processed to userCharacter
// collection in FB. Takes one parameter
// function addNotes(noteFormObj) {
//     return $.ajax({
//         // add notes in the collection
//         url: `${firebase.getFBsettings().databaseURL}/userCharacter.json`,
//         type: 'POST',
//         data: JSON.stringify(noteFormObj),
//         dataType: 'json'
//     }).done((charNotes) => {
//         return charNotes;
//     });
// }


// // function for userCharacter notes
// function getNote(userCharacterId) {
//     console.log("getNote userCharacterId", userCharacterId);
//     return $.ajax({
//         url: `${firebase.getFBsettings().databaseURL}/userCharacter/${userCharacterId}.json`
//     }).done((notesData) => {
//         // console.log("Let's see notes", note);
//         return notesData;
//     });
// }


// --- main.js --- //

// function noteInputText() {
//     $( "textarea" )
//     .keyup(function() {
//         var noteInput = $( this ).val();
//         $( "${myFavs.addNotes}" ).text( noteInput );
//     })
//     .keyup();
// }
//  $("textarea:text").val();
//     console.log("value of textarea ", $("textarea:text").val());

// var userCharInfo = document.getElementById("#comment").value;
// var userCharInfo = $("#comment").val();

// $('#comment').val(userCharInfo);
// console.log("noteInput should have anything added in the textbox", noteInput);
    // $('#comment').val(userCharNotes);
    // let charNotes = $(".form-control").val();
    // let songID = $(this).data("delete-id");


//// ---- Working code ---- ////
// Send New Notes to FB and reload updated notes to DOM

// $(document).on("click", ".save-new-note", function() {
//     let noteObj = db.userChar;
//     noteID = characterDOMbuilder.editButtonId();
//     let noteIDobj = {
//         id: noteID.id,
//         addNotes: noteID.addNotes,
//         uid: noteID.uid
//     };
    
//     console.log("noteIDObj should have noteID, addnotes and user uid", noteIDobj);
//     // $('#comment').val(userCharNotes);
//     // let charNotes = $(".form-control").val();
//     // let songID = $(this).data("delete-id");

//     console.log("This should contain user Character Record of Save button: Whole Rec", noteID, noteID.id);
//     // console.log("This noteID should have character Key", noteID);

//     db.editNotes(noteIDobj, noteID.userFavid)
//     .then((userCharacterId) => {
//         console.log("What's in the new noteObj ", userCharacterId);
//         loadMyNotesToDOM();
//     });
// });

////// ----- End Working code ----- ///
// Get the notes from database for editing on DOM
// $(document).on("click", ".edit-btn", function() {
//     let charNotes = $(this).data("edit-id");
//     db.getNotes(charNotes)
//     .then((note) => {
//         return characterDOMbuilder.characterNotes(note, charNotes);
//     }).then((finishedNote) => {
//         $(".card-padding").html(finishedNote);
//     });
// });

// Save edited notes to FB then reload DOM with updated notes Data
// $(document).on("click", ".save-notes-edit", function() {
//     console.log("I'm inside the edit button notes");
//     let noteObj = db.userChar,
//     charNotes = $(this).attr("id");
//     console.log("charNotes ", charNotes);
//     db.editNotes(noteObj, charNotes)
//     .then((data) => {
//         loadMyNotesToDOM();
//     });
// });

// $(document).on("click", "#save-fav", function() {
//     console.log("saving my fav hero");
//     console.log(event.target.id);
//     var id = event.target.id;

//     var myFav = build.userChar(id);
//     db.saveMyFavChar(myFav);
// });


// $("#login").click(function() {
//     user.googlelogIn()
//     .then((result) => {
//         db.addUserFB(build.buildUserObj(result.addUserFB.displayName, result.user.uid, result.user.photoURL));
//         user.setUser(result.user.uid);
//         // $("#login").addClass("no-user");
//         // $("#user-pic").removeClass("no-user").html(`img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google User" class="profPic">`);
//         userID = result.user.uid;
//         console.log("login complete!", userID);
//         // sendToFirebase();
//     });
// });

// function sendToFirebase() {
//     let userBuilder = build.buildUserObj();
//     // build comes from buildFBObj. 
//     console.log("What's in userBuilder ", userBuilder);
//     db.addUserFB(userBuilder);
//     // db comes from addUserFB in db - interaction. 
// }



// //-------- Save User info to Firebase --------//
// $("#login").click(function() {
//     user.googlelogIn()
//     .then((result) => {
//         user.setUser(result.user.uid);
//         $("#login").addClass("is-hidden");
//         $("#log-out").removeClass("is-hidden");
//         loadMyNotesToDOM();
//     });
// });

