//also seesion 5
//to use mongoose
const mongoose=require("mongoose");
//schema library
const schema=mongoose.Schema;
//creating zone's attributes
const zoneSchema = new Schema({
    zoneCode: {
         type: String, 
         required: true, 
         unique: true 
        },
    type: {
         type: String,
        enum: ["cold", "dry", "dangerous"],
         required: true,
  },    
    maxCapacity: {
          type: Number, 
          required: true
        },
    warehouse: {
        type: mongoose.Schema.Types.ObjectId, ref: "Warehouse", 
        required: true 
    }    

},
{ timestamps: true });

module.exports = mongoose.model("Zone", zoneSchema);