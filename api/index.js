const express = require("express");
const app = express();


//Testpoint: console.log("live change check: pass ;)")

/* testpoint:  app main url (

app.use("/",(req,res)=>{
    console.log("Main URL started")
}) 

*/



app.listen("3001", () => {
    console.log("BackEnd is running")
});