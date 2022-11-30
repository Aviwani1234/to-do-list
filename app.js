const express = require("express");
const bodyPareser = require("body-parser");
const { render } = require("ejs");

const app = express();

app.set('view engine', 'ejs')

app.use(bodyPareser.urlencoded({extended:true}));

app.use(express.static("public"))

var items = ["Buy food", "Cook food", "Eat Food"];
 
app.get("/", function (req, res) {

    var today = new Date();
    var currentDay = today.getDay();
    
    var options = {
        
        weekday : "long",
        day : "numeric",
        month : "long"

    };

    var day = today.toLocaleDateString("en-US",options);
    res.render("list", { kindOfday: day, newItem: items});
})


app.post("/",function(req,res){
   var item = req.body.newItem;
   items.push(item);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("server is running on port 3000");
})