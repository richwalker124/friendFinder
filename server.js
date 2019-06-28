//require depedencies
var express = require("express");
var path = require("path");

//Express settings
var app = express();
//Allows the port to function in both heroku deployment and localhost without change
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'app/static')));

//console.log(require)

//Require rotes for server functionality (To grab the pages and stuff you know)
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);



//Listener so the express server runs
app.listen(PORT, function(){
    console.log("Listening on localhost:" + PORT)
})