//also session 4 :
//to create new server
const express = require ("express");
const app = express();
const DB=require("./database").connectDB;
//from session 11 to connect
const itemRouter = require("./routers/itemRouter");
const movementRouter = require("./routers/movementRouter");

//to execute DB()
DB();
//middleware : i will write json and it will accept it only, so server will work in json only
app.use(express.json());
//also session 11
app.use("/api/items", itemRouter);
app.use("/api/movements", movementRouter);

//open port and listen create an http server
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

//then type in terminal npm start to check the output
