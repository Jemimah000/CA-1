const express = require("express");
const app = express();
const PORT = 3000;
app.get("/",(req,res)=>{
    res.send("server is running");
})
app.use(express.json());
app.post("/detail",(req,res)=>{
    const{name,email}=req.body;
    if(!name){
        return res.status(404).json({error:"Username cannot be empty"});
    }
    if(!email){
        return res.status(404).json({error:"email cannont be empty"});
    }
    res.json({
        message:"LOGIN SUCCESSFUL",
        data:{
            "username" : name,
            "email" : email
        }
    })
})
app.listen(PORT,()=>{
    console.log(`server is running localhost/:${PORT}`)
})