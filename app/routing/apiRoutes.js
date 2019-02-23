//A GET route with the url `/api/pets`. This will be used to display a JSON of all possible pets.
var path = require("path");
var pets = require("../data/pets");


module.exports = function(app){
  app.get("/api/pets", function(req, res) {
    res.json(pets);
  });


  // app.get("/api/pets", function(req, res) {
  //   res.sendFile(path.join(__dirname, "pets.html"));
  // });



// Create New Characters - takes in JSON input
app.post("/api/pets", function(req, res) {
  console.log("Post");
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var petFriend = req.body;
    // // Using a RegEx Pattern to remove spaces from newCharacter
    // // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // petFriend.routeName = petFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(petFriend);
    pets.push(petFriend);
    // res.json(petFriend);
    // console.log(pets[4].scores);

//newpet.scores versus pets.js[0].scores
// var petFriendScores = newpet.scores;
// var petSCores = pets.js[0].scores;
//holds the result of the array comparisons
var compareArray = [];
var savArrayCompare = [];
var sumCompare = 0;
var petsAll = pets.length -1; //eliminate newpet/petfriend
var z = 0;


console.log("Pets.js number: " + petsAll);

//--//DO THIS FOR EACH ITEM IN PETS.JS

// a SELECT SCORES IN NEWPET,  b GO TO NEXT ITEM IN PETS.LENGTH, GET THE SCORES
for (var z = 0; z < petsAll; z++){
  console.log("z start: " + z);
  var n = pets[z];
  for (var j=0; j <10; j++){
    var m = petFriend.scores[j];
    var nn = n.scores[j];
    // console.log(m + " --- " + nn);
    x = Math.abs(m - nn);
    // console.log("results: " + x);
    compareArray.push(x);
    // console.log("Compare Array (this round): " + compareArray);
  }
  sumCompare = compareArray.reduce(add);
      function add(accumulator, a) {
          return accumulator + a;
      }
  // console.log("actual diff sum" + z + ":  " + sumCompare);
  compareArray = [];
  savArrayCompare.push(sumCompare);
  
  console.log("z end: " + z);
  }
  console.log("saveArray: " + savArrayCompare);
//FIND THE LOWEST VALUE IN SAVARRAYCOMPARE
  var findPetLowest = Math.min.apply(Math,savArrayCompare);
  console.log("LowestNum: " + findPetLowest);
  //FIND THE FIRST LOCATION OF luckys
  var findPetLoc = savArrayCompare.indexOf(findPetLowest);
  console.log("Location of LowestNum in Pets: " + findPetLoc);
  console.log("Name of First Compatible Petfriend: " + pets[findPetLoc].name);
  var petFinal = pets[findPetLoc];

  return res.json(petFinal);
  // var petFinalImage = "<img src='" + pets[findPetLoc].photo + " ' >";

  // document.getElementById("#match-name").innerhtml(petFinalName);
  // $("#displayFinalModal").modal("toggle");
  // $('#match-name').html(petFinalName);
  // // $('#match-img').html(petFinalImage);

  // let iconDisplay =  '<img src="public/images/' + iconNow[0].pix + '">';
  // $('#weatherpix').html(iconDisplay);

  });
  
  // app.get("/api/pets/:final", function(req, res) {
  //   var petFinalName = pets[findPetLoc].name;
  //   console.log ("pets Final Name: " + petFinalName);
  //   res.json(petFinalName);
  // });


}
