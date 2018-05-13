var express = require("express");
var app = express();

app.get("/name", function(req, res){
   res.send("<h1>Hello world name</h1>");
});

app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name +"</h1>");
});

app.get("/google", function(req, res){
   res.redirect('https://www.google.com/');
});
app.get("/search/:name", function(req, res){
     var name = req.params.name;
   res.redirect('https://www.google.com/search?q='+ name );
});
app.get("/*", function(req, res){
   res.send("<h1>Sorry</h1>");
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
