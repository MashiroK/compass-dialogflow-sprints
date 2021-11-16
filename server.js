var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use(express.static(path));
app.use("/", router);

let port = process.env.PORT || 8080;
app.listen(port);