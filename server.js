const dotenv = require("dotenv");
const express = require("express");
const mongoose =  require("mongoose");
const courseLib = require("./backend/lib/courseLib");

dotenv.config();
const str = process.env.MONGO_CONNECTION_STRING;


const app = express();
app.use(express.static("frontend"));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/frontend/index.html");
})

/*app.listen(3000, function(){
    console.log("Server is running on http://localhost:3000");
})*/

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_CONNECTION_STRING, async function(err){
    if(err){
        console.error(err);
    }
    else{
        // console.log("Successfull DB connection");
        // await courseLib.createCourse();
        // const course = await courseLib.getAllCourses();
        // console.log(course);
        app.listen(3000, function(){
            console.log("Server is running on http://localhost:3000");
        }); 
    }
});
