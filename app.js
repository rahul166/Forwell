var express=require("express");
var app=express();
app.set("view engine", "ejs");

app.use( express.static( "public" ));
// //home

app.get("/",function(req, res) {
   res.render("home"); 
});

app.get("/about-us",function(req, res) {
    //About us
   res.render("aboutus"); 
});

app.get("/blog",function(req, res) {
   res.render("blog"); 
});

app.get("/contact",function(req, res) {
   res.render("contact"); 
})


app.listen(3000,process.env.IP,function(){
    console.log("web started");
});



