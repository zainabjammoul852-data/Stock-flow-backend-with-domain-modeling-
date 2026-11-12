//also seesion 5
//to use mongoose
const mongoose=require("mongoose");
//schema library
const schema=mongoose.Schema;
//creating item's attributes
const itemSchema = new Schema({
    itemCode: { 
        type: String,
        required: true, 
        unique: true 
    },
    name: {
         type: String, 
         required: true 
      },
     description: {
     type: String 
    },
     category: {
     type: String, 
     required: true 
    },
    //there must be a default to work since at the beginning its always 0
     quantity: {
      type: Number, 
      default: 0 
    },
    //items should not be less than 10
    minThreshold: { 
         type: Number,
         default: 10 },
},
{ timestamps: true });

module.exports = mongoose.model("Item", itemSchema);