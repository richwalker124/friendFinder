//Pulling in friend data
var data = require("../data/friends.js")
//Express 
var express = require("express");
var app = express();

//Function for api route
module.exports = function(app){
        app.post("/api/friends", function(req, res){
            console.log(data);
            res.json(data);
        })
    }


// var apiroute = {
//     friends: function (){
//         app.get("/api/friends", function(req, res){
//             console.log(data);
//             res.json(data);
//         })
//     }
// }

// //Exporting function!
// module.exports =  apiroute.friends();