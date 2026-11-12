//also seesion 5
//to use mongoose
const mongoose=require("mongoose");
//schema library
const schema=mongoose.Schema;
//creating warehouse's attributes
const warehouseSchema = new Schema({

    name: { 
        type: String,
         required: true 
        },
    location: {
         type: String, 
        required: true 
    },
    capacity: {
         type: Number, 
        required: true
     },
     //here we used the reference since a zone is in warehouse,so this bring the zones to here
    zones: [{ type: mongoose.Schema.Types.ObjectId, ref: "Zone" }],
},
//this give us crated by modified at and .....,more than the date only
{ timestamps: true });

//we have to export the function
modeule.exports=mongoose.model("Warehouse",warehouseSchema);
