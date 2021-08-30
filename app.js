const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(express.static("web"));
app.use(bodyParser.urlencoded());

app.listen(process.env.PORT || 3000, function (){
    console.log("Server Started!");
});

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/panel", function (req, res){
    res.sendFile(__dirname + "/web/test.html");
});
