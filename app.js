const express= require("express");
const bodyParser= require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();

var items=[];
var workItems=[];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));




app.get("/", function(req,res){
var day= date();
res.render("todolist",{listTitle:"To-Do", newItems:items, listType:day});
})



app.get("/work", function(req,res){
  var day= date();

  res.render("todolist",{listTitle:"Work", newItems: workItems, listType:day});

})
app.get("/about", function(req,res){
  res.render("about");
})

app.post("/",function(req,res){
  var item = req.body.newItem;
  if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work")
  }else{
    items.push(item);
    res.redirect("/");
  }
  

})




app.listen(3000, function(){
    console.log("Server Started at 3000");
})