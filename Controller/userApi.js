const express = require("express");
const router = express.Router();
const userModel = require("../models/user_models")

router.get("/signup", (req, res) => {
    res.json("Hello user")
})

router.post("/signup", async (req, res) => {
    try {
        const { username, mobile, email, password, address } = req.body
        if (!username || !mobile || !email || !password || !address) {
            console.log("Enter all fields properly");
            res.status(422).json("Enter all fields properly")
        } else {
            const userData = userModel(req.body)
            const saveData = await userData.save()
            console.log(saveData);
            res.status(201).json(saveData)
        }

    } catch (error) {
        res.json("User Registration failed")
        console.log("User Registration failed");
    }
})

//get profiles by Id
router.get("/profile/:uId", async (req, res)=>{
    // console.log("running");
    try {
        const _id=req.params.uId;
        const dbResponse = await userModel.findById(_id)
        res.status(200).json(dbResponse)

    } catch (error) {
        res.status(400).json("Can't find user by this Id")
    }
}),





    module.exports = router;