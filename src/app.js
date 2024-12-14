const express=require("express")

const app=express();

app.use("/test",(req,res)=>{
    res.send("Hello from the server")
})

app.use("/",(req,res)=>{
    res.send("Hello !");
})



app.listen(7777,()=>{
    console.log("server is running on 7777...");
    
})