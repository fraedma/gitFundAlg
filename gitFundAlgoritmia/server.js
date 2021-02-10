var express = require('express');
var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//app.use(express.static(__dirname + '/public')); //__dir and not _dir
//var port = 3000; // you can use any port
app.listen(3000, () => {
    console.log("Server on port http://localhost:3000");
  });