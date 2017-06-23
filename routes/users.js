var express = require('express');
var router = express.Router();



var cero = "Mozilla/5.0  (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36";

var one = "Mozilla/5.0 (Windows  NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36";

/* GET users listing. */
router.get('/', function(req, res, next) {

  //me fijo si es un 0

  //me fijo si es un 1

  var ua = req.get('User-Agent');
  if(ua == cero) console.log("INPUT: 0");
  else if(ua == one) console.log("INPUT: 1");
  else console.log("");
  res.send("GET RECIVED");
});

module.exports = router;
