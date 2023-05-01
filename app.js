//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

    const day = date.getDate();

    // var currentDay = today.getDay();
    // var day = "";

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //         case 1:
    //             day = "Monday";
    //             break;
    //             case 2:
    //                 day = "Tuesday";
    //                 break;
    //                 case 3:
    //                     day = "Wednesday";
    //                     break;
    //                     case 4:
    //                         day = "Thursday";
    //                         break;
    //                         case 5:
    //                             day = "Friday";
    //                             case 6:
    //                                 day = "Saturday";
    //                                 break;
    //     default:
    //         console.log("Error: current day is equal to: " + currentDay);
    // }

    // if (currentDay === 0) {
    //     day = "Sunday";
    // } else if (currentDay === 1){
    //     day = "Monday";
    // } else if (currentDay === 2){
    //     day = "Tuesday";
    // } else if (currentDay === 3){
    //     day = "Wednesday";
    // } else if (currentDay === 4){
    //     day = "Thursday";
    // } else if (currentDay === 5){
    //     day = "Friday";
    // } else {
    //     day = "Saturday";
    // }
            
        // }

    // sunday o  -  saturday 6
    // if (currentDay === 6 || currentDay === 0) {
    //     day = "Weekend";

    //     // res.sendFile(__dirname + "/index.html");
    //     // res.write("<h1>Yay it's the weekend!</h1>");
    //     // res.write("<p>It is not the weekend!</p>");

    // } else {
    //     day = "Weekday";

    //     // res.sendFile(__dirname + "/index.html");
    // }

    res.render("list", {listTitle: day, newListItems: items});

    // //    res.send("Hello");
});

app.post("/", function(req, res) {

    const item = req.body.newItem;
    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }


});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "work List", newListItems: workItems});
});


// app.post("/work", function(req, res) {
//  let item = req.body.newItem;
//  workItems.push(item);
//  res.redirect("/work");
// });

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
