//session 5
//to use mongoose
const mongoose=require("mongoose");
//schema library
const schema=mongoose.Schema;
//creating user's attributes
const userSchema = new Schema({
     //every user have a name
    name:{
        type:String,
        //it is a required attribute
        required:true
    },
    //every user has an email
    email:{
        type:String,
        //its required and unique
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        //the role should be one of these
        enum:["Manager","Operator","Supplier" ],
        default:"Operator"
    },

    dateCreated:{
        type:Date,
        default:Date.now
    }
},
//this give us crated by modified at and .....,more than the date only
{ timestamps: true });

//we have to export the function
modeule.exports=mongoose.model("User",userSchema);


