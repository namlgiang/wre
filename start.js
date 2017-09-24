var express = require('express');
var app = express();
const fs = require('fs');

app.use(express.static('public'));

app.get("/decrypt", function(req, res) {
  // console.log(req.query.key);
  fs.appendFile("public/wre.txt", req.query.key + "\r\n");
  res.send("1");
});

app.listen(8084, function () {
  console.log('Example app listening on port 8081!')
})
