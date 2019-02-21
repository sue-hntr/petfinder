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
    // var newPet = req.body;
    
  
    // // Using a RegEx Pattern to remove spaces from newCharacter
    // // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // petFriend.routeName = petFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(petFriend);
  
    pets.push(petFriend);
  
    res.json(petFriend);

///PUT THE PSEUDO CODE HERE 
//USE HIDE SHOW JQUERY FOR THE MODAL

  });
  
}
