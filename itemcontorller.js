//session 6
//we need to create controllers to do the actions we want to be done
//so we create functions that do the work

//1st we have to require the database of item to control it by :
const Item= require("../models.Item");

//1:create item function
//the name of this function is :createItem, its  async and i need a request and response with try and catch of course
exports.createItem = async (req,res)=>{
    //incase there is no error the function will apply only the try part and everything goes succesfully
    try{ //await : waits //req.body -->those bring the item from the body  
        const item = await Item.create(req.body);
        //the response after the body was created should be that its created successfuly
        //201 : created successfully
        res.status(201).json(item);
    }//if there is an error we put catch -->that catches the error
    catch(err){
        //prints the error , but we can use the res only
       // console.log(err);
        //400 means its a bad request, also message error will be send from the seconnd part
        res.status(400).json({message : err.messge});
    }
}
//2:getAllItems  function : to monitor the stock and locate items
exports.getAllItems= async(req,res)=>{
    try{ // populate--> replace the item with its data 
        const items = await Item.find().populate("zone supplier", "zoneCode type name email");
        //200 -->success
        res.status(200).json(items);
    }
    catch(err){
        //console.log(err);
        res.status(500).json({message:err.message});
    }
}
//3:updateItem  function : to update
exports.updateItem = async (req, res) => {
  try {//re.params.id --> find the id from the top and req.body from the body
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated){
        return res.status(404).json({ message: "Item is not found" });
    }//else --> success
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
//4:deleteItem  function : to delete the item
exports.deleteItem = async (req, res) => {
  try {
    const deleted = await Item.findByIdAndDelete(req.params.id);
    if (!deleted) {
        return res.status(404).json({ message: "Item not found" });
    }//else
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

