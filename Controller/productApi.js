const express = require("express");
const { modelName } = require("../models/products_models");
const router = express.Router();
const productsModel = require("../models/products_models")

router.get("/", (req, res) => {
    res.json("Hello Products")
})
//create new products
router.post("/add", async (req, res) => {
    try {
        const { name, catagory, price, description,imgUrl } = req.body
        if (!name || !catagory || !price || !description || !imgUrl) {
            console.log("Enter all fields properly");
            res.status(422).json("Enter all fields properly")
        } else {
            const productsData = productsModel(req.body)
            const saveData = await productsData.save()
            console.log(saveData);
            res.status(201).json(saveData)
        }

    } catch (error) {
        res.json("Products Registration failed"+error)
        console.log("Products Registration failed"+error);
    }
})
// view all products
router.get("/viewall", async(req, res) => {
 try {
     const dbResponse = await productsModel.find();
     res.status(200).json(dbResponse)
     
 } catch (error) {
     console.log("No data found")
     res.status(400).json("No products found")
 }
});
//view by catagory
router.get("/catagory/:catagory", async(req, res) => {
  try {
      const catagory=req.params.catagory.trim()
      const dbResponse= await productsModel.find({catagory})
      res.status(200).json(dbResponse)
  } catch (error) {
      res.status(400).json("No Item found in this catagory")
  }


});


// search by name
router.get("/name/:data", async (req, res) => {
    
      try {
          const name=req.params.data.trim();
          const dbResponse = await productsModel.find({ name:{ '$regex': name, '$options': 'i' }})
          res.status(200).json(dbResponse)
      } catch (error) {
          res.status(400).json("No Item found in this catagory")
      }
});

//Search by Id and Update
router.put("/update/:data",async(req,res)=>{
    console.log("running");
try {
    const _id = req.params.data.trim()
    const dbResponse=await productsModel.findByIdAndUpdate(_id,req.body,{new:true})
    res.status(200).json(dbResponse)
} catch (error) {
    res.status(400).json("Please try again Err: "+error)
}
});

//delete by ID
router.delete("/delete/:pId",async(req,res)=>{
try {
    const _id = req.params.pId
    const dbResponse = await productsModel.findByIdAndDelete(_id)
    if(dbResponse===null){
        res.status(400).json("Data Not Found")
    }else{
        res.status(200).json(dbResponse)
    }
} catch (error) {
    res.status(400).json("Please try again Err: "+error)
}
})

module.exports=router;