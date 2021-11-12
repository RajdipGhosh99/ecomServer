const mongoose=require("mongoose")
const DBUrl = `mongodb+srv://rajdip:9842@cluster0.t5r5k.mongodb.net/ecomDB?retryWrites=true&w=majority`

mongoose.connect(DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("DB connection Successfull");        
}).catch((err)=>{
    console.log("DB connection faled Err:"+err);
})
module.exports=mongoose;