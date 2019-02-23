//A GET route with the url `/api/pets`. This will be used to display a JSON of all possible pets.
var path = require("path");
var pets = require("../data/pets");


module.exports = function(app){
  app.get("/api/pets", function(req, res) {
    res.json(pets);
  });

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
    //holds the result of the array comparisons
    var compareArray = [];
    var savArrayCompare = [];
    var sumCompare = 0;
    var petsAll = pets.length -1; //eliminate newpet/petfriend
    var z = 0;

//--//DO THIS FOR EACH ITEM IN PETS.JS

// a SELECT SCORES IN NEWPET,  b GO TO NEXT ITEM IN PETS.LENGTH, GET THE SCORES
    for (var z = 0; z < petsAll; z++){
      var n = pets[z];
      for (var j=0; j <10; j++){
        var m = petFriend.scores[j];
        var nn = n.scores[j];
        x = Math.abs(m - nn);
        compareArray.push(x);
      }
      sumCompare = compareArray.reduce(add);
          function add(accumulator, a) {
              return accumulator + a;
          }
      // empty compare Array or will always fill up over and over
      compareArray = [];
      savArrayCompare.push(sumCompare);
      }
    //FIND THE LOWEST VALUE IN SAVARRAYCOMPARE
      var findPetLowest = Math.min.apply(Math,savArrayCompare);
    //FIND THE FIRST LOCATION OF luckys
      var findPetLoc = savArrayCompare.indexOf(findPetLowest);
      var petFinal = pets[findPetLoc];
      return res.json(petFinal);
     });
 }
