const mongoose=require("mongoose")
const validator= require("validator")


const userSchema =new mongoose.Schema({
    username:{
        required: true,
        type:String,
        minlenth:[3,"Username must be atleast 3 characters"]

    },
    mobile:{
        required:true,
        type:Number
    },
    email:{
        unique:[true,"This email is already registered with us"],
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new error("Invalid Email address");
            }
        }
    },
    password:{
        required:true,
        type:String,
        minlenth: 6,

    },
    address:{
        type:String
    },
    myProducts:{
        type:Array
    }
    
})
userModel= mongoose.model("uesrCollection",userSchema);
module.exports=userModel;