var sass = require("node-sass-middleware");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var search = require(path.join(__dirname,"services/search"));
var app = express();
app.set("view engine", "pug");
app.use(bodyParser.urlencoded());


app.use(sass({
  src: path.join(__dirname),
  dest: path.join(__dirname, "public"),
}));

app.get("/", function(req, res) {
  res.redirect("/find-stick");
});

app.get("/find-stick", function(req, res) {
  res.render("find-stick", {search:search});
});

app.post("/find-stick", function(req, res) {
  var query = {
    brands: req.body.brands, 
    flexes: req.body.flexes,
    curves: req.body.curves,
    sizes: req.body.sizes 
  };
  search.findSticks(query, function(err, data){
    if (data) {
      res.render("find-stick", {search:search, result:data});
    }
    throw err; 
  }); 

  var brands = req.body.brands; // get right param name
  res.json({body:req.body, brands: brands});
});

app.use(express.static("public"));

app.listen(3000, function() {
  console.log("listening on port 3000");
});


