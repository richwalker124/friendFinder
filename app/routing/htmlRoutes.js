var path = require("path")
//Calling express stuff
var express = require("express")
var app = express();

//This object contains the functions to send the user different HTML pages when requested.

module.exports = function(app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/", function (req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
};


// var htmlroutes = {
//     questions: function(){
//         app.get("/survey", function (req, res) {
//             res.sendFile(path.join(__dirname, "survey.html"));
//         });
//     },

//     home: function(){
//         app.get("/", function (req,res){
//             res.sendFile(path.join(__dirname, "home.html"))
//         });
//     }
// }


// //Export the function
// module.exports = htmlroutes;