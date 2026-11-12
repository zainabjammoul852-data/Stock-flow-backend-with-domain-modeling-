//session 11
//routers to use functions we build in the controllers
const express = require("express");
const router=express.Router();
//go to the file we built the functions in
const itemController = require("../controllers/itemController");
//post-->create
router.post("/", itemController.createItem);//createItem; funlction we arleady build
//get-->to get what we need(here get items)
router.get("/", itemController.getAllItems);//getAllItems: funlction we arleady build
//put-->used in updates
router.put("/:id", itemController.updateItem);//updateItem: funlction we arleady build
//delete-->delete items for example
router.delete("/:id", itemController.deleteItem);//deleteItem: funlction we arleady build
//export it
module.exports = router;