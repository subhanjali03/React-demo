const express = require('express')
const app = express()
const cors =require("cors")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const Content=require("./contentschema.js")
const port = 4000;
const students=[
         {id:1,name:"sath"},
         {id:2,name:"anjuu"},
         {id:3,name:"naga"},
         {id:4,name:"holi"}

	]
mongoose.connect("mongodb+srv://KumbaNagalakshmi:nagalakshmi@cluster0.wmunskm.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
    	console.log("connected successfully")
    })
    app.use(bodyparser.urlencoded({
        extended:true
    }))
    app.use(bodyparser.json())
app.use(cors())
app.post("/add",(req,res)=>{
    console.log(req.body)
    const {username,password}=req.body
    const newData=new Content({
        username,password
    })
    newData.save()
})

app.get("/receive",(req,res)=>{
    return Content.find()
    .then((val)=>res.json(val))
})
app.get("/",(req,res)=>{
	res.send("it is working now")
})

app.get("/students",(req,res)=>{
	return res.json(students)
})



app.listen(port,()=>console.log("server is started"))