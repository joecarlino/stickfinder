var sass = require("node-sass-middleware");
var express = require("express");
var path = require("path");

var app = express();
app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.render("index", {/*template context*/});
});

app.use(sass({
  src: path.join(__dirname),
  dest: path.join(__dirname, "public"),
}));


app.use(express.static("public"));

app.listen(3000, function() {
  console.log("listening on port 3000");
});


