const dotenv = require("dotenv");
dotenv.config();
const str = process.env.MONGO_CONNECTION_STRING;
const express = require("express");
const mongoDB =  require("mongoose");



const app = express();
app.use(express.static("frontend"));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/frontend/index.html");
})

/*app.listen(3000, function(){
    console.log("Server is running on http://localhost:3000");
})*/

mongoDB.set('strictQuery', false)
mongoDB.connect(process.env.MONGO_CONNECTION_STRING, function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("Successfull DB connection");
        app.listen(3000, function(){
            console.log("Server is running on http://localhost:3000");
        })   
    }
});
