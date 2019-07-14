var express=require("express");
var app=express();
app.set("view engine", "ejs");

app.use(express.static(__dirname+'/public'));



app.use( express.static( "public" ));
// //home

app.get("/",function(req, res) {
   res.render("home"); 
});

app.get("/aboutus",function(req, res) {
   res.render("aboutus"); 
});

app.get("/product",function(req, res) {
   res.render("product"); 
});

app.get("/blog",function(req, res) {
   res.render("blog"); 
});


app.listen(8081||4000,function(){
    console.log("web started");
});
