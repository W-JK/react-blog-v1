const express = require("express");
const app = express();


//Testpoint: console.log("live change check: pass ;)")

/* testpoint:  app main url (

app.use("/",(req,res)=>{
    console.log("Main URL started")
}) 

*/

const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.listen("3001", () => {
    console.log("BackEnd is running")
});