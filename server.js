const express = require("express");

const app = express();
app.get("/", function(req, res){
    res.send("Hello World");
})
app.get("/Myname", function(req, res){
    res.send("Sai Tejaswi");
})

app.listen(3000, function(){
    console.log("Server is running on http://localhost:3000");
})

