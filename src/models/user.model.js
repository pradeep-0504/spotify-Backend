const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    username:{
        required:true,
        type:String,
        uniquie:true,
    },email:{
        type:String,
        required:true,
        uniquie:true,
    },password:{
        type:String,
        required:true,
        uniquie:true,
    },role:{
        type:String,
        enum:['user','artist'],
        default:'user',
    }
})
const userModel=mongoose.model("user",userSchema);

module.exports=userModel