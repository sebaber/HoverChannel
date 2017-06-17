var express = require('express');
var router = express.Router();

var cero = "Mozilla/5.0  (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.104 Safari/537.36";

var one = "Mozilla/5.0 (Windows  NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.104 Safari/537.36";

/* GET users listing. */
router.get('/', function(req, res, next) {

  //me fijo si es un 0

  //me fijo si es un 1

  var ua = req.get('User-Agent');
  if(ua == cero) res.send("INPUT: 0");
  else if(ua == one) res.send("INPUT: 1");
  else res.send("");
});

module.exports = router;
