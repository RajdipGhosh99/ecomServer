const mongoose =require("mongoose");

const productScheme= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    catagory:{
        type: String,
        required: true
    },
    price:{
    type: Number,
    required: true
    },
    description:{
        type: String,
        required: true
    },
    imgUrl:{
        type:String
    }
})

const productsModel=mongoose.model("productCollection",productScheme);

module.exports= productsModel