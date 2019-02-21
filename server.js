// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// console.log(process.env.PORT);


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


//======================================

// var htmlRoute = 
require("./app/routing/htmlRoutes")(app); 
// var apiRoute = 
require("./app/routing/apiRoutes")(app);







