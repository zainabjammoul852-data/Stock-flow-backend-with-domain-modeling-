//also seesion 5
//to use mongoose
const mongoose=require("mongoose");
//schema library
const schema=mongoose.Schema;
//creating stockMovement's attributes
const  stockMovementSchema = new Schema({
     ref_nmb: {
         type: String,
         required: true,
         unique: true 
        },
     type: {
        type: String,
        enum: ["INBOUND", "OUTBOUND", "TRANSFER"],
        required: true,
        },
    status:{
        type: String,
        enum: ["PENDING", "APPROVED", "CANCELLED", "COMPLETED"],
        default: "PENDING",
    },
    originWarehouse: { type: mongoose.Schema.Types.ObjectId, ref: "Warehouse" },
    destinationWarehouse: { type: mongoose.Schema.Types.ObjectId, ref: "Warehouse" },
    //this is an array to include items in the movements,since we need to know the item that is moving
    items: [
    {
      item: { 
        type: mongoose.Schema.Types.ObjectId, ref: "Item",
        required: true },
      quantity: {
        type: Number,
        required: true },
    },
  ],
    createdBy: {
         type: mongoose.Schema.Types.ObjectId, ref: "User",
         required: true 
        },
    approvedBy: {
         type: mongoose.Schema.Types.ObjectId, ref: "User" 
        },
    timeOfMovement: {
         type: Date,
         default: Date.now 
        },
    
},
{ timestamps: true });
module.exports = mongoose.model("StockMovement", stockMovementSchema);