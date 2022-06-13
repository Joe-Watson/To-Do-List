import  Express  from "express";
import bodyParser from "body-parser";
import getDate from './date.js'
const app=Express()
app.use(bodyParser.urlencoded({extended:true}))
//using express static to connect stylesheet
app.use(Express.static("public"))
//ejs file from views
app.set('view engine','ejs')
let items=[]
let workitem=[]
let studentItem=[]
let friend=[]

const day=getDate()

app.get("/",(req,res)=>{
    res.render('list',{listTitle:day,newItem:items})
   })
   app.post("/",(req,res)=>{
    let get=req.body.item
    //   for  work list
        if(req.body.btn==="Work")
        {
            workitem.push(get)
            res.redirect("/work")
        }
        //   For Student
        else if(req.body.btn==="Student")
        {
            studentItem.push(get)
            res.redirect("/student")
        
        }
          // for   friend
        else if(req.body.btn==="Friend")
        {
            friend.push(get)
            res.redirect("/friend")
        }
    //For home page
        else{
            items.push(get)
            res.redirect("/")
        }
    
   })

//    work list
  app.get("/work",(req,res)=>{
    res.render('list',{listTitle:"Work",newItem:workitem})
   })
//    Student
   app.get("/student",(req,res)=>{
    res.render('list',{listTitle:"Student",newItem:studentItem})
   })

   //    friend
   app.get("/friend",(req,res)=>{
    res.render('list',{listTitle:"Friend",newItem:friend})
   })
   app.get("/about",(req,res)=>{
    res.render("about")
   })

app.listen(3000,(req,res)=>{
    console.log("Hey I  m Live on port 3000")
})