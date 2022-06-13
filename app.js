import  Express  from "express";
import bodyParser from "body-parser";
const app=Express()
app.use(bodyParser.urlencoded({extended:true}))
//using express static to connect stylesheet
app.use(Express.static("public"))
//ejs file from views
app.set('view engine','ejs')
let items=[]
const today=new Date()
//date formate
const options={
  month:'long',
  weekday:'long',
  day:'numeric'
   
}
const day=today.toLocaleString("en-US",options)
app.get("/",(req,res)=>{
    res.render('list',{list:day,newItem:items})
   })
   app.post("/",(req,res)=>{
    let get=req.body.item
    items.push(get)
    res.redirect("/")
   })
app.listen(3000,(req,res)=>{
    console.log("Hey I  m Live on port 3000")
})