// 1st : session 4 in terminal
//npm init --> initialize the the stockflow
//npm i express --> to add express packages
//npm i mongoose --> also to add mongoose packages
//npm i dotenv --> create the package-lock.json(includes all versions and details we will using)
//npm i nodmon --> thses can be seen also in package-lock.json
// go to package.json in scripts add -->  "start": "nodemon index.js" -->to use start directly
const mongoose = require("mongoose");
//to open acess
require("dotenv").config();

//create a function(not local) named connectDB to make a connection
//async : since it will return a promise
//and an async function has try and catch
exports.connectDB = async ()=>{
    try{
        //make the connection
        await mongoose.connect(process.env.MongoDB_URI);
        //if this connection is done it will return MongoDB Connected !
        console.log("MongoDB Connected !");
    }
    //catch is for the error
    catch(err){
        console.error(err);
        process.exit(1);
    }
}