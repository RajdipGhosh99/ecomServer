const express =require("express");
const mongoose=require("./DB_Con/DB_con")
const userApi=require("./Controller/userApi")
const productsApi=require("./Controller/productApi")
const app=express()

const port =process.env.PORT||8002
app.use(express.json() )

app.use("/user",userApi)
app.use("/products",productsApi)

app.get("/", (req, res) => {
  res.json("Hello Express")
});

app.listen(port,()=>{
    console.log("Server running at port no: "+port )
})
