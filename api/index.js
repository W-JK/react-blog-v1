const express = require("express");
const app = express();


//Testpoint: console.log("live change check: pass ;)")

/* testpoint:  app main url (

app.use("/",(req,res)=>{
    console.log("Main URL started")
}) 

*/

const dotenv = require("dotenv");
const mongoose = require('mongoose');
const PORT = 3001;
const authRoute = require ("./routes/auth");


dotenv.config();
app.use(express.json());


mongoose
    .connect(process.env.MONGO_URL, 
       {
        
        serverSelectionTimeoutMS: 5000
      } 
    )
    /*
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err.reason));
      */

    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err.reason);
    });



    app.use("/api/auth", authRoute);

app.listen(PORT, () => {
    console.log("BackEnd is running")
});