const express=require("express")
const app=express()
const port=3080
const path=require("path")
const bodyParser=require("body-parser")


app.get('/', function(req, res){
  console.log(req.url)
  v=req.url
  res.send(`This the homepage ${v}`)

 });







 
 app.listen(3080,()=>{console.log("Server is listening on port 3080")});
